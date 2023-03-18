<script>
import Profile from "../components/Profile.vue";
import Repositories from "../components/Repositories.vue";
import Overview from "../components/Overview.vue";

export default {
  components: { Profile, Repositories, Overview },
};
</script>
<template>
  <main
    class="mt-[5%] max-w-[1200px] flex justify-between flex-col mx-auto md:flex-row mb-24 w-[95%] min-[400px]:w-[90%] gap-y-10 md:gap-y-0"
  >
    <Profile />
    <div class="flex flex-col gap-6 m-auto">
      <Overview />
      <Repositories />
    </div>
  </main>
  <!-- </Suspense> -->
</template>
