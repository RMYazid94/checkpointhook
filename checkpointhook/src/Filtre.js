import React from 'react'

function Filtre() {
  return (
    <div className='filtre'>
        <input type="text" name="filtreTitle" id="filtreByTitle" placeholder='Filtre par titre'/>
        <input type="text" name="filtreRating" id="filtreByRating" placeholder='Filtre par Rating'/>
    </div>
  )
}

export default Filtre