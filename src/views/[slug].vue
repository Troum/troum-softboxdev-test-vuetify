<script setup lang="ts">
import _ from "lodash"
import { useSellersStore } from '@/stores/seller'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { SellerInterface } from '@/interfaces/seller.interface'
import SellerCard from '@/components/SellerCard.vue'
import { useDisplay } from 'vuetify'

const route = useRoute()
const {width} = useDisplay()
const {slug} = route.params
const {rating, sales} = route.query
const sellersStore = useSellersStore()

const seller = computed((): SellerInterface|undefined => {
  return  _.find(_.orderBy(sellersStore.getSellersList, ['rating'], ['desc']), function(item: SellerInterface) {
    // @ts-ignore
    return _.kebabCase(item.name) === slug && item.rating == rating && item.sales == sales
  })
})
</script>

<template>
  <template v-if="seller">
    <v-row>
      <v-col class="mx-auto">
        <SellerCard class="mx-auto" :card-width="width" :seller="seller" />
      </v-col>
    </v-row>
  </template>
</template>

<style scoped lang="scss">

</style>