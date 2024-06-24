import type { Color } from '@/enum/color'

export interface SellerInterface {
  color: Color;
  name: string;
  sales: number;
  rating: number;
}