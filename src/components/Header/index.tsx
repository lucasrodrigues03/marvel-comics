import { ShoppingCart } from 'phosphor-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { CartState } from '../../store/reducers/cart'
import { LoadingState } from '../../store/reducers/loading'
import { Loading } from '../Loading'
import { HeaderContainer } from './styles'

export function Header() {
  const navigate = useNavigate()
  const cart = useSelector<RootState, CartState>((state) => state.cart)
  const loading = useSelector<RootState, LoadingState>((state) => state.loading)
  return (
    <HeaderContainer>
      <div style={{ width: '50px' }}>{loading.isLoading && <Loading />}</div>
      <img
        data-test="header-home"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/128px-Marvel_Logo.svg.png"
        alt="marvel-logo"
      />
      <button onClick={() => navigate('/cart')} type="button">
        <ShoppingCart size={30} />
        {cart.products.length !== 0 && cart.products.length}
      </button>
    </HeaderContainer>
  )
}
