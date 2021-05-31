import React, { useState } from 'react';


import Search from './Components/SearchMovie/Search';
import MoviesList from './Components/MoviesList';
import AddMovie from './Components/AddMovie/AddMovie';

import './App.css';
import { BrowserRouter, Route , Link} from 'react-router-dom';
import MovieCard from './Components/MovieCard/MovieCard';
import AboutFilm from './Components/AboutFilm';

function App() {
//...............Cards Data...........

const moviesData = [
  {
    id:1, //Math.random(),
    imgTop :'/La_Belle_et_la_Bete.jpg',
    imgHero: '/Emma Watson(Belle).jpg',
    name: 'La Belle et la Bête',
    date: '2017 ',
    description:
      'The surviving members of the resistance face the First Order once again',
    rating: 2,
    trailer:"https://www.youtube.com/embed/8NilHXN3GEM"
  },
  {
    id:2, // Math.random(),
    imgTop : '/Rebelle.jpg',
    imgHero: '/Mérida_(Brave).jpg',
    name: 'Rebels',
    date: '2019',
    description:
      '(French: Rebelles) is a French comedy directed and written by Allan',
      rating: 5,
      trailer:"https://www.youtube.com/embed/-b7GAhnVwhA"

  },
  {
    id:3, // Math.random(),
    imgTop :'/le_reine_des_neige.jpg' ,
    imgHero: '/Idina Menzel.jpg ',
    name: 'Frozen II',
    date: '2013',
    description:
      'A strong  princess try to find her estranged sister, whose icy powers have inadvertently trapped their kingdom in eternal winter',
      rating: 4,
      trailer:"https://www.youtube.com/embed/Zi4LMpSDccc"
    },
 

];
//---------------------------


  const [moviesList, setMoviesList] = useState(moviesData);

  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addMovie = (e, newMovie) => {
    e.preventDefault();
    return setMoviesList([...moviesList, newMovie]);
  };


  return (
    <div className="App">
 
 
 {/* <Route exact path ="/" component={MovieCard}>   </Route> */}



      <Route
       exact  path="/profile/:filmId"
        render={(props) => <AboutFilm {...props} moviesList={moviesList} />}
      />


      <Route exact 
        path="/"
        render={() => (      
          <div>  
             <Search
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
      />

      <AddMovie addMovie={addMovie} /> 
      <MoviesList
      moviesList={moviesList}
      nameSearch={nameSearch}
      ratingSearch={ratingSearch}
    /> 
     
   
   
      </div>  
        )}
      />

{/*  
  <Route
        path="/AboutFilm/:filmId"
        render={(props) => <AboutFilm moviesList={moviesList} />}
        
      /> */}

   


    </div>
  );
}

export default App;
