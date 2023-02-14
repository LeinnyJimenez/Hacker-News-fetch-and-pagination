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
      return { ...state, isLoading: false, hits: payload.hits, nbPages: payload.nbPages }

    case REMOVE_STORY:

      const newHits = state.hits.filter(stories => stories.objectID !== payload)

      return { ...state, hits: newHits }

    case HANDLE_SEARCH:

      return { ...state, query: payload, page: 0 }

    case HANDLE_PAGE:

      if (payload === 'inc') {
        let nextPage = state.page + 1

        if (nextPage > state.nbPages - 1) {
          nextPage = 0
        }

        return { ...state, page: nextPage }
      }

      if (payload === 'dec') {
        let prevPage = state.page - 1

        if (prevPage < 0) {
          prevPage = state.nbPages - 1
        }

        return { ...state, page: prevPage }
      }

      break;
    default:
      throw new Error(`no matching "${action.type}" action type`)
  }
}
export default reducer
