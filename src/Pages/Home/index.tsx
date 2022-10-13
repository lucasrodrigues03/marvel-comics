import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { api } from '../../services/api'
import { Modal } from '../../components/Modal'
import { PaginationFooter } from '../../components/PaginationFooter'

import { Comic } from '../../types/comic'
import {
  actionActivateLoading,
  actionDesactivateLoading,
} from '../../store/reducers/loading'
import { CardContainer, HomeContainer } from './styles'

export function Home() {
  const dispatch = useDispatch()
  const [comics, setComics] = useState<Comic[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Comic>({
    id: '',
    title: '',
    thumbnail: '',
    description: '',
  })

  const [paginationData, setPaginationData] = useState({
    offset: 0,
    total: 0,
    count: 0,
    limit: 0,
  })
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.floor(paginationData.total / paginationData.limit)

  const calculateComicsSpecials = (comics: Comic[]): Comic[] => {
    const PERCENT = 10
    const quantitySpecials = (comics.length * PERCENT) / 100 // 2

    for (let i = 0; i < quantitySpecials; i++) {
      const randomIndex = Math.floor(Math.random() * comics.length)

      comics[randomIndex] = {
        ...comics[randomIndex],
        isSpecial: true,
      }
    }

    return comics
  }

  const handleGetComics = useCallback(
    (page: number = 1) => {
      dispatch(actionActivateLoading())
      api
        .get(`/comics`, { params: { offset: page * 20, limit: 20 } })
        .then((response) => {
          const results = response.data.data.results.map(
            (result: Record<string, any>) => {
              return {
                ...result,
                thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`,
              }
            },
          )

          const arrayParsed = calculateComicsSpecials(results)

          setComics(arrayParsed)
          setPaginationData({
            offset: response.data.data.offset,
            total: response.data.data.total,
            count: response.data.data.count,
            limit: response.data.data.limit,
          })
          dispatch(actionDesactivateLoading())
        })
    },
    [dispatch],
  )

  function handleClickNextPage() {
    if (currentPage === totalPages) return
    handleGetComics(currentPage + 1)

    setCurrentPage((prevState) => prevState + 1)
  }

  function handleClickPreviousPage() {
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
  }, [handleGetComics])

  return (
    <HomeContainer data-test="home-component">
      {isModalOpen && (
        <Modal comic={selectedItem} onClickClose={handleCloseModal} />
      )}
      {comics.map((comic) => {
        return (
          <CardContainer
            data-test="comics-list"
            isSpecial={comic.isSpecial}
            onClick={() => {
              setSelectedItem(comic)
              handleOpenNewModal()
            }}
            key={comic.id}
          >
            <img src={comic.thumbnail} alt="" />
          </CardContainer>
        )
      })}
      <PaginationFooter
        currentPage={currentPage}
        handleClickNextPage={handleClickNextPage}
        handleClickPreviousPage={handleClickPreviousPage}
        totalPages={totalPages}
      />
    </HomeContainer>
  )
}
