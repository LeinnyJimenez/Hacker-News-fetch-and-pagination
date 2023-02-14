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

    case REMOVE_STORY:

      const newHits = state.hits.filter(stories => stories.objectID !== payload)

      return { ...state, hits: newHits }

    case HANDLE_SEARCH:

      return { ...state, query: payload, page: 0 }
    default:
      throw new Error(`no matching "${action.type}" action type`)
  }
}
export default reducer
