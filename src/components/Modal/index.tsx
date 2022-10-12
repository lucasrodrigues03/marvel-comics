import { useDispatch } from 'react-redux'
import { actionAddProductToCart } from '../../store/reducers/cart'
import { Comic } from '../../types/comic'

import { Plus, X } from 'phosphor-react'
import {
  AddCartButton,
  CloseButtonContainer,
  ModalContainer,
  OverlayContent,
} from './styles'

interface ModalProps {
  comic: Comic
  onClickClose: () => void
}

export function Modal({ onClickClose, comic }: ModalProps) {
  const dispatch = useDispatch()

  function handleClickBuy() {
    dispatch(actionAddProductToCart(comic))
    onClickClose()
  }

  return (
    <ModalContainer>
      <OverlayContent>
        <CloseButtonContainer>
          <X size={25} onClick={onClickClose} />
        </CloseButtonContainer>
        <div>
          <img src={comic.thumbnail} alt="" />
          <p>{comic.description}</p>
        </div>
        <AddCartButton onClick={handleClickBuy}>
          Adicionar ao carrinho
          <Plus size={24} />
        </AddCartButton>
      </OverlayContent>
    </ModalContainer>
  )
}
