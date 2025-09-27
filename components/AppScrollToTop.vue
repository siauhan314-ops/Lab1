<template>
  <button
    v-show="isVisible"
    class="scroll-to-top"
    @click="scrollToTop"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script setup>
const isVisible = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const onMouseEnter = (event) => {
  event.target.style.transform = 'translateY(0) scale(1.1)'
}

const onMouseLeave = (event) => {
  event.target.style.transform = 'translateY(0) scale(1)'
}

onMounted(() => {
  // Create scroll to top button styles
  const style = document.createElement('style')
  style.textContent = `
    .scroll-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
      color: white;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transform: translateY(100px);
      transition: all 0.3s ease;
      z-index: 1000;
    }
  `
  document.head.appendChild(style)

  // Show/hide scroll to top button based on scroll position
  const handleScroll = () => {
    isVisible.value = window.pageYOffset > 300
  }

  window.addEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Component-specific styles if needed */
</style>