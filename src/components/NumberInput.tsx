import {
  Button,
  HStack,
  Input,
  Text,
  useNumberInput,
  useTheme,
} from '@chakra-ui/react'
import { Minus, Plus } from 'phosphor-react'

interface NumberInputProps {
  amount: number
  DecrementAmountInput: () => void
  IncrementAmountInput: () => void
}

export function NumberInputComponent({
  amount,
  DecrementAmountInput,
  IncrementAmountInput,
}: NumberInputProps) {
  const theme = useTheme()

  return (
    <HStack
      w="4.5rem"
      maxW="4.5rem"
      h="2.375rem"
      bg={theme.colors.base.button}
      borderRadius="6px"
      paddingX="0.1rem"
      gap="0.25rem"
      justifyContent="center"
      _hover={{ cursor: 'pointer' }}
      fontSize="0.875rem"
    >
      <span onClick={DecrementAmountInput}>
        <Minus size={14} weight={'bold'} color={theme.colors.purple.medium} />
      </span>
      <Input w="1.5rem" variant={'unstyled'} type="number" value={amount} />
      <span onClick={IncrementAmountInput}>
        <Plus size={14} weight={'bold'} color={theme.colors.purple.medium} />
      </span>
    </HStack>
  )
}
