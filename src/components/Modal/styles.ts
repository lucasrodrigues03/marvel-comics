import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
`
export const OverlayContent = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  max-width: 90%;
  background-color: #fff;
  padding: 1.2rem;
  border-radius: 0.5rem;
  z-index: 10;
`
