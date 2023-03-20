<template>
  <div v-if="error" class="text-blue-1 dark:text-light-1 mt-7">
    Sorry, could not fetch repositories
  </div>
  <div v-else-if="loading" class="flex justify-center items-center h-screen">
    <img class="w-[40px] m-auto" src="../assets/loading.gif" alt="loading" />
  </div>
  <div v-else>
    <h3 class="text-xl font-bold mb-4 text-blue-2 dark:text-light-2">
      Repositories
    </h3>
    <div class="flex flex-wrap gap-3 md:gap-x-10">
      <div
        @click="$router.push(`/repositories/${item.id}`)"
        class="w-full xl:w-[47%] text-blue-2 bg-light-1 shadow-lg dark:bg-blue-1 dark:text-light-2 px-6 py-9 font-normal flex justify-between border-light-1 dark:border-[.1rem] dark:border-blue-2 cursor-pointer hover:scale-[0.98] transition duration-200 ease-in-out rounded-md"
        v-for="item in paginatedData"
        :key="item.id"
      >
        <div>
          <span class="flex gap-x-2 items-center mb-4">
            <p class="text-lg font-bold text-grad-1 dark:text-blue-3">
              {{ item.name }}
            </p>
            <button
              class="pointer dark:bg-blue-1 text-xs font-light border-[.1rem] px-2 py-[.1rem] border-light-3 dark:border-blue-2 shadow-sm dark:text-light-4 rounded-full"
            >
              {{
                item.visibility.charAt(0).toUpperCase() +
                item.visibility.slice(1)
              }}
            </button>
          </span>
          <span class="flex items-center dark:text-light-4 text-blue-2 my-2">
            <p v-if="item.language === null"></p>
            <p
              v-else-if="item.language === 'HTML'"
              class="text-xs font-normal mr-4 flex"
            >
              <img
                class="w-[12px] mr-1"
                src="../assets/red-circle.svg"
                alt="circle"
              />
              {{ item.language }}
            </p>
            <p
              v-else-if="item.language === 'Vue'"
              class="text-xs font-normal mr-4 flex"
            >
              <img
                class="w-[12px] mr-1"
                src="../assets/green-circle.svg"
                alt="circle"
              />
              {{ item.language }}
            </p>
            <p v-else class="text-xs font-normal mr-4 flex">
              <img
                class="w-[12px] mr-1"
                src="../assets/yellow-circle.svg"
                alt="circle"
              />
              {{ item.language }}
            </p>
            <p class="text-xs font-normal flex items-center mr-4">
              <img
                class="w-[15px] mr-1"
                src="../assets/white-star.svg"
                alt="circle"
              />
              {{ item.stargazers_count }}
            </p>
            <p class="text-xs font-normal flex items-center mr-4">
              <img
                class="w-[15px] mr-1"
                src="../assets/git-fork.svg"
                alt="circle"
              />
              {{ item.forks }}
            </p>
            <p class="text-xs font-normal">
              Updated on {{ item.updated_at.slice(0, 10) }}
            </p>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex items-center justify-center mt-10 pb-6 dark:text-light-3 text-blue-2 flex-wrap gap-x-16 gap-y-5 text-center"
  >
    <p class="text-md font-normal">Page {{ currentPage }} of {{ pageCount }}</p>
    <div class="flex flex-wrap items-center space-x-2">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="bg-[#238636] text-light-1 rounded-lg py-1 px-3 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-gray-900 hover:bg-[#134f1f] transition duration-200 ease-in-out"
      >
        Prev
      </button>
      <div class="flex items-center">
        <button
          v-for="pageNumber in pageNumbers"
          :key="pageNumber"
          @click="currentPage = pageNumber"
          :class="{
            'dark:bg-blue-2 border-[0.1rem] border-[#238636] dark:border-blue-2 rounded-lg py-[.1rem] px-3 dark:text-light-3 text-blue-2':
              currentPage === pageNumber,
            'dark:text-light-2 dark:hover:text-light-2 dark:hover:bg-blue-2 border-[0.1rem]  border-light-2 dark:border-blue-1 hover:border-[#238636]  rounded-lg py-[.1rem] px-2':
              currentPage !== pageNumber,
          }"
        >
          {{ pageNumber }}
        </button>
      </div>
      <button
        @click="nextPage"
        :disabled="currentPage === pageCount"
        class="bg-[#238636] text-light-1 rounded-lg py-1 px-3 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-gray-900 hover:bg-[#134f1f] transition duration-200 ease-in-out"
      >
        Next
      </button>
    </div>
    <div>
      <label
        for="pageCountSelect"
        class="mr-2 text-md text-blue-1 dark:text-light-2 font-normal"
        >Repo Count :</label
      >
      <select
        id="pageCountSelect"
        v-model="itemsPerPage"
        @change="changePageCount"
        class="rounded-lg py-1 px-3 text-md font-normal text-blue-1 dark:text-light-3 dark:bg-blue-2 bg-light-1 shadow-lg border-none outline-none"
      >
        <option
          v-for="option in pageCountOptions"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import { onMounted, ref, computed } from "vue";
import useFetch from "../composable/useFetch";

export default {
  name: "Repositories",
  components: {},
  setup() {
    const { data, error, loading, fetchData } = useFetch(
      "https://api.github.com/users/meldy2503/repos?sort=updated"
    );

    const currentPage = ref(1);
    const itemsPerPage = ref(6);

    const pageCount = computed(() => {
      return Math.ceil(data.value.length / itemsPerPage.value);
    });

    const pageNumbers = computed(() => {
      const numbers = [];
      for (let i = 1; i <= pageCount.value; i++) {
        numbers.push(i);
      }
      return numbers;
    });

    onMounted(async () => {
      await fetchData();
    });

    const paginatedData = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;
      return data.value.slice(startIndex, endIndex);
    });

    const pageCountOptions = [4, 6, 8, 12];

    function nextPage() {
      if (currentPage.value < pageCount.value) {
        currentPage.value++;
      }
    }

    function prevPage() {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    }

    function changePageCount() {
      currentPage.value = 1;
    }

    return {
      data,
      error,
      loading,
      currentPage,
      itemsPerPage,
      pageCount,
      pageNumbers,
      pageCountOptions,
      changePageCount,
      nextPage,
      prevPage,
      paginatedData,
    };
  },
};
</script>
