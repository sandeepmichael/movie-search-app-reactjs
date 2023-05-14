import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../spinner.css'


const MovieDetail = () => {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(false)
    const {id} = useParams("");

     useEffect(() => {
          const getmovieDetail = async() => {
            setLoading(true)
            const res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=5d2162b9`)
            console.log(res.data)
            setDetail(res.data);
            setLoading(false);
          }
          getmovieDetail();
     }, [id])
             
      
  return (
    <div className='App'>
      
        <header className='App-header'>
        {/* <Button onClick={handleClick} className='btn btn-dark'>Go Back</Button> */}
         {loading ?  <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div> : 
    <div className='d-flex felx-column align-items-center'>
        <div className='container'>
            <div className='row'>
                 <div className='col-12 col-md-6'>
                    <img src={detail.Poster} alt=""/>

                 </div>
                  <div className='col-12 col-md-6'>
                    <h2>{detail.Title}</h2>
                     <p>{detail.Year}</p>
                     <p>Rating Imdb: {detail.imdbRating}</p>
                     <p>{detail.Plot}</p>

                  </div>

            </div>

        </div>

    </div>
}
    </header>
    </div>
  )
}

export default MovieDetail