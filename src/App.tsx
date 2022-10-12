import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Cart } from './Pages/Cart'
import { Home } from './Pages/Home'
import { store } from './store'
import { GlobalStyle } from './styles/GlobalStyles'

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  )
}
