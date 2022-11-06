import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  theme,
  useTheme,
  VStack,
} from '@chakra-ui/react'
import { Trash } from 'phosphor-react'
import { useState, useContext, FormEvent } from 'react'

import coffeeImageTest from '../assets/latte.svg'
import { CoffeeContext, CoffeeOrder } from '../context/CoffeeContext'
import { NumberInputComponent } from './NumberInput'
import { CartItem } from './CartItem'
import { FormattedNumber, IntlProvider } from 'react-intl'

interface Prices {
  totalItemsValue: number
  deliveryCust: number | number
  totalOrderCust: number
}

export function CartPart({
  totalItemsValue,
  deliveryCust,
  totalOrderCust,
}: Prices) {
  const theme = useTheme()
  const { itemsOnCart } = useContext(CoffeeContext)
  console.log('clicou')

  return (
    <Container
      w="31.125rem"
      maxW="31.125rem"
      bg={theme.colors.base.card}
      borderRadius="6px 44px 6px 44px"
      as="div"
      p="2.5rem"
      paddingTop="0.5rem"
    >
      <VStack>
        {itemsOnCart.map((coffee) => {
          return <CartItem key={coffee.id} coffee={coffee} />
        })}
        <VStack
          width="100%"
          maxW="100%"
          alignItems="flex-start"
          paddingTop="1.5rem"
        >
          <Box display="flex" width="100%" justifyContent="space-between">
            <Text variant="text">Total de itens</Text>
            <Text variant="text" fontSize="1rem">
              R$ {totalItemsValue.toFixed(2)}
            </Text>
          </Box>

          <Box display="flex" width="100%" justifyContent="space-between">
            <Text variant="text">Entrega</Text>
            <Text variant="text" fontSize="1rem">
              R$ {deliveryCust.toFixed(2)}
            </Text>
          </Box>

          <Box display="flex" width="100%" justifyContent="space-between">
            <Text variant="subtitle" fontWeight="700">
              Total
            </Text>
            <Text variant="subtitle" fontWeight="700" fontSize="1.25rem">
              R$ {totalOrderCust.toFixed(2)}
            </Text>
          </Box>
          <Button
            bg={theme.colors.yellow.medium}
            width="100%"
            maxW="100%"
            py="0.75rem"
            color={theme.colors.white}
            type="submit"
          >
            CONFIRMAR
          </Button>
        </VStack>
      </VStack>
    </Container>
  )
}
