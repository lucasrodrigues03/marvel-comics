import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { HomeContainer } from './styles'

interface Comic {
  id: string
  title: string
  thumbnail: string
}

export function Home() {
  const [comics, setComics] = useState<Comic[]>([])

  const [paginationData, setPaginationData] = useState({
    offset: 1,
    total: 0,
    count: 0,
    limit: 0,
  })
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.floor(paginationData.total / paginationData.limit)

  function handleGetComics(page: number = 1) {
    api.get(`/comics`, { params: { offset: page } }).then((response) => {
      const results = response.data.data.results.map(
        (result: Record<string, any>) => {
          return {
            ...result,
            thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`,
          }
        },
      )
      setComics(results)
      setPaginationData({
        offset: response.data.data.offset,
        total: response.data.data.total,
        count: response.data.data.count,
        limit: response.data.data.limit,
      })
    })
  }

  function handleNextPage() {
    if (currentPage === totalPages) return
    handleGetComics(currentPage + 1)

    setCurrentPage((prevState) => prevState + 1)
  }

  function previousPage() {
    if (currentPage <= 1) return
    handleGetComics(currentPage - 1)

    setCurrentPage((prevState) => prevState - 1)
  }

  useEffect(() => {
    handleGetComics()
  }, [])

  return (
    <HomeContainer>
      {comics.map((comic) => {
        return (
          <>
            <ul>
              <li key={comic.id}>
                {comic.title}{' '}
                <img
                  className="img-comics"
                  src={comic.thumbnail}
                  alt="image-comic"
                />
              </li>
            </ul>
          </>
        )
      })}
      <button onClick={previousPage} type="button">
        Voltar
      </button>
      {currentPage} de {totalPages}
      <button onClick={handleNextPage} type="button">
        Avançar
      </button>
    </HomeContainer>
  )
}
