<template>
  <section id="donate" class="donation">
    <div class="container">
      <div class="donation-content">
        <h2>Ready to Make a Difference?</h2>
        <p>Choose your way to support our cause</p>
        <div class="donation-options">
          <div class="option-card">
            <h3>Buy Ice Cream</h3>
            <p>Purchase delicious ice cream and support our cause</p>
            <a href="#contact" class="btn btn-primary" @click="scrollToSection('contact')">Order Now</a>
          </div>
          <div class="option-card featured">
            <h3>Direct Donation</h3>
            <p>Make a direct contribution to maximize impact</p>
            <div class="donation-amounts">
              <button
                v-for="amount in amounts"
                :key="amount"
                class="amount-btn"
                :class="{ active: selectedAmount === amount }"
                @click="selectAmount(amount)"
              >
                {{ amount }}
              </button>
            </div>
            <a href="#" class="btn btn-primary">Donate Now</a>
          </div>
          <div class="option-card">
            <h3>Volunteer</h3>
            <p>Join our team and help serve the community</p>
            <a href="#contact" class="btn btn-secondary" @click="scrollToSection('contact')">Get Involved</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const selectedAmount = ref(null)
const amounts = ['$10', '$25', '$50', '$100']

const selectAmount = (amount) => {
  selectedAmount.value = amount
}

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