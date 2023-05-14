import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const  MovieDisplay= ({value}) => {
    // const getDetail = (id) => {
    //     alert(id);
    //    }
  return (
    <div className='result'>
        <div className='border border-dark border-4'>
        <img src={value.Poster} alt="result" />
        </div>
        <div className='bg-dark text-white p-2'>
        <Link to={`/movie/${value.imdbID}`}><h3>{value.Title}</h3></Link>
        </div>
        
        
    </div>
  )
}

export default MovieDisplay