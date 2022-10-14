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
  width: 450px;
  height: 500px;
  padding: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  background-color: #fff;
  box-shadow: 1px 20px 50px #000;
  text-align: center;

  border-radius: 0.5rem;
  z-index: 10;

  p {
    font-weight: bold;
  }

  img {
    width: 300px;
    height: 500px;
    margin: 30px auto;
    box-shadow: 1px 20px 70px;
  }

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 400px;

    img {
      margin-top: -25px;
      width: 200px;
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

  &:hover {
    filter: brightness(1);
  }

  @media (max-width: 700px) {
    left: 50px;
    right: 50px;
    bottom: 10px;
  }
`
