import {
  Flex,
  Container,
  Heading,
  Text,
  Box,
  Image,
  useTheme,
  Avatar,
  HStack,
  Button,
  Wrap,
  WrapItem,
  Center,
  VStack,
} from '@chakra-ui/react'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'

import coffeeImage from '../assets/Coffe.svg'
import { CoffeeCard } from '../components/CoffeeCard'
import {
  IconCart,
  IconPackage,
  IconCoffee,
  IconTimer,
} from '../components/IconsHome'
import { CoffeeContext, CoffeesAvailable } from '../context/CoffeeContext'

export function Home() {
  const theme = useTheme()
  const { listOfCoffeesAvailable } = useContext(CoffeeContext)

  return (
    <Container
      as="main"
      width="70rem"
      maxWidth="100vw"
      // border="0.1px solid red"
      px="0"
    >
      <Container
        as="div"
        width="100%"
        maxWidth="100vw"
        // border="0.1px solid red"
        padding="3rem 0 0 0"
      >
        <HStack>
          <Box>
            <Heading
              fontFamily="'Baloo 2', cursive"
              color={theme.colors.base.title}
              fontWeight={800}
              fontSize="3rem"
              lineHeight={1.3}
            >
              Encontre o café perfeito para qualquer hora do dia
            </Heading>
            <Text
              as="p"
              fontFamily="'Roboto', cursive"
              color={theme.colors.base.subtitle}
              fontWeight={400}
              fontSize="1.25rem"
              lineHeight={1.3}
            >
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Text>
            <Box
              display="flex"
              flexWrap="wrap"
              columnGap="2.5rem"
              rowGap={10}
              marginTop="4.125rem"
            >
              <IconCart />
              <IconPackage />
              <IconTimer />
              <IconCoffee />
            </Box>
          </Box>
          <img src={coffeeImage} alt="" />
        </HStack>
      </Container>
      <Container
        as="div"
        width="100%"
        maxWidth="100vw"
        // px="0rem"
        paddingBottom="10rem"
        // border="0.1px solid red"
      >
        <Heading
          as="h1"
          fontFamily="'Baloo 2', cursive"
          color={theme.colors.base.title}
          fontWeight={800}
          fontSize="2rem"
          lineHeight={1.3}
        >
          Nossos cafés
        </Heading>

        <Box width="70rem" maxW="70rem">
          <Flex flexWrap="wrap" justifyContent="space-around">
            <Wrap spacingX="2rem" spacingY="2.5rem" paddingTop="3.375rem">
              {listOfCoffeesAvailable.map((coffee) => {
                return <CoffeeCard key={coffee.id} coffeeInfo={coffee} />
              })}
            </Wrap>
          </Flex>
        </Box>
      </Container>
    </Container>
  )
}
