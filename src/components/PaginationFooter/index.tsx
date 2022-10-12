import { Container } from './styles'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

interface PaginationFooterProps {
  handleClickPreviousPage: () => void
  handleClickNextPage: () => void
  currentPage: number
  totalPages: number
}

export function PaginationFooter({
  currentPage,
  totalPages,
  handleClickNextPage,
  handleClickPreviousPage,
}: PaginationFooterProps) {
  return (
    <Container>
      <button onClick={handleClickPreviousPage} type="button">
        <ArrowLeft size={20} />
      </button>
      <span>
        {currentPage} de {totalPages}
      </span>
      <button onClick={handleClickNextPage} type="button">
        <ArrowRight size={20} />
      </button>
    </Container>
  )
}
