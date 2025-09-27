<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2>Get in Touch</h2>
        <p>Ready to order or have questions? We'd love to hear from you!</p>
      </div>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <div>
              <h4>Call Us</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <div>
              <h4>Email Us</h4>
              <p>sweetscoop@lionsclub.org</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <h4>Visit Us</h4>
              <p>123 Community Center Drive<br>Your City, State 12345</p>
            </div>
          </div>
        </div>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <input v-model="form.name" type="text" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <input v-model="form.email" type="email" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <input v-model="form.phone" type="tel" placeholder="Your Phone" required>
          </div>
          <div class="form-group">
            <select v-model="form.orderType" required>
              <option value="">Select Order Type</option>
              <option value="individual">Individual Order</option>
              <option value="bulk">Bulk Order (10+ scoops)</option>
              <option value="event">Event Catering</option>
              <option value="volunteer">Volunteer Inquiry</option>
            </select>
          </div>
          <div class="form-group">
            <textarea v-model="form.message" placeholder="Your Message or Order Details" rows="4"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $supabase } = useNuxtApp()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  orderType: '',
  message: ''
})

const handleSubmit = async () => {
  // Basic validation
  if (!form.name || !form.email || !form.phone || !form.orderType) {
    showNotification('Please fill in all required fields.', 'error')
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    showNotification('Please enter a valid email address.', 'error')
    return
  }

  // Submit to Supabase
  const { data, error } = await $supabase.from('contacts').insert({
    name: form.name,
    email: form.email,
    phone: form.phone,
    order_type: form.orderType,
    message: form.message
  })

  if (error) {
    showNotification('Error submitting form: ' + error.message, 'error')
  } else {
    showNotification('Thank you! Your message has been sent. We\'ll get back to you soon!', 'success')
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
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
/* Component-specific styles if needed */
</style>