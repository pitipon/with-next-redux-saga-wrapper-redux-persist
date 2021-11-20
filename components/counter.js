import { useSelector, useDispatch } from 'react-redux'

const { actions: {increment, decrement, reset } } = require('../redux/example')

import {
  name as exampleName
} from '../redux/example'

const Counter = () => {
  const count = useSelector((state) => state[exampleName].count)
  const dispatch = useDispatch()

  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
