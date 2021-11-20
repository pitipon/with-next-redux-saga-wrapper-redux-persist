import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import {wrapper} from '../redux/store'

import PokemonPage from '../components/pokemonPage'
import { name as pokemonName, pokemonActions, pokemonTypes} from '../redux/pokemon'


const Redux = () => {
  return <PokemonPage title="Example Redux saga with gen-redux-type" linkTo="/" NavigateTo="Back to main" />
}


export const getStaticProps = wrapper.getStaticProps((store) => async ({ req }) => {


  if (!store.getState()[pokemonName].placeholderData) {

    store.dispatch(pokemonActions.get_start())
    store.dispatch(END)
  }

  await store.sagaTask.toPromise(); // Must have: if we want to wait for sage finish it job
})


export default Redux
