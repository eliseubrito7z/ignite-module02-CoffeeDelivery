import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  useTheme,
  VStack,
} from '@chakra-ui/react'
import {
  IconMapPin,
  IconMoney,
  IconTimerFinalization,
} from '../components/IconsHome'
import deliveryImage from '../assets/delivery.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../context/CoffeeContext'

export function FinalizationPage() {
  const theme = useTheme()
  const { userPurchase } = useContext(CoffeeContext)

  const RuaNumero = `${userPurchase.Rua}, ${userPurchase.Num}`
  const Bairro = userPurchase.Bairro
  const CidadeUF = `${userPurchase.Cidade}, ${userPurchase.UF}`
  const Pagamento = userPurchase.PaymentMethod

  return (
    <Container width="100%" maxW="70rem" marginTop="5rem" p="0">
      <Box>
        <Heading
          as="h1"
          fontSize="2rem"
          fontWeight="800"
          fontFamily="'Baloo 2', cursive"
          lineHeight={1.3}
          color={theme.colors.yellow.dark}
        >
          Uhu! Pedido confirmado
        </Heading>
        <Text variant="subtitle" fontSize="1.25rem">
          Agora é só aguardar que logo o café chegará até você
        </Text>
      </Box>
      <HStack spacing="auto" p={0} marginTop="2.5rem">
        <Box
          w="100%"
          h="100%"
          maxW="32.875rem"
          maxH="16.875rem"
          borderRadius="6px 26px 6px 26px"
          // border="1px solid red"
          p="0.08125rem"
          margin="0"
          bgGradient="linear(to-br, #DBAC2C, #8047F8)"
          overflow="hidden"
        >
          <VStack
            alignItems="flex-start"
            p="1.85rem 0 1.85rem 2.5rem"
            gap="2rem"
            justifyContent="center"
            borderRadius="6px 26px 6px 26px"
            bgColor="#FFF"
          >
            <Flex gap="0.75rem">
              <IconMapPin />
              <Text variant="text" fontSize="1rem">
                Entrega em <strong>{RuaNumero}</strong> <br />{' '}
                <strong>
                  {Bairro} - {CidadeUF}
                </strong>
              </Text>
            </Flex>
            <Flex gap="0.75rem">
              <IconTimerFinalization />
              <Text variant="text" fontSize="1rem">
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </Text>
            </Flex>
            <Flex gap="0.75rem">
              <IconMoney />
              <Text variant="text" fontSize="1rem">
                Pagamento na entrega <br /> <strong>{Pagamento}</strong>
              </Text>
            </Flex>
          </VStack>
        </Box>
        <img src={deliveryImage} alt="" />
      </HStack>
    </Container>
  )
}
