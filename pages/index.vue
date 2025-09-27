<template>
  <div>
    <!-- Header Section -->
    <AppHeader />

    <!-- Hero Section -->
    <AppHero />

    <!-- About Section -->
    <AppAbout />

    <!-- Flavors Section -->
    <AppFlavors />

    <!-- Impact Section -->
    <AppImpact />

    <!-- Donation Section -->
    <AppDonation />

    <!-- Contact Section -->
    <AppContact />

    <!-- Footer -->
    <AppFooter />

    <!-- Scroll to Top Button -->
    <AppScrollToTop />
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue'
import AppHero from '~/components/AppHero.vue'
import AppAbout from '~/components/AppAbout.vue'
import AppFlavors from '~/components/AppFlavors.vue'
import AppImpact from '~/components/AppImpact.vue'
import AppDonation from '~/components/AppDonation.vue'
import AppContact from '~/components/AppContact.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppScrollToTop from '~/components/AppScrollToTop.vue'
</script>

<style scoped>
/* Page-specific styles if needed */
</style>