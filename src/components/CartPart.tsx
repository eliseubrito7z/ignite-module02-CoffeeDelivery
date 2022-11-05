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
import { useState, useContext } from 'react'

import coffeeImageTest from '../assets/latte.svg'
import { CoffeeContext, CoffeeOrder } from '../context/CoffeeContext'
import { NumberInputComponent } from './NumberInput'
import { CartItem } from './CartItem'

export function CartPart() {
  const theme = useTheme()
  const { itemsOnCart } = useContext(CoffeeContext)

  return (
    <Container
      w="31.125rem"
      maxW="31.125rem"
      bg={theme.colors.base.card}
      borderRadius="6px"
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
              R$ 10,00
            </Text>
          </Box>

          <Box display="flex" width="100%" justifyContent="space-between">
            <Text variant="text">Entrega</Text>
            <Text variant="text" fontSize="1rem">
              R$ 10,00
            </Text>
          </Box>

          <Box display="flex" width="100%" justifyContent="space-between">
            <Text variant="subtitle" fontWeight="700">
              Total
            </Text>
            <Text variant="subtitle" fontWeight="700" fontSize="1.25rem">
              R$ 10,00
            </Text>
          </Box>
          <Button
            bg={theme.colors.yellow.medium}
            width="100%"
            maxW="100%"
            py="0.75rem"
            color={theme.colors.white}
          >
            CONFIRMAR
          </Button>
        </VStack>
      </VStack>
    </Container>
  )
}
