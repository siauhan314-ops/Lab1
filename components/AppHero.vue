<template>
  <section id="home" class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">Sweet Scoops for a <span class="highlight">Sweet Cause</span> 🎄</h1>
        <p class="hero-subtitle">Join Rotary Club in making a difference, one delicious scoop at a time! ❄️</p>
        <p class="hero-description">Every ice cream purchase helps support our community programs and charitable initiatives. Together, we can create positive change while enjoying premium ice cream.</p>
        <div class="hero-buttons">
          <a href="#flavors" class="btn btn-primary" @click="scrollToSection('flavors')">Order Ice Cream</a>
          <a href="#about" class="btn btn-secondary" @click="scrollToSection('about')">Learn More</a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number" ref="stat1">$5,000+</span>
            <span class="stat-label">Raised So Far</span>
          </div>
          <div class="stat">
            <span class="stat-number" ref="stat2">150+</span>
            <span class="stat-label">Happy Customers</span>
          </div>
          <div class="stat">
            <span class="stat-number" ref="stat3">12</span>
            <span class="stat-label">Delicious Flavors</span>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <div class="ice-cream-visual">
          <i class="fas fa-ice-cream"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stat1 = ref(null)
const stat2 = ref(null)
const stat3 = ref(null)




const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const animateCounter = (element, start, end, duration) => {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const current = Math.floor(progress * (end - start) + start)
    element.innerHTML = current.toLocaleString()
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate stats
        if (stat1.value) {
          stat1.value.textContent = '0'
          setTimeout(() => animateCounter(stat1.value, 0, 5000, 2000), 200)
        }
        if (stat2.value) {
          stat2.value.textContent = '0'
          setTimeout(() => animateCounter(stat2.value, 0, 150, 2000), 400)
        }
        if (stat3.value) {
          stat3.value.textContent = '0'
          setTimeout(() => animateCounter(stat3.value, 0, 12, 2000), 600)
        }
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  const heroStats = document.querySelector('.hero-stats')
  if (heroStats) {
    observer.observe(heroStats)
  }
})
</script>
