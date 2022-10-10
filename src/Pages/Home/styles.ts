import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin: 100px auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow-x: hidden;
  gap: 1rem;
  justify-content: space-around;

  img {
    display: inline-block;
    cursor: pointer;
    width: 150px;

    transition: all 0.2s;
  }

  .card {
    padding: 8px;
    background: white;
    border-radius: 8px;
  }

  .pagination {
    left: 50%;
    transform: translate(-50%);
    position: fixed;
    bottom: 0;

    button {
      width: 100px;
      padding: 5px;
      border: 0;
      border-radius: 6px;
      color: white;
      background: #f80618;
      cursor: pointer;
      font-weight: bold;

      transition: all 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

      &:active {
        filter: brightness(0.6);
      }
    }

    .current-page {
      margin-left: 5px;
      gap: 1rem;
      font-size: 20px;
    }

    .total-page {
      gap: 1rem;
      margin-right: 5px;
      font-size: 20px;
    }
  }
`
