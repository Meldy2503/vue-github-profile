<template>
  <nav
    class="container py-4 mx-auto md:flex md:justify-between md:items-center max-w-[1200px] w-[95%] min-[400px]:w-[90%] font-Bakbak text-light-2"
  >
    <div class="flex items-center justify-between">
      <router-link
        to="/"
        class="text-lg text-gray-800 border-2 border-light-3 px-2"
        >G<span class="text-2xl text-grad-1">H</span>F
      </router-link>
      <!-- Mobile menu button -->
      <div @click="showMenu = !showMenu" class="flex md:hidden">
        <div v-if="!showMenu">
          <button type="button" class="bg-light-1">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
        <div v-else-if="showMenu">
          <button type="button">
            <img
              class="w-[26px]"
              src="../assets/close.svg"
              alt="close button"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-3 md:mt-0"
    >
      <li class="text-lg text-light-2">
        <router-link
          class="hover:bg-blue-2 px-4 py-1 hover:rounded-md"
          to="/"
          @click="showMenu = false"
          >Home</router-link
        >
      </li>
      <li class="text-lg ttext-light-2">
        <router-link
          class="hover:bg-blue-2 px-4 py-1 hover:rounded-md"
          to="/repositories"
          @click="showMenu = false"
          >Repositories</router-link
        >
      </li>
      <li class="text-lg text-light-2">
        <router-link
          class="hover:bg-blue-2 px-4 py-1 hover:rounded-md"
          to="/searchProfiles"
          @click="showMenu = false"
          >Search Profile</router-link
        >
      </li>
      <li class="text-lg text-light-2">
        <router-link
          class="hover:bg-blue-2 px-4 py-1 hover:rounded-md"
          to="/:catchall(.*)*"
          @click="showMenu = false"
          >Error Page</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
