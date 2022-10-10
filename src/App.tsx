import { Header } from './components/Header'
import { Home } from './Pages/Home'
import { GlobalStyle } from './styles/GlobalStyles'
import { Comic } from './types/comic'

export function App({ description, id, thumbnail, title }: Comic) {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  )
}
