<script setup lang="ts">
import _ from 'lodash'
import { onBeforeMount, ref } from 'vue'
import { useDisplay } from 'vuetify'
import type { SellerInterface } from '@/interfaces/seller.interface'
import { useSellersStore } from '@/stores/seller'
import SellerCard from '@/components/SellerCard.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'

const { height, width } = useDisplay()
const sellers = ref<SellerInterface[]>([])
const sellersStore = useSellersStore()

async function api() {
  return new Promise(resolve => {
    setTimeout(() => {
      sellersStore.loadMoreSellers(50)
      resolve(sellersStore.getSellersList)
    }, 1000)
  })
}

async function load({ done }: { done: any }) {
  const res = await api()
  sellers.value.push(...res as SellerInterface[])

  done('ok')
}

onBeforeMount(async () => {
  await api()
})
</script>

<template>
  <v-container :fluid="true">
    <v-infinite-scroll :height="height" :items="sellers" :onLoad="load">
      <template v-for="(chunk, index) in _.chunk(_.orderBy(sellers, ['rating'], ['desc']), 4)" :key="index">
        <v-sheet class="d-flex flex-wrap align-center justify-space-around ga-2">
          <template v-for="seller of chunk" :key="seller">
            <SellerCard :seller="seller" :card-width="width" />
          </template>
        </v-sheet>
      </template>
      <template #loading>
        <LoadingComponent />
      </template>
    </v-infinite-scroll>
  </v-container>
</template>

<style scoped>
</style>
