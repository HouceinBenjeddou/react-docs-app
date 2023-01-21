import React from 'react'

const SearchBar = () => {
  return (
    <form>
        <input type="text" placeholder='Search..'/>
        <label>
            <input type="checkbox"/>
            {' '}
            only show products in stock
        </label>
    </form>
  )
}

export default SearchBar