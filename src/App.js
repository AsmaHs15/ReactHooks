import React, { useState } from 'react';


import Search from './Components/SearchMovie/Search';
import MoviesList from './Components/MoviesList';
import AddMovie from './Components/AddMovie/AddMovie';

import './App.css';
import { findByLabelText } from '@testing-library/dom';

function App() {
//...............Cards Data...........

const moviesData = [
  {
    id: Math.random(),
    imgTop :'/La_Belle_et_la_Bete.jpg',
    imgHero: '/Emma Watson(Belle).jpg',
    name: 'La Belle et la Bête',
    date: '2017 ',
    description:
      'The surviving members of the resistance face the First Order once again',
    rating: 2,
  },
  {
    id: Math.random(),
    imgTop : '/Rebelle.jpg',
    imgHero: '/Mérida_(Brave).jpg',
    name: 'Rebels',
    date: '2019',
    description:
      '(French: Rebelles) is a French comedy directed and written by Allan',
      rating: 5,
  },
  {
    id: Math.random(),
    imgTop :'/le_reine_des_neige.jpg' ,
    imgHero: '/Idina Menzel.jpg ',
    name: 'Frozen II',
    date: '2013',
    description:
      'A strong  princess try to find her estranged sister, whose icy powers have inadvertently trapped their kingdom in eternal winter',
      rating: 4,
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
  );
}

export default App;
