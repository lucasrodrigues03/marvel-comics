import { X } from 'phosphor-react'
import React from 'react'
import { Comic } from '../../types/comic'

import { ModalContainer, OverlayContent } from './styles'

interface ModalProps {
  comic: Comic
  onClickClose: () => void
}

export function Modal({ onClickClose, comic }: ModalProps) {
  return (
    <ModalContainer>
      <OverlayContent>
        <button>
          <X size={32} onClick={onClickClose} />
        </button>
        <img src={comic.thumbnail} alt="" />
        <p>{comic.description}</p>
      </OverlayContent>
    </ModalContainer>
  )
}
