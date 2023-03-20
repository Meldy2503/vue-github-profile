<script setup>
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import Overview from "../components/Overview.vue";

const error = ref(null);
const loading = ref(false);
loading.value = true;

const repo = ref({});
const route = useRoute();
console.log(route);

const fetchData = async () => {
  try {
    const { repoId } = route.params;
    const res = await fetch(`https://api.github.com/repositories/${repoId}`);
    console.log(res);
    if (!res.ok) {
      error.value = "could not fetch data";
    }
    repo.value = await res.json();
  } catch (err) {
    error.value = err.message;
  }
  loading.value = false;
};

onMounted(async () => {
  await fetchData();
});
</script>

<template>
  <div class="w-[95%] min-[400px]:w-[90%] m-auto max-w-[1200px] mb-20">
    <div v-if="error" class="dark:text-light-1 text-blue-2">
      Sorry, cannot fetch this repo at the moment
    </div>
    <div v-else-if="loading">
      <img
        class="w-[40px] mx-auto my-[10rem]"
        src="../assets/loading.gif"
        alt="loading"
      />
    </div>
    <div v-else class="mt-8 sm:mt-16">
      <overview />
      <div class="flex flex-col justify-between mt-8 md:flex-row">
        <div class="text-xl w-full md:w-[72%]">
          <div
            class="flex items-center justify-center text-blue-2 shadow-sm dark:text-light-2 mb-4 dark:bg-light-6 border-[.08rem] dark:border-blue-2 rounded-lg border-light-3"
          >
            <h2
              class="text-2xl min-[400px]:text-3xl mb-3 font-Bakbak px-2 pt-3 pb-1"
            >
              {{ repo.name }}
            </h2>
          </div>
          <div
            v-if="repo.id"
            class="border-[.08rem] border-light-3 dark:border-blue-2 rounded-lg pb-8 dark:text-light-3 text-blue-2"
          >
            <p
              class="border-b-[.08rem] border-light-3 dark:border-blue-2 py-2 px-2 min-[400px]:px-6 text-base lg:text-lg"
            >
              Description : {{ repo.description }}
            </p>

            <p
              class="border-b-[.08rem] border-light-3 dark:border-blue-2 px-2 min-[400px]:px-6 py-2 text-base lg:text-lg"
            >
              Created at : {{ repo.created_at.substring(0, 10) }}
            </p>
            <p
              class="border-b-[.08rem] border-light-3 dark:border-blue-2 px-2 min-[400px]:px-6 py-2 text-base lg:text-lg"
            >
              Size : {{ repo.size }}KB
            </p>
            <p
              class="border-b-[.08rem] border-light-3 dark:border-blue-2 px-2 min-[400px]:px-6 py-2 text-base lg:text-lg"
            >
              Language : {{ repo.language }}
            </p>
            <p
              class="border-b-[.08rem] dark:border-blue-2 border-light-3 px-2 min-[400px]:px-6 py-2 text-base lg:text-lg"
            >
              Default branch : {{ repo.default_branch }}
            </p>
            <p
              class="border-b-[.08rem] dark:border-blue-2 border-light-3 px-2 min-[400px]:px-6 py-2 text-base lg:text-lg"
            >
              Visibility : {{ repo.visibility }}
            </p>
            <span class="flex justify-center gap-3 w-full mt-6">
              <a
                v-if="repo.html_url"
                :href="repo.html_url"
                target="_blank"
                class="flex items-center bg-[#238636] px-2 text-base text-light-1 rounded-lg hover:bg-[#134f1f]"
                ><img
                  class="w-[25px]"
                  src="../assets/github.svg"
                  alt="circle"
                />
                View Repo</a
              >
              <router-link
                v-if="repo.html_url"
                to="/repositories"
                class="text-light-1 px-3 py-1 rounded-lg text-base bg-light-6 hover:bg-blue-2 border-[.1rem] border-blue-2"
                >Back</router-link
              >
            </span>
          </div>
        </div>
        <div
          class="w-full md:w-[25%] dark:text-light-3 text-blue-1 my-10 md:my-0"
        >
          <div class="border-b-[.08rem] border-light-3 dark:border-blue-2 pb-6">
            <h5 class="font-bold mb-4 text-base lg:text-lg">About</h5>
            <p class="text-[0.9rem] font-light italic mb-4">
              {{ repo.description }}
            </p>
            <p class="text-sm font-normal flex items-center mr-4 my-2">
              <img
                class="w-[15px] mr-1"
                src="../assets/git-fork.svg"
                alt="circle"
              />
              {{ repo.forks }} forks
            </p>
            <p class="text-sm font-normal flex items-center mr-4">
              <img
                class="w-[15px] mr-1"
                src="../assets/white-star.svg"
                alt="circle"
              />
              {{ repo.stargazers_count }} star
            </p>
          </div>
          <div class="border-b-[.08rem] dark:border-blue-2 border-light-3 py-6">
            <h5 class="italic text-base lg:text-lg">Packages</h5>
            <p
              class="text-sm font-normal flex items-center mr-4 my-2 dark:text-blue-3 text-grad-1"
            >
              No packages published
            </p>
          </div>
          <div class="border-b-[.08rem] dark:border-blue-2 border-light-3 py-6">
            <h5 class="italic text-base lg:text-lg">Releases</h5>
            <p
              class="text-sm font-normal flex items-center mr-4 my-2 dark:text-blue-3 text-grad-1"
            >
              No releases published
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
