<template>
  <main
    class="max-w-[1200px] w-[90%] flex justify-center items-center flex-col mx-auto my-16 md:my-24 pb-16"
  >
    <div
      class="relative dark:bg-light-6 bg-light-1 w-full min-[400px]:w-[90%] sm:w-[80%] border-[.1rem] border-light-1 border-b-0 shadow-2xl dark:border-blue-2 rounded-xl text-blue-2 dark:text-light-2 text-center px-2 lg:px-10 pt-10 pb-16 after:absolute after:bottom-0 after:left-0 after:w-full after:h-4 after:bg-gradient-to-r from-grad-1 via-grad-2 to-grad-3 rounded-b-lg after:rounded-br-lg after:rounded-bl-lg"
    >
      <h1
        class="font-Bakbak text-[3rem] xs-[4rem] leading-none mb-4 tracking-wider"
      >
        GITHUB FINDER
      </h1>
      <p class="font-bold text-xl">Search for a GitHub Profile</p>
      <form
        @submit.prevent="onSubmitHandler"
        class="flex flex-col sm:flex-row gap-x-1 gap-y-2 justify-center items-center mt-8 text-blue-1 outline-none border-none"
      >
        <input
          v-model="input"
          type="search"
          placeholder="Search profile"
          class="py-2 bg-light-2 border-[.05rem] border-light-3 px-3 md:p-3 outline-none rounded-md w-[80%] sm:w-[60%] lg:w-[50%]"
        />
        <button
          type="submit"
          class="bg-blue-1 py-2 px-3 md:p-3 rounded-md text-light-1 border-none outline-none"
        >
          Search
        </button>
      </form>
    </div>
    <div class="max-w-[1200px] text-blue-1 dark:text-light-3 mt-10">
      <div v-if="loading">
        <img
          class="w-[50px] mx-auto mt-[5rem]"
          src="../assets/loading.gif"
          alt="loading"
        />
      </div>
      <div v-else>
        <div
          class="flex flex-wrap gap-6 items-center justify-center"
          v-if="userSearch.length >= 3"
        >
          <div
            class="flex flex-col min-[400px]:flex-row bg-light-1 shadow-xl dark:bg-light-6 border-[.1rem] border-light-1 dark:border-blue-2 w-[95%] min-[400px]:w-[90%] sm:w-[80%] md:w-[45%] lg:w-[32%] h-[220px] min-[400px]:h-[180px] rounded-xl p-3 items-center justify-center gap-3 text-center min-[400px]:text-left"
            v-for="user in userSearch"
            :key="user.id"
          >
            <img
              class="w-[100px] max-w-full rounded-full border-4 border-blue-1"
              :src="user.avatar_url"
            />
            <div>
              <h1 class="mb-3 font-bold">{{ user.login }}</h1>
              <a
                class="px-2 py-[.35rem] bg-gradient-to-r from-grad-3 via-grad-3 to-grad-2 text-blue-1 rounded-lg text-sm font-Bakbak hover:bg-gradient-to-r hover:from-grad-2 hover:via-grad-2 hover:to-grad-3"
                :href="user.html_url"
                target="_blank"
                >View Profile</a
              >
            </div>
          </div>
        </div>
        <div
          class="flex gap-6 items-center justify-center flex-wrap"
          v-else="userSearch.length < 3"
        >
          <div
            class="bg-light-1 shadow-xl dark:bg-light-6 border-[.1rem] w-[260px] min-[350px]:w-[330px] border-light-1 dark:border-blue-2 flex flex-col md:flex-row h-[220px] rounded-xl p-8 items-center justify-center gap-3 text-center min-[400px]:text-left"
            v-for="user in userSearch"
            :key="user.id"
          >
            <img
              class="w-[100px] max-w-full rounded-full border-4 border-light-5 dark:border-blue-1"
              :src="user.avatar_url"
            />
            <div>
              <h1 class="mb-3 font-bold">{{ user.login }}</h1>
              <a
                class="px-2 py-[.35rem] text-blue-1 rounded-lg text-sm font-Bakbak bg-gradient-to-r from-grad-2 via-grad-2 to-grad-3"
                :href="user.html_url"
                target="_blank"
                >View Profile</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, watch } from "vue";
import axios from "axios";

export default {
  name: "SearchProfiles",
  components: {},
  setup() {
    const input = ref("");
    const userSearch = ref([]);
    const loading = ref(false);

    const onSubmitHandler = async () => {
      try {
        loading.value = true;
        const response = await axios.get(
          `https://api.github.com/search/users?q=${input.value}`
        );
        userSearch.value = response.data.items;
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    };

    watch(input, (newValue, oldValue) => {
      if (newValue.length < oldValue.length) {
        userSearch.value = [];
      }
    });

    return {
      input,
      userSearch,
      loading,
      onSubmitHandler,
    };
  },
};
</script>
