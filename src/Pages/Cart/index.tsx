import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { Comic } from '../../types/comic'
import { ArrowLeft } from 'phosphor-react'

import {
  ButtonContainer,
  CartContainer,
  ImgContainer,
  ProductDetails,
} from './styles'
import React from 'react'

export function Cart() {
  const comics = useSelector<RootState, Comic[]>((state) => state.cart.products)
  const navigate = useNavigate()

  return (
    <>
      <ButtonContainer onClick={() => navigate('/')} type="button">
        <ArrowLeft size={30} />
      </ButtonContainer>

      <CartContainer>
        {comics.map((comic) => (
          <React.Fragment key={comic.id}>
            <ImgContainer>
              <img src={comic.thumbnail} alt="" />
            </ImgContainer>

            <ProductDetails>
              <h2>{comic.title}</h2>
              <span>R$ 89,90</span>
              <p>{comic.description}</p>
              <button type="button"> $ Comprar</button>
            </ProductDetails>
          </React.Fragment>
        ))}
      </CartContainer>
    </>
  )
}
