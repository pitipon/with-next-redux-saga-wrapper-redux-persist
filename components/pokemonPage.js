import Link from 'next/link'
import { useSelector } from 'react-redux'

import {
  name as pokemonName
} from '../redux/pokemon'

function PokemonPage({ linkTo, NavigateTo, title }) {
  const placeholderData = useSelector((state) => state[pokemonName].placeholderData)
  const error = useSelector((state) => state[pokemonName].error)

  return (
    <div>
      <h1>{title}</h1>

      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  )
}

export default PokemonPage
