<template>
  <section id="flavors" class="flavors">
    <div class="container">
      <div class="section-header">
        <h2>Our Premium Flavors</h2>
        <p>Handcrafted ice cream made with love and the finest ingredients</p>
      </div>
      <div class="flavors-grid">
        <div
          v-for="flavor in flavors"
          :key="flavor.name"
          class="flavor-card"
          @click="openFlavorPopup(flavor)"
        >
          <div class="flavor-icon">{{ flavor.icon }}</div>
          <h3>{{ flavor.name }}</h3>
          <p>{{ flavor.description }}</p>
          <span class="price">{{ flavor.price }}</span>
        </div>
      </div>
    </div>

    <!-- Flavor Popup -->
    <div v-if="showPopup" class="flavor-popup" @click="closeFlavorPopup">
      <div class="popup-content" @click.stop>
        <h3>Order {{ selectedFlavor?.name }}</h3>
        <p>Price: {{ selectedFlavor?.price }} per scoop</p>
        <div class="quantity-selector">
          <label>Quantity:</label>
          <select v-model="quantity">
            <option value="1">1 scoop</option>
            <option value="2">2 scoops</option>
            <option value="3">3 scoops</option>
            <option value="4">4 scoops</option>
            <option value="5">5+ scoops</option>
          </select>
        </div>
        <div class="popup-buttons">
          <button class="btn btn-primary" @click="addToOrder">Add to Order</button>
          <button class="btn btn-secondary" @click="closeFlavorPopup">Cancel</button>
        </div>
      </div>
      <div class="popup-overlay"></div>
    </div>
  </section>
</template>

<script setup>
const showPopup = ref(false)
const selectedFlavor = ref(null)
const quantity = ref('1')

const flavors = [
  { name: "Santa's Strawberry", icon: '🎅', description: 'Fresh strawberries blended into creamy perfection', price: '$5' },
  { name: 'Chocolate Dream', icon: '🍫', description: 'Rich Belgian chocolate for the ultimate indulgence', price: '$5' },
  { name: 'Snow Vanilla', icon: '❄️', description: 'Timeless vanilla bean flavor that never goes out of style', price: '$4' },
  { name: 'Christmas Mint', icon: '🎄', description: 'Cool peppermint swirled with chocolate chips', price: '$6' },
  { name: 'Gingerbread Delight', icon: '🍪', description: 'Spiced gingerbread cookie pieces in smooth vanilla ice cream', price: '$5' },
  { name: 'Eggnog Surprise', icon: '🎁', description: 'Creamy eggnog with cinnamon and nutmeg', price: '$6' }
]

const openFlavorPopup = (flavor) => {
  selectedFlavor.value = flavor
  showPopup.value = true
}

const closeFlavorPopup = () => {
  showPopup.value = false
  selectedFlavor.value = null
  quantity.value = '1'
}

const addToOrder = () => {
  showNotification(`Added ${quantity.value} scoop(s) of ${selectedFlavor.value.name} to your order!`, 'success')
  closeFlavorPopup()
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