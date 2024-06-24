import { Color } from '@/enum/color'
import type { SellerInterface } from '@/interfaces/seller.interface'

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomColor = (): Color => {
  const colors = Object.values(Color).filter(value => typeof value === 'number') as Color[]
  return colors[getRandomInt(0, colors.length - 1)]
}

const getRandomName = (): string => {
  const names = [
    'John Doe', 'Jane Dow', 'Alex Murphy',
    'Chris Hemsworth', 'Patty Jenkins', 'James MacAvoy',
    'Taylor Swift', 'Jordan Peterson', 'Morgan Freeman'
  ]
  return names[getRandomInt(0, names.length - 1)]
}

const colorToHex = (color: Color): string => {
  switch (color) {
    case Color.RED:
      return '#ff0000'
    case Color.GREEN:
      return '#00ff00'
    case Color.BLUE:
      return '#0000ff'
    default:
      return ''
  }
}

const useSellerGenerator = (count: number): SellerInterface[] => {
  const sellers: SellerInterface[] = []
  for (let i = 0; i < count; i++) {
    sellers.push({
      color: getRandomColor(),
      name: getRandomName(),
      sales: getRandomInt(0, 1000),
      rating: getRandomInt(1, 5)
    })
  }
  return sellers
}

export { useSellerGenerator, colorToHex }