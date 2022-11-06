/* eslint-disable react-hooks/rules-of-hooks */

// ICONS USED IN HEADER OF HOME PAGE

import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  MapPin,
  CurrencyDollar,
} from 'phosphor-react'
import { Text, Box, useTheme } from '@chakra-ui/react'

export function IconCart() {
  const theme = useTheme()

  return (
    <Box display="flex" gap="0.75rem" alignItems="center">
      <Text
        color={theme.colors.base.bg}
        bg={theme.colors.yellow.dark}
        padding="0.5rem"
        borderRadius={100}
      >
        <ShoppingCart size={16} weight="fill" />
      </Text>
      <Text
        fontFamily="'Roboto', sans-serif"
        fontWeight={400}
        lineHeight={1.3}
        fontSize="1rem"
        color={theme.colors.base.text}
      >
        Compra simples e segura
      </Text>
    </Box>
  )
}

export function IconPackage() {
  const theme = useTheme()

  return (
    <Box display="flex" gap="0.75rem" alignItems="center">
      <Text
        color={theme.colors.base.bg}
        bg={theme.colors.base.text}
        padding="0.5rem"
        borderRadius={100}
      >
        <Package size={16} weight="fill" />
      </Text>
      <Text
        fontFamily="'Roboto', sans-serif"
        fontWeight={400}
        lineHeight={1.3}
        fontSize="1rem"
        color={theme.colors.base.text}
      >
        Embalagem mantém o café intacto
      </Text>
    </Box>
  )
}

export function IconTimer() {
  const theme = useTheme()

  return (
    <Box display="flex" gap="0.75rem" alignItems="center">
      <Text
        color={theme.colors.base.bg}
        bg={theme.colors.yellow.medium}
        padding="0.5rem"
        borderRadius={100}
      >
        <Timer size={16} weight="fill" />
      </Text>
      <Text
        fontFamily="'Roboto', sans-serif"
        fontWeight={400}
        lineHeight={1.3}
        fontSize="1rem"
        color={theme.colors.base.text}
      >
        Entrega rápida e rastreada
      </Text>
    </Box>
  )
}

export function IconCoffee() {
  const theme = useTheme()

  return (
    <Box display="flex" gap="0.75rem" alignItems="center">
      <Text
        color={theme.colors.base.bg}
        bg={theme.colors.purple.medium}
        padding="0.5rem"
        borderRadius={100}
      >
        <Coffee size={16} weight="fill" />
      </Text>
      <Text
        fontFamily="'Roboto', sans-serif"
        fontWeight={400}
        lineHeight={1.3}
        fontSize="1rem"
        color={theme.colors.base.text}
      >
        O café chega fresquinho até você
      </Text>
    </Box>
  )
}

export function IconMapPin() {
  const theme = useTheme()

  return (
    <Box display="flex" alignItems="center">
      <Text
        color={theme.colors.base.bg}
        bg={theme.colors.purple.medium}
        padding="0.5rem"
        borderRadius={100}
      >
        <MapPin size={16} weight="fill" />
      </Text>
    </Box>
  )
}

export function IconMoney() {
  const theme = useTheme()

  return (
    <Box display="flex" alignItems="center">
      <Text
        color={theme.colors.base.bg}
        bg={theme.colors.yellow.dark}
        padding="0.5rem"
        borderRadius={100}
      >
        <CurrencyDollar size={16} weight="fill" />
      </Text>
    </Box>
  )
}

export function IconTimerFinalization() {
  const theme = useTheme()

  return (
    <Box display="flex" gap="0.75rem" alignItems="center">
      <Text
        color={theme.colors.base.bg}
        bg={theme.colors.yellow.medium}
        padding="0.5rem"
        borderRadius={100}
      >
        <Timer size={16} weight="fill" />
      </Text>
    </Box>
  )
}
