
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MovieDetail from './components/movieDetail';
import Home from './components/home';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/movie/:id' element={<MovieDetail />}/>
      </Routes>
      </BrowserRouter>
   
      
    </div>
  );
}

export default App;
