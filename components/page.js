import Link from 'next/link'
import { useSelector } from 'react-redux'

import Counter from './counter'
import Clock from './clock'
import {
  name as exampleName
} from '../redux/example'

function Page({ linkTo, NavigateTo, title }) {
  const placeholderData = useSelector((state) => state[exampleName].placeholderData)
  const error = useSelector((state) => state[exampleName].error)
  const light = useSelector((state) => state[exampleName].light)
  const lastUpdate = useSelector((state) => state[exampleName].lastUpdate)
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
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

export default Page
