import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {

  const { payload } = action

  switch (action.type) {
    case SET_LOADING:

      return { ...state, isLoading: true }

    case SET_STORIES:
      return { ...state, isLoading: false, hits: payload.hits, nbPage: payload.nbPage }

    default:
      throw new Error(`no matching "${action.type}" action type`)
  }
}
export default reducer
