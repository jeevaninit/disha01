import React from 'react'

const Movie = ({movie}) => {
  return (
    <div>
        <div className='movieitems'>
        <img src={movie.poster} alt='' />
        <h2>{movie.title}</h2>
        </div>
    </div>
  )
}

export default Movie