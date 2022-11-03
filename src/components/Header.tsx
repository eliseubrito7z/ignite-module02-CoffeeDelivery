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
} from '@chakra-ui/react'
import logo from '../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const theme = useTheme()
  const navigate = useNavigate()

  function handleGoToHome() {
    navigate('/')
  }

  function handleGoToCart() {
    navigate('/checkout')
  }

  return (
    <Container width="1100px" maxWidth="100vw" as="header" py="1.5rem">
      <Flex>
        <Button variant="unstyled">
          <img src={logo} onClick={handleGoToHome} />
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
            TRINDADE, PE
          </Text>
        </HStack>

        <Box position="relative">
          <IconButton
            aria-label="Botão para o seu carrinho"
            bg={theme.colors.yellow.light}
            icon={<ShoppingCart size={22} weight="fill" />}
            marginLeft={4}
            color={theme.colors.yellow.dark}
            onClick={handleGoToCart}
          />
        </Box>
      </Flex>
    </Container>
  )
}
