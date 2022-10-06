import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { HomeContainer } from './styles'

interface Comic {
  id: string
  title: string
  imageUrl: string
}

export function Home() {
  const [comics, setComics] = useState<Comic[]>([])

  useEffect(() => {
    api.get(`/comics`).then((response) => {
      console.log(response.data)
      setComics(response.data.data.results)
    })
  }, [])

  return (
    <HomeContainer>
      {comics.map((comic) => {
        return (
          <>
            <ul>
              <li key={comic.id}>{comic.title}</li>
            </ul>
          </>
        )
      })}
    </HomeContainer>
  )
}
