import {
  Container,
  Flex,
  Spacer,
  HStack,
  useTheme,
  Box,
  Text,
  IconButton,
  Button,
  Badge,
} from '@chakra-ui/react'
import logo from '../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../context/CoffeeContext'

export function Header() {
  const theme = useTheme()
  const navigate = useNavigate()
  const { userPurchase, itemsOnCart } = useContext(CoffeeContext)

  const CidadeUF = `${userPurchase.Cidade}, ${userPurchase.UF}`

  function handleGoToHome() {
    navigate('/')
  }

  function handleGoToCart() {
    navigate('/checkout')
  }

  return (
    <Container width="70rem" maxWidth="100vw" as="header" padding="2rem 0">
      <Flex>
        <Button variant="unstyled">
          <img src={logo} onClick={handleGoToHome} alt="Logo Coffee Delivery" />
        </Button>
        <Spacer />
        <HStack
          bg={theme.colors.purple.light}
          rounded={8}
          px={2}
          position="relative"
          color={theme.colors.purple.medium}
        >
          <MapPin size={22} weight="fill" />
          <Text fontWeight={400} fontFamily="Roboto" fontSize={'0.875rem'}>
            {userPurchase.Cidade.length > 2
              ? `${CidadeUF}`
              : 'Adicionar Endereço'}
          </Text>
        </HStack>

        <Box
          position="relative"
          marginLeft={4}
          bg={theme.colors.yellow.light}
          borderRadius="6px"
        >
          <IconButton
            aria-label="Botão para o seu carrinho"
            icon={<ShoppingCart size={22} weight="fill" />}
            color={theme.colors.yellow.dark}
            onClick={handleGoToCart}
            bg="0"
            _hover={{ bg: '#F1E9C9' }}
          />
          {itemsOnCart.length > 0 && (
            <Badge
              position="absolute"
              marginLeft={-2}
              marginTop={-2}
              borderRadius="100%"
              w="1.25rem"
              h="1.25rem"
              textAlign="center"
              bg={theme.colors.yellow.dark}
              color={theme.colors.white}
            >
              {itemsOnCart.length}
            </Badge>
          )}
        </Box>
      </Flex>
    </Container>
  )
}
