<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="logo">
            <i class="fas fa-ice-cream"></i>
            <span>Sweet Scoops for a Cause</span>
          </div>
          <p>Lions Club charity ice cream event - serving our community one scoop at a time.</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" @click="scrollToSection('home')">Home</a></li>
            <li><a href="#about" @click="scrollToSection('about')">About</a></li>
            <li><a href="#flavors" @click="scrollToSection('flavors')">Flavors</a></li>
            <li><a href="#donate" @click="scrollToSection('donate')">Donate</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li><i class="fas fa-phone"></i> +1 (555) 123-4567</li>
            <li><i class="fas fa-envelope"></i> sweetscoop@lionsclub.org</li>
            <li><i class="fas fa-map-marker-alt"></i> 123 Community Center Drive</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Event Hours</h4>
          <ul>
            <li>Monday - Friday: 2PM - 8PM</li>
            <li>Saturday: 12PM - 9PM</li>
            <li>Sunday: 1PM - 7PM</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Lions Club Sweet Scoops. All rights reserved. | Made with ❤️ and ❄️ for our community</p>
      </div>
    </div>
  </footer>
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