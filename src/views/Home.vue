<script>
export default {};
</script>
<template>
  <main
    class="bg-right bg-cover bg-[url('../assets/bg-stars-1.webp')] relative"
  >
    <div
      class="absolute top-72 right-0 min-[400px]:right-[50px] min-[550px]:right-[150px] m-auto md:top-0 md:right-0"
    >
      <img
        class="max-w-full w-[350px] md:w-[400px] lg:w-[500px] animate-spin"
        src="../assets/astrocat.png"
        alt="astronaut"
      />
    </div>
    <div class="absolute left-0">
      <img src="../assets/lines.svg" alt="lines" />
    </div>
    <!-- text-[#204298] -->
    <div
      class="dark:text-light-1 text-[#435268] mx-auto max-w-[1200px] w-[95%] min-[400px]:w-[90%] mt-12 md:mt-28 flex flex-col md:items-start items-center"
    >
      <h1
        class="font-Bakbak text-[3rem] sm:text-[4rem] xl:text-[5rem] w-full md:w-[50%] leading-[1] text-center md:text-left z-50"
      >
        Welcome to GitHub Finder
      </h1>
      <p
        class="text-base lg:text-lg text-blue-1 dark:text-light-3 w-full min-[400px]:w-[80%] md:w-[50%] font-normal mt-4 text-center md:text-left z-50"
      >
        Check out my Personal Github Profile or Search and Explore any Github
        Profile.
      </p>
      <div
        class="mt-12 flex gap-5 font-Bakbak text-md min-[450px]:flex-row flex-col items-center"
      >
        <router-link
          class="dark:bg-light-1 text-light-1 hover:border-grad-1 hover:bg-light-2 hover:text-grad-1 dark:border-blue-1 bg-grad-1 dark:text-blue-1 p-3 min-[450px]:w-[200px] min-[320px]:w-[60vw] w-[80vw] text-center dark:hover:bg-blue-1 dark:hover:text-light-1 dark:hover:border-blue-2 border-[.1rem] z-50"
          to="/repositories"
          >View Profile</router-link
        >
        <router-link
          class="dark:bg-blue-1 min-[450px]:w-[200px] min-[320px]:w-[60vw] border-[.1rem] text-center bg-light-2 border-grad-1 text-grad-1 dark:text-light-1 dark:border-blue-2 w-[80vw] p-3 hover:bg-grad-1 hover:text-light-1 dark:hover:bg-light-1 dark:hover:text-blue-1 z-50"
          to="/searchProfiles"
          >Search Profile</router-link
        >
      </div>
    </div>
  </main>
</template>
