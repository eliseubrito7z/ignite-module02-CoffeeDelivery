import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
  useTheme,
} from '@chakra-ui/react'
import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeeContext, CoffeesAvailable } from '../context/CoffeeContext'
import { NumberInputComponent } from './NumberInput'

interface CoffeeCardContent {
  coffeeInfo: CoffeesAvailable
}

export function CoffeeCard({ coffeeInfo }: CoffeeCardContent) {
  const theme = useTheme()
  const { listOfCoffeesAvailable, addOnCart } = useContext(CoffeeContext)
  const [amountInput, setAmountInput] = useState(1)

  const coffeeTags = coffeeInfo.tags.map((tag) => {
    return (
      <Text key={tag} variant="tag">
        {tag}
      </Text>
    )
  })

  function handleDecrementAmountInput() {
    if (amountInput > 1) {
      setAmountInput(amountInput - 1)
    }
  }

  function handleIncrementAmountInput() {
    setAmountInput(amountInput + 1)
  }

  function handleAddToCart() {
    if (amountInput > 0) {
      addOnCart(coffeeInfo, amountInput)
    }
  }

  const formattedPrice = (
    <Text
      as="span"
      fontSize="1.5rem"
      fontFamily="'Baloo 2', cursive"
      fontWeight="800"
      lineHeight={1.3}
    >
      {coffeeInfo.price.toFixed(2)}
    </Text>
  )

  return (
    <Container
      marginBottom="2.5rem"
      as="main"
      w="16rem"
      h="19rem"
      bg={theme.colors.base.card}
      borderRadius="6px 36px 6px 36px"
    >
      <Center display="flex" flexDirection="column">
        <Image
          src={coffeeInfo.img}
          alt="Imagem ilustrativa do café"
          marginTop="-1.25rem"
        />
        <Text display="flex" p="0.75rem 0.25rem 1rem 0">
          {coffeeTags}
        </Text>
        <Text
          as="h1"
          fontSize="1.25rem"
          fontFamily="'Baloo 2', cursive"
          fontWeight="700"
          lineHeight={1.3}
          color={theme.colors.base.subtitle}
        >
          {coffeeInfo.title}
        </Text>
        <Text
          as="span"
          fontSize="0.875rem"
          fontFamily="'Roboto', sans-serif"
          fontWeight="400"
          lineHeight={1.3}
          color={theme.colors.base.label}
          textAlign="center"
          padding="0.5rem 0 2rem 0"
        >
          {coffeeInfo.description}
        </Text>
        <HStack>
          <Text
            as="span"
            color={theme.colors.base.text}
            fontFamily="'Roboto', sans-serif"
            fontSize="0.875rem"
            fontWeight="400"
            lineHeight={1.3}
          >
            R$ {formattedPrice}
          </Text>
          <NumberInputComponent
            DecrementAmountInput={handleDecrementAmountInput}
            IncrementAmountInput={handleIncrementAmountInput}
            amount={amountInput}
          />
          <IconButton
            aria-label="Botão para o seu carrinho"
            bg={theme.colors.purple.dark}
            icon={<ShoppingCart size={22} weight="fill" />}
            marginLeft={4}
            color={theme.colors.white}
            onClick={handleAddToCart}
            _hover={{ bg: '#4B2995' }}
          />
        </HStack>
      </Center>
    </Container>
  )
}
