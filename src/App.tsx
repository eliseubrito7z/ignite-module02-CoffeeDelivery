import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ChakraProvider } from '@chakra-ui/react'
import { defaultTheme } from './assets/themes/defaultStyleTheme'
import { CoffeeContextProvider } from './context/CoffeeContext'

export function App() {
  return (
    <ChakraProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  )
}
