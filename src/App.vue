<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import "./assets/main.css";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar, Footer },
};
</script>

<style scoped></style>
