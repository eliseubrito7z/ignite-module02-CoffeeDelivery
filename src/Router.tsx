import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Checkout } from './pages/Checkout'
import { FinalizationPage } from './pages/Finalization'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/finalization" element={<FinalizationPage />} />
      </Route>
    </Routes>
  )
}
