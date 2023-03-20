<template>
  <nav
    class="container py-4 mx-auto flex justify-between items-start md:items-center max-w-[1200px] w-[95%] min-[400px]:w-[90%] font-Bakbak dark:text-light-2 text-light-5"
  >
    <div>
      <router-link
        to="/"
        class="text-lg text-gray-800 border-2 border-light-3 px-2"
        >G<span class="text-2xl text-grad-1">H</span>F
      </router-link>
    </div>
    <!-- toggle light and dark mode -->
    <div>
      <button
        @click="toggleDark()"
        class="flex items-center rounded-lg px-1 border-[.1rem] dark:border-light-5 border-light-3 outline-none"
      >
        <img
          v-show="!isDark"
          class="w-6"
          src="../assets/light.svg"
          alt="light mode"
        />
        <p v-show="!isDark" class="text-xs">light</p>
        <img
          v-show="isDark"
          class="w-6"
          src="../assets/dark.svg"
          alt="dark mode"
        />
        <p v-show="isDark" class="text-xs">dark</p>
      </button>
    </div>

    <!-- Mobile menu button -->
    <div class="flex flex-col items-end">
      <div @click="showMenu = !showMenu" class="flex md:hidden">
        <div v-if="!showMenu">
          <button type="button" class="bg-light-2">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="bg-light-2 h-[25px] rounded-lg" v-else-if="showMenu">
          <button type="button">
            <img
              class="w-[26px]"
              src="../assets/close.svg"
              alt="close button"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex items-end md:space-y-0 md:flex-row md:items-center md:space-x-2 md:mt-0"
      >
        <li class="text-lg text-light-2">
          <router-link
            class="dark:hover:bg-blue-2 hover:text-grad-1 px-3 py-1 hover:rounded-md dark:text-light-2 text-blue-2"
            exact-active-class="text-grad-1 dark:text-light-2  dark:bg-blue-2 rounded-md"
            to="/"
            @click="showMenu = false"
            >Home</router-link
          >
        </li>
        <li class="text-lg ttext-light-2">
          <router-link
            class="dark:hover:bg-blue-2 hover:text-grad-1 px-3 py-1 hover:rounded-md dark:text-light-2 text-blue-2"
            active-class="text-grad-1 dark:text-light-2  dark:bg-blue-2 rounded-md"
            to="/repositories"
            @click="showMenu = false"
            >Repositories</router-link
          >
        </li>
        <li class="text-lg text-light-2">
          <router-link
            class="dark:hover:bg-blue-2 hover:text-grad-1 px-3 py-1 hover:rounded-md dark:text-light-2 text-blue-2"
            active-class="text-grad-1 dark:text-light-2  dark:bg-blue-2 rounded-md"
            to="/searchProfiles"
            @click="showMenu = false"
            >Search Profile</router-link
          >
        </li>
        <li class="text-lg text-light-2">
          <router-link
            class="dark:hover:bg-blue-2 hover:text-grad-1 px-3 py-1 hover:rounded-md dark:text-light-2 text-blue-2"
            active-class="text-grad-1 dark:text-light-2  dark:bg-blue-2 rounded-md"
            to="/:catchall(.*)*"
            @click="showMenu = false"
            >Error Page</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const showMenu = ref(false);
</script>
