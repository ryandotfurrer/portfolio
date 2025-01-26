<template>
  <button
    class="text-muted cursor-pointer font-serif text-base lowercase"
    @click="toggleMenu"
    :aria-expanded="isOpen"
    aria-controls="mobile-menu"
    aria-label="Toggle mobile menu"
  >
    Menu
  </button>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('menu-open');
  }
};
</script>
