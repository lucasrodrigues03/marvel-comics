import styled from 'styled-components'

export const HeaderContainer = styled.header`
  top: fixed;
  width: 100%;
  height: 80px;
  background-color: #ff0000;
  color: #fff;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8px;
  z-index: 10;

  button {
    background: none;
    color: #fff;
    border-radius: 8px;
    border: 0;
    padding: 2px;

    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 700px) {
    position: fixed;
    top: 0;
  }
`
