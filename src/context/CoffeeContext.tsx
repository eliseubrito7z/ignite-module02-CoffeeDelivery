import { Text } from '@chakra-ui/react'
import { useState, createContext, ReactNode, Children } from 'react'
import { FormattedNumber } from 'react-intl'
import { CoffeesTypes } from './CoffeImages'

export interface CoffeesAvailable {
  id: string // '1'
  title: string // Expresso Tradicional
  description: string
  img: string
  price: number
  tags: string[]
}

export interface CoffeeOrder {
  id: string // '1'
  title: string // Expresso Tradicional
  img: string
  price: number
  amount: number
}

interface CheckoutData {
  Comp?: string | undefined
  CEP: string
  Rua: string
  Num: string
  Bairro: string
  Cidade: string
  UF: string
  PaymentMethod: string
}

export interface DeliveryOrder {
  id: string
  Coffees: CoffeeOrder[]
  OrderPrice: number
  CEP: string
  Rua: string
  Num: number
  Comp: string | undefined
  Bairro: string
  Cidade: string
  UF: string
  PaymentMethod: string
}

interface CoffeeContextType {
  listOfCoffeesAvailable: CoffeesAvailable[]
  itemsOnCart: CoffeeOrder[]
  totalItemsPrice: number
  deliveryCustConditions: number
  totalOrder: number
  deliveryOrders: DeliveryOrder[]
  userPurchase: CheckoutData
  addOnCart: (coffeeData: CoffeesAvailable, amount: number) => void
  onUpdateAmountInCart: (id: string, newAmount: number) => void
  newDeliveryOrder: (data: CheckoutData) => void
  deleteItem: (id: string) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [listOfCoffeesAvailable, setListOfCoffeesAvailable] = useState<
    CoffeesAvailable[]
  >([
    {
      id: '1',
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      img: CoffeesTypes['Expresso-Tradicional'],
      price: 9.9,
      tags: ['TRADICIONAL'],
    },
    {
      id: '2',
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      img: CoffeesTypes['Expresso-Americano'],
      price: 9.9,
      tags: ['TRADICIONAL'],
    },
    {
      id: '3',
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      img: CoffeesTypes['Expresso-Cremoso'],
      price: 9.9,
      tags: ['TRADICIONAL'],
    },
    {
      id: '4',
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      img: CoffeesTypes['Expresso-Gelado'],
      price: 9.9,
      tags: ['TRADICIONAL', 'GELADO'],
    },
    {
      id: '5',
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      img: CoffeesTypes['Com-Leite'],
      price: 9.9,
      tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
      id: '6',
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      img: CoffeesTypes['Cafe-Latte'],
      price: 9.9,
      tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
      id: '7',
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      img: CoffeesTypes['Cafe-Capuccino'],
      price: 9.9,
      tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
      id: '8',
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      img: CoffeesTypes['Cafe-Macchiato'],
      price: 9.9,
      tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
      id: '9',
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      img: CoffeesTypes['Cafe-Mochaccino'],
      price: 9.9,
      tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
      id: '10',
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      img: CoffeesTypes['Chocolate-Quente'],
      price: 9.9,
      tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
      id: '11',
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      img: CoffeesTypes['Cafe-Cubano'],
      price: 9.9,
      tags: ['TRADICIONAL', 'ALCOÓLICO', 'GELADO'],
    },
    {
      id: '12',
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      img: CoffeesTypes['Cafe-Havaiano'],
      price: 9.9,
      tags: ['ESPECIAL'],
    },
    {
      id: '13',
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      img: CoffeesTypes['Cafe-Arabe'],
      price: 9.9,
      tags: ['ESPECIAL'],
    },
    {
      id: '14',
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      img: CoffeesTypes['Cafe-Irlandes'],
      price: 9.9,
      tags: ['TRADICIONAL', 'ALCOÓLICO'],
    },
  ])

  const [itemsOnCart, setItemsOnCart] = useState<CoffeeOrder[]>([])

  const [deliveryOrders, setDeliveryOrders] = useState<DeliveryOrder[]>([])
  const [userPurchase, setUserPurchase] = useState<CheckoutData>({
    CEP: '',
    Rua: '',
    Num: '',
    Comp: '',
    Bairro: '',
    Cidade: '',
    UF: '',
    PaymentMethod: '',
  })

  function onUpdateAmountInCart(id: string, newAmount: number) {
    const newListUpdated = itemsOnCart.map((coffee) => {
      if (coffee.id === id) {
        return { ...coffee, amount: newAmount }
      }
      return coffee
    })

    setItemsOnCart(newListUpdated)
  }

  function coffeeAlreadyInCart(id: string) {
    const coffee = itemsOnCart.find((coffee) => coffee.id === id)
    return coffee
  }

  function addOnCart(coffeeData: CoffeesAvailable, amount: number) {
    const alreadyInCart = coffeeAlreadyInCart(coffeeData.id)

    const newItem: CoffeeOrder = {
      id: coffeeData.id,
      title: coffeeData.title,
      img: coffeeData.img,
      price: coffeeData.price,
      amount,
    }

    if (alreadyInCart) {
      console.log('Produto já adicionado!')
    } else {
      setItemsOnCart((state) => [newItem, ...state])
      console.log('NOVO ITEM', newItem)
    }
  }

  console.log('ITEMS NO CARRINHO', itemsOnCart)

  const itemsPrice = itemsOnCart.map((coffee) => {
    const total = coffee.amount * coffee.price
    return total
  })

  const totalItemsPrice = itemsPrice.reduce(function (total, itemValue) {
    total += itemValue
    return total
  }, 0)

  const deliveryCustConditions = totalItemsPrice > 25 ? 2.35 : 4.5

  const totalOrder = totalItemsPrice + deliveryCustConditions

  function ClearCart() {
    setItemsOnCart([])
  }

  function newDeliveryOrder(data: CheckoutData) {
    const newOrder: DeliveryOrder = {
      id: String(new Date().getMilliseconds() * itemsOnCart.length),
      Coffees: itemsOnCart.map((coffee) => {
        return coffee
      }),
      OrderPrice: Number(totalOrder.toFixed(2)),
      CEP: data.CEP,
      Rua: data.Rua,
      Num: Number(data.Num),
      Comp: data.Comp,
      Bairro: data.Bairro,
      Cidade: data.Cidade,
      UF: data.UF,
      PaymentMethod: data.PaymentMethod,
    }
    setDeliveryOrders((state) => [newOrder, ...state])
    setUserPurchase(data)
    ClearCart()
  }

  console.log('NOVA ORDEM DE ENTREGA', deliveryOrders)

  function deleteItem(id: string) {
    const cartWithoutOne = itemsOnCart.filter((coffee) => {
      return coffee.id !== id
    })
    setItemsOnCart(cartWithoutOne)
  }

  return (
    <CoffeeContext.Provider
      value={{
        listOfCoffeesAvailable,
        itemsOnCart,
        addOnCart,
        onUpdateAmountInCart,
        totalItemsPrice,
        deliveryCustConditions,
        totalOrder,
        deliveryOrders,
        newDeliveryOrder,
        userPurchase,
        deleteItem,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
