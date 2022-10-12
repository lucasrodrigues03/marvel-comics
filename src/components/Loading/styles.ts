import styled from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;

  > svg {
    animation: spinner 0.4s linear infinite;

    font-size: 18px;
    @keyframes spinner {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`
