<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-responsive>
    <v-app>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped>
</style>
