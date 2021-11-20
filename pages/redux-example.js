import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import {wrapper} from '../redux/store'
const { actions: {loadData, startClock, tickClock} } = require('../redux/example')
import Page from '../components/page'


// import {autoTypeGen} from '../utils/genReduxType/myReduxType'
// const [types, actions] = autoTypeGen('Product')

import genReduxType from 'gen-redux-type'
const [types, actions] = genReduxType({ name: 'product' })
console.log('types', types)
console.log('actions',actions)
console.log('actions 1',
  actions.create_start()
)
console.log('actions 2',
  actions.create_start(
    { name: 'milk', price: '12' }
  )
)
console.log('actions 3',
  actions.create_start(
    { name: 'milk', price: '12' },
    '/'
  )
)
const [authTypes, authActions] = genReduxType({ name: 'user', verbs: ['login', 'register'] })
console.log('auth type', authTypes)
console.log('auth action', authActions)

const [modalTypes, modalActions] = genReduxType({
  name: 'modal',
  verbs: [],
  events: [],
  extras: ['open','close','toggle']
})
console.log('modal type', modalTypes)
console.log('modal action', modalActions)

const [userTypes, userActions] = genReduxType({
  name: 'user',
  extras: []
})
console.log('user type', userTypes)
console.log('user action', userActions)


const Redux = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
    // dispatch(loadData())
  }, [dispatch])

  return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />
}


export const getStaticProps = wrapper.getStaticProps((store) => async ({ req }) => {
  // Code here
  store.dispatch(tickClock(false))

  if (!store.getState().placeholderData) {
    // console.log('dispatch placeholder')
    store.dispatch(loadData())
    store.dispatch(END)
  }

  await store.sagaTask.toPromise(); // Must have: if we want to wait for sage finish it job
})


export default Redux
