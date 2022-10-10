import { useEffect, useState } from 'react'
import { Modal } from '../../components/Modal'
// import { Modal } from '../../components/Modal'
import { api } from '../../services/api'
import { Comic } from '../../types/comic'
import { HomeContainer } from './styles'

export function Home() {
  const [comics, setComics] = useState<Comic[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Comic>({
    id: '',
    title: '',
    thumbnail: '',
    description: '',
  })

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
      console.log(response.data)
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

  function handleOpenNewModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  useEffect(() => {
    handleGetComics()
  }, [])

  useEffect(() => {
    console.log(selectedItem)
  }, [selectedItem])

  return (
    <HomeContainer>
      {isModalOpen && (
        <Modal comic={selectedItem} onClickClose={handleCloseModal} />
      )}
      {comics.map((comic) => {
        return (
          <>
            <button
              onClick={() => {
                setSelectedItem(comic)
                handleOpenNewModal()
              }}
              className="imagens"
              key={comic.id}
            >
              <img className="img-comics" src={comic.thumbnail} alt="" />
              {/* {comic.title} <p>{comic.description}</p> */}
            </button>
          </>
        )
      })}
      <div className="pagination">
        <button onClick={previousPage} type="button">
          Previous
        </button>
        <span className="current-page">{currentPage} de </span>
        <span className="total-page">{totalPages}</span>
        <button onClick={handleNextPage} type="button">
          Next
        </button>
      </div>
    </HomeContainer>
  )
}
