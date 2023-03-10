import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {

  const { handleSearch, query } = useGlobalContext()

  return <form className='search-form' onSubmit={(e) => e.preventDefault()}>
    <h2>Search hacker news</h2>
    <input className='form-input' value={query} onChange={(e) => handleSearch(e.target.value)} />
  </form>
}

export default SearchForm
