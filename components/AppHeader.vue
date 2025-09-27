<template>
  <header class="header">
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <i class="fas fa-ice-cream"></i>
          <span>Sweet Scoops</span>
        </div>
        <ul class="nav-menu" :class="{ active: isMenuOpen }">
          <li><a href="#home" class="nav-link" @click="scrollToSection('home')">Home</a></li>
          <li><a href="#about" class="nav-link" @click="scrollToSection('about')">About</a></li>
          <li><a href="#flavors" class="nav-link" @click="scrollToSection('flavors')">Flavors</a></li>
          <li><a href="#contact" class="nav-link" @click="scrollToSection('contact')">Contact</a></li>
          <li><a href="#donate" class="nav-link btn-donate" @click="scrollToSection('donate')">Donate Now</a></li>
        </ul>
        <div class="hamburger" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (sectionId) => {
  isMenuOpen.value = false
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Close menu when clicking outside or on link
onMounted(() => {
  const handleClickOutside = (event) => {
    const navMenu = document.querySelector('.nav-menu')
    const hamburger = document.querySelector('.hamburger')
    if (!navMenu?.contains(event.target) && !hamburger?.contains(event.target)) {
      isMenuOpen.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
})

// Header scroll effect
onMounted(() => {
  const header = document.querySelector('.header')
  const handleScroll = () => {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)'
      header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)'
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)'
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)'
    }
  }
  window.addEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Component-specific styles if needed */
</style>