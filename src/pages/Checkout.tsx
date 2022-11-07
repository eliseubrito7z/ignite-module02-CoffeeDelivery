import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  useTheme,
  VStack,
  Stack,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { CartPart } from '../components/CartPart'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { useContext } from 'react'
import { CoffeeContext } from '../context/CoffeeContext'
import { useForm } from 'react-hook-form'
import { FormattedNumber } from 'react-intl'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

export const RadioGroup = RadioGroupPrimitive.Root
export const RadioItem = RadioGroupPrimitive.Item

const newDeliveryOrderValidationSchema = zod.object({
  CEP: zod.string().min(1),
  Rua: zod.string().min(1),
  Num: zod.string().min(1),
  Comp: zod.string().optional(),
  Bairro: zod.string().min(1),
  Cidade: zod.string().min(1),
  UF: zod.string().min(1),
  PaymentMethod: zod.string().min(1),
})

type newDeliveryOrderData = zod.infer<typeof newDeliveryOrderValidationSchema>

export function Checkout() {
  const theme = useTheme()
  const navigate = useNavigate()

  const {
    totalItemsPrice,
    deliveryCustConditions,
    totalOrder,
    newDeliveryOrder,
  } = useContext(CoffeeContext)
  const { register, handleSubmit, formState, reset } =
    useForm<newDeliveryOrderData>({
      resolver: zodResolver(newDeliveryOrderValidationSchema),
      defaultValues: {
        CEP: '',
        Rua: '',
        Num: '',
        Comp: '',
        Bairro: '',
        Cidade: '',
        UF: '',
        PaymentMethod: '',
      },
    })

  const orderPrices = {
    totalItemsValue: (
      <FormattedNumber
        value={totalItemsPrice}
        minimumFractionDigits={2}
        currency="BRL"
      />
    ),
    deliveryCust: (
      <FormattedNumber
        value={deliveryCustConditions}
        minimumFractionDigits={2}
        currency="BRL"
      />
    ),
    totalOrderCust: (
      <FormattedNumber
        value={totalOrder}
        minimumFractionDigits={2}
        currency="BRL"
      />
    ),
  }

  function handleCreateNewDeliveryOrder(data: newDeliveryOrderData) {
    newDeliveryOrder(data)
    console.log('DADOS ENVIADOS', data)
    reset()
    alert('NOVA ORDEM CRIADA')
    navigate('/finalization')
  }

  return (
    <Container as="main" width="70rem" maxW="70rem" display="flex" px="0">
      <form onSubmit={handleSubmit(handleCreateNewDeliveryOrder)}>
        <HStack alignItems="flex-start" spacing="2rem">
          <Box>
            <Text
              as="h3"
              fontSize="1.125rem"
              fontWeight="700"
              fontFamily="'Baloo 2', cursive"
              lineHeight={1.3}
              marginBottom="0.9375rem"
            >
              Complete seu pedido
            </Text>
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
                      {...register('CEP')}
                      min={8}
                    />
                    <Input
                      placeholder="Rua"
                      variant="unstyled"
                      border="1px solid #E6E5E5"
                      bg={theme.colors.base.input}
                      p="0.75rem"
                      w="100"
                      {...register('Rua')}
                      min={1}
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
                        {...register('Num')}
                        min={1}
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
                          {...register('Comp')}
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
                        {...register('Bairro')}
                        min={1}
                      />
                      <Input
                        variant={'unstyled'}
                        placeholder="Cidade"
                        border="1px solid #E6E5E5"
                        bg={theme.colors.base.input}
                        p="0.75rem"
                        w="17.25rem"
                        fontSize="0.875rem"
                        {...register('Cidade')}
                        min={1}
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
                        {...register('UF')}
                        min={2}
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
                        O pagamento é feito na entrega. Escolha a forma que
                        deseja pagar{' '}
                      </Text>
                    </Box>
                  </HStack>
                </Heading>
                <Box marginTop="2rem">
                  <HStack justifyContent="space-between">
                    <RadioGroup {...register('PaymentMethod')}>
                      <RadioItem value="Cartão de Crédito">
                        <Button variant="payment">
                          <CreditCard
                            size={16}
                            color={theme.colors.purple.medium}
                          />
                          <Text>Cartão de crédito</Text>
                        </Button>
                      </RadioItem>
                      <RadioItem value="Cartão de Débito">
                        <Button variant="payment">
                          <Bank size={16} color={theme.colors.purple.medium} />
                          <Text>Cartão de Débito</Text>
                        </Button>
                      </RadioItem>
                      <RadioItem value="Dinheiro">
                        <Button variant="payment">
                          <Money size={16} color={theme.colors.purple.medium} />
                          <Text>Dinheiro</Text>
                        </Button>
                      </RadioItem>
                    </RadioGroup>
                  </HStack>
                </Box>
              </Container>
            </VStack>
          </Box>
          <Box>
            <Text
              as="h3"
              fontSize="1.125rem"
              fontWeight="700"
              fontFamily="'Baloo 2', cursive"
              lineHeight={1.3}
              marginBottom="0.9375rem"
            >
              Complete seu pedido
            </Text>
            <CartPart />
          </Box>
        </HStack>
      </form>
    </Container>
  )
}
