import {
  Button,
  HStack,
  Input,
  useNumberInput,
  useTheme,
} from '@chakra-ui/react'
import { Minus, Plus } from 'phosphor-react'

export function NumberInputComponent() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 99,
      precision: 0,
    })

  const theme = useTheme()
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack
      maxW="5rem"
      bg={theme.colors.base.button}
      borderRadius="6px"
      textAlign="center"
      boxSizing="border-box"
      paddingX="0.5rem"
    >
      <Button variant="inputButton" {...dec}>
        <Minus size={14} weight="bold" />
      </Button>
      <Input
        width="5rem"
        // focusBorderColor="transparent"
        bg="transparent"
        p="0"
        textAlign="center"
        marginX="5px"
        readOnly
        {...input}
      />
      <Button variant="inputButton" {...inc}>
        <Plus size={14} weight="bold" />
      </Button>
    </HStack>
  )
}
