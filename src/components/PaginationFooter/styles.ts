import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;

  bottom: 0;
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: none;
    color: #ff0000;
    border-radius: 50%;
    border: 0;
    padding: 4px;
    cursor: pointer;

    display: flex;
    align-items: center;

    gap: 0.5rem;
    margin: 0 4px;
    transition: all 0.2s;

    &:hover {
      background-color: #ff0000;
      color: #fff;
    }

    &:active {
      opacity: 0.5;
    }
  }

  @media (max-width: 700px) {
    position: fixed;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    font-weight: bold;

    button {
      background-color: none;
    }
  }
`
