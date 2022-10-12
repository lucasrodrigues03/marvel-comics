import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: hidden;
  justify-content: center;
  width: 100%;
  min-height: 100%;

  img {
    object-fit: cover;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    max-height: 300px;
  }
`
interface CardContainerProps {
  isSpecial?: boolean
}

export const CardContainer = styled.div<CardContainerProps>`
  margin: 8px;
  width: 200px;
  height: 300px;
  padding: ${(props) => (props.isSpecial ? '15px' : ' 5px')};
  background: ${(props) => (props.isSpecial ? '#ff0000' : ' #fff')};
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 700px) {
    width: 100px;
    height: 150px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`
