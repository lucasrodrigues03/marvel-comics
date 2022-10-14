import styled from 'styled-components'

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  gap: 4rem;
  width: 1080px;
  max-width: 1180px;
  margin: 50px auto;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
`

export const ImgContainer = styled.div`
  padding: 100px;
  width: 100%;
  max-width: 576;
  border-radius: 8px;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    height: 640px;
    border-radius: 8px;
    box-shadow: 1px 20px 70px;
  }

  @media (max-width: 700px) {
    img {
      padding: 0;
      margin-top: 100px;
      width: 300px;
      height: 350px;
    }
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 32ps;
  }

  span {
    margin-top: 1rem;
    display: block;
    font-size: 32px;
    color: red;
  }

  p {
    margin-top: 2.5rem;
    font-size: 20px;
    line-height: 1.6;
  }

  button {
    margin-top: auto;
    background-color: #ff0000;
    color: #fff;
    border: 0;
    border-radius: 8px;
    padding: 1.25rem;
    cursor: pointer;
    font-weight: bold;
    font-size: px;
    box-shadow: 1px 10px 30px #292929;

    transition: all 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 700px) {
    h2 {
      font-size: 40px;
    }

    span {
      font-size: 50px;
    }

    p {
      margin: 2px 5px;
    }
  }

  button {
    width: 300px;
    margin: 10px auto;
  }
`
export const ButtonContainer = styled.button`
  position: fixed;
  top: 10px;
  left: 30px;
  padding: 8px;
  margin-bottom: 10px;
  background: rgba(255, 0, 0, 0.8);
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    left: 20px;
  }

  @media (max-width: 700px) {
    top: 88%;
    left: 10px;
    background-color: rgba(255, 0, 0, 0.6);
    color: #fff;
    padding: 5px;
    border-radius: 50%;
  }
`
