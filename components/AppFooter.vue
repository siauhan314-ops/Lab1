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
        <div class="footer-section">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for event updates and special offers!</p>
          <form class="newsletter-form" @submit.prevent="handleSubscribe">
            <input v-model="newsletterForm.name" type="text" placeholder="Your Name" required>
            <input v-model="newsletterForm.email" type="email" placeholder="Your Email" required>
            <button type="submit" class="btn btn-secondary">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Lions Club Sweet Scoops. All rights reserved. | Made with ❤️ and ❄️ for our community</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const newsletterForm = reactive({
  name: '',
  email: ''
})

const handleSubscribe = () => {
  // Basic validation
  if (!newsletterForm.name || !newsletterForm.email) {
    showNotification('Please fill in all fields.', 'error')
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(newsletterForm.email)) {
    showNotification('Please enter a valid email address.', 'error')
    return
  }

  // Simulate subscription
  showNotification('Thank you for subscribing! You\'ll receive our latest updates.', 'success')
  // Reset form
  newsletterForm.name = ''
  newsletterForm.email = ''
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const showNotification = (message, type = 'success') => {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification')
  if (existingNotification) {
    existingNotification.remove()
  }

  // Create notification element
  const notification = document.createElement('div')
  notification.className = `notification ${type}`
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `

  // Add notification styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#4ECDC4' : '#FF6B6B'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 350px;
  `

  // Add to page
  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)'
  }, 100)

  // Add close button functionality
  const closeBtn = notification.querySelector('.notification-close')
  closeBtn.addEventListener('click', () => {
    notification.style.transform = 'translateX(400px)'
    setTimeout(() => notification.remove(), 300)
  })

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = 'translateX(400px)'
      setTimeout(() => notification.remove(), 300)
    }
  }, 5000)
}
</script>

<style scoped>
.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.newsletter-form input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.newsletter-form .btn {
  padding: 0.5rem 1rem;
  background: #FF6B6B;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}

.newsletter-form .btn:hover {
  background: #FF5252;
}
</style>