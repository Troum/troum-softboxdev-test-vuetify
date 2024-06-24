<script setup lang="ts">
import _ from 'lodash'
import { colorToHex } from '@/composables/useSellerGenerator'
import { mdiStarOutline } from '@mdi/js'
import type { PropType } from 'vue'
import type { SellerInterface } from '@/interfaces/seller.interface'
import SellerAvatarIcon from '@/components/icons/SellerAvatarIcon.vue'
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'

defineProps({
  cardWidth: {
    type: Number,
    required: true
  },
  seller: {
    type: Object as PropType<SellerInterface>,
    required: true
  }
})

const highlightSeller = (event: any) => {
  document.querySelectorAll('.card').forEach((el) => el.classList.remove('highlight'))

  let element = event.target

  while (element && !element.classList.contains('card')) {
    element = element.parentElement
  }
  if (element) {
    element.classList.toggle('highlight')
  }
}
</script>

<template>
  <v-sheet @click="highlightSeller" min-height="80" :width="cardWidth/4 - 32" elevation="1" class="mb-8 card">
    <div class="d-flex justify-space-between align-center pa-4">
      <SellerAvatarIcon :color="colorToHex(seller.color)" />
      <div class="d-flex flex-column">
        <span class="font-weight-bold">Name</span>
        <router-link :to="`/${_.kebabCase(seller.name)}?rating=${seller.rating}&sales=${seller.sales}`">
          {{ seller.name }}
        </router-link>
      </div>
      <div class="d-flex flex-column">
        <span class="font-weight-bold">Sales</span>
        <span>{{ seller.sales }}</span>
      </div>
      <div class="d-flex flex-column">
        <span class="font-weight-bold">Rating</span>
        <div class="d-flex align-center justify-center gc-1">
          <span>{{ seller.rating }}</span>
          <v-btn size="xs" flat class="pa-0" :icon="true">
            <svg-icon type="mdi" :path="mdiStarOutline"></svg-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<style scoped>
.highlight {
  outline: 2px solid #51369e !important;
}
</style>