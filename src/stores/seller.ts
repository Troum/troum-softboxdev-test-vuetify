import { defineStore } from 'pinia';
import type { SellerInterface } from '@/interfaces/seller.interface';
import { useSellerGenerator } from '@/composables/useSellerGenerator'

export const useSellersStore = defineStore('useSellersStore', {
  state: (): { sellers: SellerInterface[] } => ({
    sellers: [],
  }),
  persist: true,
  actions: {
    loadMoreSellers(count: number): void {
      const newSellers = useSellerGenerator(count);
      this.sellers = [...this.sellers, ...newSellers];
    }
  },
  getters: {
    getSellersList: (state): SellerInterface[] => {
      return state.sellers;
    },
  },
});

