import React from 'react'
import Movie from './Movie'

const MovieList = ({mvs}) => {
  return (
    <div>
        <div className='mainlayout'>
        {mvs.map((movie,index)=>
        <Movie
        key={index}
        movie={movie}
        />
        
        )}
        </div>
    </div>
  )
}

export default MovieList