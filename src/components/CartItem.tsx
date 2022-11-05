import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  theme,
  useTheme,
  VStack,
} from '@chakra-ui/react'
import { Trash } from 'phosphor-react'
import { NumberInputComponent } from './NumberInput'
import { useState } from 'react'
import { CoffeeOrder } from '../context/CoffeeContext'

interface CoffeeItemProps {
  coffee: CoffeeOrder
}

export function CartItem({ coffee }: CoffeeItemProps) {
  const theme = useTheme()
  const [newAmountInput, setNewAmountInput] = useState(coffee.amount)

  function handleDecrementAmountInput() {
    if (newAmountInput > 1) {
      setNewAmountInput(newAmountInput - 1)
    }
  }

  function handleIncrementAmountInput() {
    setNewAmountInput(newAmountInput + 1)
  }
  return (
    <Flex
      width="100%"
      maxW="31.125rem"
      paddingY="1.5rem"
      borderBottom="1px solid #8D8686"
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <Box display="flex">
        <img src={coffee.img} alt="" />
        <VStack marginLeft="1.25rem" alignItems="flex-start">
          <Text>{coffee.title}</Text>
          <HStack justifyContent="space-between">
            <NumberInputComponent
              DecrementAmountInput={handleDecrementAmountInput}
              IncrementAmountInput={handleIncrementAmountInput}
              amount={newAmountInput}
            />
            <Box
              display="flex"
              alignItems="center"
              padding="0.5rem"
              bg={theme.colors.base.button}
              borderRadius="6px"
              gap="0.25rem"
              fontSize="0.75rem"
              fontFamily="'Roboto', sans-serif"
              lineHeight={1.6}
            >
              <Trash
                size={16}
                weight={'regular'}
                color={theme.colors.purple.medium}
              />
              REMOVER
            </Box>
          </HStack>
        </VStack>
      </Box>
      <Text
        color={theme.colors.base.text}
        fontFamily="'Roboto', sans-serif"
        fontSize="1rem"
        fontWeight="700"
        lineHeight={1.3}
        display="flex"
      >
        R$ {coffee.price.toFixed(2)}
      </Text>
    </Flex>
  )
}
