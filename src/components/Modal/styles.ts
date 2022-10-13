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
  width: 450px;
  height: 500px;
  max-width: 90%;
  background-color: #fff;
  text-align: center;

  border-radius: 0.5rem;
  z-index: 10;

  p {
    margin-top: 50px;
    font-weight: bold;
  }

  img {
    width: 390px;
    height: 500px;
    margin: 30px auto;
  }

  @media (max-width: 700px) {
    width: 400px;
    height: 400px;

    img {
      width: 200px;
      height: 100;
      margin: 25px auto;
    }

    p {
      display: none;
    }
  }
`
export const CloseButtonContainer = styled.button`
  position: absolute;
  right: 7px;
  top: 7px;
  background: none;
  border: none;
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #ff0000;
  }
`
export const AddCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: #ff0000;
  margin: -15px auto;
  padding: 10px;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 700px) {
    left: 50px;
    right: 50px;
    bottom: 10px;
  }
`
