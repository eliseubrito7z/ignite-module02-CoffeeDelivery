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
import { CoffeeContext } from '../context/CoffeeContext'

export function Home() {
  const theme = useTheme()
  const { listOfCoffeesAvailable } = useContext(CoffeeContext)

  return (
    <Container
      as="main"
      width="90rem"
      maxWidth="100%"
      px="10rem"
      paddingTop="5.875rem"
    >
      <Container as="div" width="100%" maxWidth="100%">
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
          <Image src={coffeeImage} w="476px" h="360px" />
        </HStack>
      </Container>
      <Container
        as="div"
        width="80rem"
        maxWidth="80rem"
        marginTop="8.75rem"
        paddingBottom="10rem"
      >
        <Heading
          fontFamily="'Baloo 2', cursive"
          color={theme.colors.base.title}
          fontWeight={800}
          fontSize="2rem"
          lineHeight={1.3}
        >
          Nossos cafés
        </Heading>

        <Flex>
          <Wrap spacing="2rem" paddingTop="4.5rem">
            {listOfCoffeesAvailable.map((coffee) => {
              return <CoffeeCard key={coffee.id} coffeeInfo={coffee} />
            })}
          </Wrap>
        </Flex>
      </Container>
    </Container>
  )
}
