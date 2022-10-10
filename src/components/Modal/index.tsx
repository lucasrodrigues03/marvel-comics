import React from 'react'
import { Comic } from '../../types/comic'

import { ModalContainer, OverlayContent } from './styles'

interface ModalProps {
  comic: Comic
  onClickOverlay: () => void
}

export function Modal({ onClickOverlay, comic }: ModalProps) {
  return (
    <ModalContainer onClick={onClickOverlay}>
      <OverlayContent onClick={(event) => event.stopPropagation()}>
        <img src={comic.thumbnail} alt="" />
        <p>{comic.description}</p>
      </OverlayContent>
    </ModalContainer>
  )
}
