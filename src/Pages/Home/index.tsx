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
  const [comics, setComics] = useState<Comic[]>([]) // estado que seta listagem das comics
  const [isModalOpen, setIsModalOpen] = useState(false) // estado que seta se a modal esta aberta ou fechada
  const [selectedItem, setSelectedItem] = useState<Comic>({
    // estado que seleciona o item , contendo a quantidade, o id, a foto e descrição
    id: '',
    title: '',
    thumbnail: '',
    description: '',
  })

  const [paginationData, setPaginationData] = useState({
    offset: 0, // indice inicial do item + 1
    total: 0, // total de páginas
    count: 0,
    limit: 0, // quantidade a ser exibida, no caso 20
  })
  const [currentPage, setCurrentPage] = useState(1) // página atual

  const totalPages = Math.floor(paginationData.total / paginationData.limit) // divide a quantidade de pagina pelo limite

  // lógica para calcular porcentagem
  // objetivo: 10% das hqs mostradas em tela tem q ser mostrada como rara aleatóriamente
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

  // chamada da api utilizando useCallback = executando a função e guardando seu valor em memória,
  // sendo assim, toda vez q renderizar a página, não há nescessidade de executar esta função novamente
  const handleGetComics = useCallback(
    (page: number = 1) => {
      dispatch(actionActivateLoading()) // executa a action de loading, fazendo com q o reducer altere o valor fazendo aparecer na tela o spinner
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

          const arrayParsed = calculateComicsSpecials(results) // sobreescreve o valor do results, desta vez contendo 10% das hqs raras aleatóriamente

          setComics(arrayParsed)
          setPaginationData({
            // seta no estado os valores retornados da api
            offset: response.data.data.offset,
            total: response.data.data.total,
            count: response.data.data.count,
            limit: response.data.data.limit,
          })
          dispatch(actionDesactivateLoading()) // executa a action de desativar o spinner
        })
    },
    [dispatch],
  )

  function handleClickNextPage() {
    if (currentPage === totalPages) return
    handleGetComics(currentPage + 1) // função que troca para próxima página

    setCurrentPage((prevState) => prevState + 1)
  }

  function handleClickPreviousPage() {
    // função que troca para página anterior
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
