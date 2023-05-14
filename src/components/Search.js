import React from 'react'
import { FcSearch } from "react-icons/fc";


const Search = ({handleSearchNote}) =>{

  return (
    <div className = "search">
     <FcSearch/>
     <input
      type = "text"
      placeholder= "type to search..."
      onChange={(event) =>
         handleSearchNote(event.target.value) }
    />     
    </div>
  )

}

export default Search;