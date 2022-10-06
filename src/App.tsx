import { Header } from './components/Header'
import { Home } from './Pages/Home'

export function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}

/*

O QUE DEVO USAR: 

O QUE ESPERAMOS 

- Utilização de ReactJs ou NextJs
- Estilização feita com Styled Components
- Realizar teste E2E com Cypress nos fluxos que achar necessário
- Que a UI seja autoral do participante, esteticamente bonita e simples de usar
- Layout responsivo / mobile first
- Ver o website rodando em algum host estático (Heroku, Netlify, Vercel, Github
Pages, etc)

O QUE NOS IMPRESSIONARIA

- Utilização de Redux Toolkit para gerenciamento de estado global
- HTML escrito de maneira semântica
- Animações em CSS ou com alguma biblioteca externa (Cuidado com a
performance do seu website😄)
- Utilização de Docker na conteinerização da aplicação


SOBRE:
loja de quadrinhos
algo moderno e bonito
leyout é com vc, seja criativo

- Uma lista paginada das histórias em quadrinhos (QH's)
- Uma página de visualização individual da HQ
- E o carrinho

Depois, pediram algumas coisas que são OPCIONAIS na
entrega do website:

- Na listagem de HQ's, 10% dos quadrinhos mostrados devem ser marcados
como raros aleatoriamente ao carregar;
- O carrinho deve apresentar a possibilidade de inserir um cupom de desconto
com validação mock, sem API;
- Por fim, existiriam dois tipos de cupons: os cupons comuns e os raros. Que
seriam aplicados somente para HQ's respectivamente comuns e raras.

A API se encontra em https://developer.marvel.com

OBS: Os cupons devem ser adicionados no fim do seu README.
 */
