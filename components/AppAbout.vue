<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2>About Our Mission</h2>
        <p>Supporting Rotary Club's commitment to serving our community</p>
      </div>
      <div class="about-content">
        <div class="about-text">
          <h3>Making a Difference Through Ice Cream</h3>
          <p>Rotary Club has been serving our community for decades, and now we're bringing you something sweet! Our charity ice cream event combines the joy of delicious treats with the power of giving back.</p>
          <p>Every scoop sold directly supports our community programs including:</p>
          <ul class="mission-list">
            <li><i class="fas fa-check"></i>Youth development programs</li>
            <li><i class="fas fa-check"></i>Community health initiatives</li>
            <li><i class="fas fa-check"></i>Educational scholarships</li>
            <li><i class="fas fa-check"></i>Local family support services</li>
          </ul>
          <a href="#donate" class="btn btn-primary" @click="scrollToSection('donate')">Support Our Cause</a>
        </div>
        <div class="about-image">
          <div class="lions-logo">
            <i class="fas fa-heart"></i>
            <h4>Rotary Club</h4>
            <p>We Serve</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
/* Component-specific styles if needed */
</style>