<script setup>
import { onMounted } from "vue";
import useFetch from "../composable/useFetch";

const { data, error, loading, fetchData } = useFetch(
  "https://api.github.com/users/meldy2503"
);

onMounted(async () => {
  await fetchData();
});
</script>

<template>
  <div class="md:min-w-[322px] md:w-[322px] rounded-lg relative mr-5">
    <div class="w-full"></div>
    <div v-if="error" class="text-light-1 mt-7">something went wrong</div>
    <div v-else-if="loading" class="flex justify-center items-center h-screen">
      <img class="w-[40px] m-auto" src="../assets/loading.gif" alt="loading" />
    </div>
    <div v-else class="flex flex-col m-auto">
      <div
        class="flex flex-col min-[400px]:flex-row items-center gap-x-5 md:flex-col"
      >
        <img
          class="w-[200px] md:w-[300px] rounded-full flex"
          :src="data.avatar_url"
          alt="profile picture"
        />
        <div
          class="mt-5 text-light-5 dark:text-light-2 w-[100%] min-[400px]:w-full"
        >
          <h3 class="my-[5px] font-md text-3xl font-Bakbak">{{ data.name }}</h3>
          <p class="text-light-4 text-lg font-bold">@{{ data.login }}</p>
        </div>
      </div>
      <div
        class="flex flex-col gap-3 mt-1 mb-2 text-blue-1 dark:text-light-3 w-[100%] min-[400px]:w-full"
      >
        <p class="mt-4 text-md font-normal">{{ data.bio }}</p>
        <a
          class="flex items-center justify-center p-2 rounded-[5px] text-center my-[10px] text-light-3 bg-blue-2 hover:text-light-1 hover:bg-[#238636]"
          href="https://github.com/Meldy2503"
          target="_blank"
        >
          <img
            class="w-[30px] mr-1"
            src="../assets/github.svg"
            alt="circle"
          />View Profile</a
        >

        <span class="flex gap-x-2">
          <img
            class="w-[18px]"
            src="../assets/location-svgrepo-com.svg"
            alt="location"
          />
          <p class="dark:font-light font-normal">Lagos, Nigeria</p>
        </span>
        <span class="flex gap-x-2">
          <img
            class="w-[18px]"
            src="../assets/mail-svgrepo-com.svg"
            alt="mail"
          />
          <a
            class="dark:font-light font-normal dark:text-light-3 text-blue-1 hover:text-blue-3 hover:underline"
            href="mailto:emelder.charles25@gmail.com"
            target="_blank"
            >emelder.charles25@gmail.com</a
          >
        </span>
        <span class="flex gap-x-2">
          <img
            class="w-[18px]"
            src="../assets/twitter-svgrepo-com.svg"
            alt="twitter"
          />
          <a
            class="dark:font-light font-normal dark:text-light-3 text-blue-1 hover:text-blue-3 hover:underline"
            href="https://twitter.com/EmelderOkafor"
            target="_blank"
            >@{{ data.twitter_username }}</a
          >
        </span>
        <span class="flex gap-x-2">
          <img class="w-[19px]" src="../assets/link.svg" alt="link" />
          <a
            class="dark:font-light font-normal dark:text-light-3 text-blue-1 hover:text-blue-3 hover:underline"
            href="https://emelder-okafor-portfolio.netlify.app/"
            target="_blank"
            >portfolio</a
          >
        </span>
      </div>
    </div>
  </div>

  <!-- </main> -->
</template>
