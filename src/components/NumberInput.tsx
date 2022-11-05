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
      alignItems="center"
      // padding="0.5rem"
      gap="0.25rem"
      justifyContent="center"
      _hover={{ cursor: 'pointer' }}
    >
      <span onClick={DecrementAmountInput}>
        <Minus size={14} weight={'bold'} />
      </span>
      <Input w="15px" variant={'unstyled'} type="number" value={amount} />
      <span onClick={IncrementAmountInput}>
        <Plus size={14} weight={'bold'} />
      </span>
    </HStack>
  )
}
