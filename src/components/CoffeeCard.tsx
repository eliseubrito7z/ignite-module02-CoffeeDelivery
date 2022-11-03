import { Box, Container, Image, Text, useTheme } from '@chakra-ui/react'
import { useContext } from 'react'
import { CoffeeContext, CoffeesAvailable } from '../context/CoffeeContext'

interface CoffeeCardContent {
  coffeeInfo: CoffeesAvailable
}

export function CoffeeCard({ coffeeInfo }: CoffeeCardContent) {
  const { listOfCoffeesAvailable } = useContext(CoffeeContext)
  const theme = useTheme()

  const coffeeTags = coffeeInfo.tags.map((tag) => {
    return (
      <Text key={tag} bg={theme.colors.yellow.light}>
        {tag}
      </Text>
    )
  })

  return (
    <Container as="main" w="16rem" h="19rem" bg={theme.colors.base.card}>
      <Image src={coffeeInfo.img} />
      {coffeeTags}
    </Container>
  )
}
