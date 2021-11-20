import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import {wrapper} from '../redux/store'
const { actions: {loadData, startClock, tickClock} } = require('../redux/example')
import Page from '../components/page'



const Redux = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
    // dispatch(loadData())
  }, [dispatch])

  return <Page title="Example Redux saga" linkTo="/example2" NavigateTo="Redux with auto generate action" />
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
