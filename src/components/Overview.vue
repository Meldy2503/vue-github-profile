<script setup>
import useFetch from "../composable/useFetch";
import { onMounted } from "vue";

const { data, fetchData } = useFetch("https://api.github.com/users/meldy2503");

onMounted(async () => {
  await fetchData();
});
</script>
<template>
  <div class="">
    <!-- <h3>Overview</h3> -->
    <ul
      class="list-none flex flex-wrap items-center gap-4 p-4 border-b-[.01rem] dark:border-blue-2 border-light-2 shadow-md bg-light-1 dark:bg-blue-1 rounded-md dark:rounded-none"
    >
      <li class="dark:text-light-3 text-blue-1 text-sm mr-4">
        <a
          href="https://github.com/Meldy2503"
          target="_blank"
          class="flex items-center gap-x-1 hover:text-blue-3"
        >
          <img class="w-[27px] mr-1" src="../assets/open-book.svg" alt="book" />
          <p>Overview</p>
        </a>
      </li>
      <!-- <RepoStat /> -->
      <li class="dark:text-light-3 text-blue-1 text-sm mr-4">
        <a
          href="https://github.com/Meldy2503?tab=repositories"
          target="_blank"
          class="flex items-center gap-x-1 hover:text-blue-3"
        >
          <img
            class="w-[17px] mr-1"
            src="../assets/close-book.svg"
            alt="book"
          />
          <p>Repositories</p>
          <p class="bg-blue-2 text-light-3 px-2 py-[.1rem] rounded-lg">
            {{ data.public_repos }}
          </p>
        </a>
      </li>
      <!-- <FollowersStat /> -->
      <li class="dark:text-light-3 text-blue-1 text-sm mr-4">
        <div class="flex items-center gap-x-1">
          <img class="w-[18px] mr-1" src="../assets/person.svg" alt="people" />
          <p>Followers</p>
          <p class="bg-blue-2 text-light-3 px-2 py-[.1rem] rounded-lg">
            {{ data.followers }}
          </p>
        </div>
      </li>
      <!-- <FollowingStat /> -->
      <li class="dark:text-light-3 text-blue-1 text-sm mr-4">
        <div class="flex items-center gap-x-1">
          <img
            class="w-[18px] mr-1"
            src="../assets/following.svg"
            alt="people"
          />
          <p>Following</p>
          <p class="bg-blue-2 text-light-3 px-2 py-[.1rem] rounded-lg">
            {{ data.following }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
