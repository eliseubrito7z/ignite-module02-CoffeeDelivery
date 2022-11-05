import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Spacer,
  Text,
  useTheme,
  VStack,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  MenuGroup,
  Flex,
} from '@chakra-ui/react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { CartPart } from '../components/CartPart'
import { NumberInputComponent } from '../components/NumberInput'

type PaymentMethod = 'CREDITO' | 'DEBITO' | 'DINHEIRO' | 'PIX'

export function Checkout() {
  const theme = useTheme()
  const textOpcional = <Text>Opcional</Text>

  return (
    <Container as="main" w="90rem" maxW="100%" paddingX="10rem" display="flex">
      <form action="">
        <HStack alignItems="flex-start">
          <VStack alignItems="flex-start">
            <Container
              bg={theme.colors.base.card}
              w="100%"
              maxW="40rem"
              h="23rem"
              borderRadius="6px"
              p="2.5rem"
              as="div"
            >
              <Heading display="flex" gap="0.5rem">
                <HStack alignItems="flex-start">
                  <MapPinLine size={22} color={theme.colors.yellow.dark} />

                  <Box display="flex" flexDirection="column">
                    <Text as="span" variant="subtitle">
                      Endereço de Entrega
                    </Text>
                    <Text as="span" variant="text">
                      Informe o endereço onde deseja receber seu pedido
                    </Text>
                  </Box>
                </HStack>
              </Heading>
              <Box paddingTop="2rem">
                <Stack>
                  <Input
                    variant="unstyled"
                    placeholder="CEP"
                    border="1px solid #E6E5E5"
                    bg={theme.colors.base.input}
                    p="0.75rem"
                    w="12.5rem"
                    type="number"
                  />
                  <Input
                    placeholder="Rua"
                    variant="unstyled"
                    border="1px solid #E6E5E5"
                    bg={theme.colors.base.input}
                    p="0.75rem"
                    w="100%"
                  />
                  <HStack>
                    <Input
                      placeholder="Número"
                      variant="unstyled"
                      border="1px solid #E6E5E5"
                      bg={theme.colors.base.input}
                      p="0.75rem"
                      w="12.5rem"
                      type="number"
                    />
                    <InputGroup>
                      <Input
                        placeholder="Complemento"
                        variant="unstyled"
                        border="1px solid #E6E5E5"
                        borderRight="none"
                        bg={theme.colors.base.input}
                        p="0.75rem"
                        w="100%"
                        marginLeft="0.75rem"
                      />
                      <InputRightAddon
                        // eslint-disable-next-line react/no-children-prop
                        children="opcional"
                        p="1rem 0.75rem 1rem  0.25rem"
                        fontSize="12px"
                        height="100%"
                        as="i"
                        bg={theme.colors.base.input}
                        color={theme.colors.base.text}
                      />
                    </InputGroup>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Input
                      variant={'unstyled'}
                      placeholder="Bairro"
                      border="1px solid #E6E5E5"
                      bg={theme.colors.base.input}
                      p="0.75rem"
                      w="12.5rem"
                    />
                    <Input
                      variant={'unstyled'}
                      placeholder="Cidade"
                      border="1px solid #E6E5E5"
                      bg={theme.colors.base.input}
                      p="0.75rem"
                      w="17.25rem"
                      fontSize="0.875rem"
                    />
                    <Input
                      variant={'unstyled'}
                      placeholder="UF"
                      border="1px solid #E6E5E5"
                      bg={theme.colors.base.input}
                      paddingLeft="0.75rem"
                      paddingY="0.75rem"
                      w="3rem"
                      maxW="3rem"
                      fontSize="0.875rem"
                    />
                  </HStack>
                </Stack>
              </Box>
            </Container>
            <Container
              bg={theme.colors.base.card}
              w="100%"
              maxW="40rem"
              borderRadius="6px"
              p="2.5rem"
              as="div"
            >
              <Heading display="flex" gap="0.5rem">
                <HStack alignItems="flex-start">
                  <CurrencyDollar
                    size={22}
                    color={theme.colors.purple.medium}
                  />

                  <Box display="flex" flexDirection="column">
                    <Text as="span" variant="subtitle">
                      Pagamento
                    </Text>
                    <Text as="span" variant="text">
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar{' '}
                    </Text>
                  </Box>
                </HStack>
              </Heading>
              <Box marginTop="2rem">
                <HStack justifyContent="space-between">
                  <Box
                    bg={theme.colors.base.button}
                    p="1rem"
                    w="11.125rem"
                    display="flex"
                    alignItems="center"
                    gap="0.75rem"
                    borderRadius="6px"
                  >
                    <CreditCard size={16} color={theme.colors.purple.medium} />
                    <Text variant="ButtonS">Cartão de crédito</Text>
                  </Box>
                  <Box
                    bg={theme.colors.base.button}
                    p="1rem"
                    w="11.125rem"
                    display="flex"
                    alignItems="center"
                    gap="0.75rem"
                    borderRadius="6px"
                  >
                    <CreditCard size={16} color={theme.colors.purple.medium} />
                    <Text variant="ButtonS">Cartão de Débito</Text>
                  </Box>
                  <Box
                    bg={theme.colors.base.button}
                    p="1rem"
                    w="11.125rem"
                    display="flex"
                    alignItems="center"
                    gap="0.75rem"
                    borderRadius="6px"
                  >
                    <CreditCard size={16} color={theme.colors.purple.medium} />
                    <Text variant="ButtonS">Dinheiro</Text>
                  </Box>
                </HStack>
              </Box>
            </Container>
          </VStack>
          <CartPart />
        </HStack>
      </form>
    </Container>
  )
}
