import React,{useState} from 'react'
import {Button, Container, Form} from'react-bootstrap'
import axios from 'axios'
import '../spinner.css'
import MovieDisplay from './movieDisplay'

const Home = () => {
    const [state, setState] = useState({
        search:'',
        
      });
      const [results, setResults] = useState([])
      const [loading, setLoading] = useState(false)
    
       
      const handleChange = e => {
        setState((prevState) => {
          return {...prevState, search:e.target.value}
        })
      }
    
       const submitHandler = async(e) => {
         try {
          e.preventDefault()
          setLoading(true);
          const res = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=5d2162b9&s=${state.search}`)
          console.log(res.data.Search)
              setResults(res.data.Search)
              setLoading(false)
            
          }
             
          
         catch (error) {
          console.log(error)
         }
       }
  return (
    <div className="App">
      <header className="App-header">
        {loading ?  <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div> : 
       <>
          <h1>Search Movie</h1>
          <Container>
            <Form onSubmit={submitHandler}>
          <input  type='text' className='form-control mt-3' onChange={handleChange}/>
          <Button type='submit' className='btn btn-primary m-3'>Search</Button>
          </Form>
          </Container>
          <div className='container'>
            <div className='row'>
              {results && results.map((value, i) => {
                return (
                  <div className='col-12 col-sm-6 col-md-3 col-lg-4 my-2'>
                     <MovieDisplay key={value.imdbID} value={value} />
                  </div>
                )
              })}

            </div>

          </div>

       </>
        }
        </header>
      
    </div>
  )
}

export default Home