import React from 'react';

import Rate from '../Rate';

import './MovieCard.css';

const MovieCard = ({ movie: {imgTop, imgHero,name,date, description, rating} }) => {
  return (
    <>
    
    {/* <div className='container'> */}
      {/* <div className='movie'> */}
       
     <div style={{display:'flex', justifyContent:'spaceBetween'}}> 



      <div class="container">
      {/* <div class="heading"></div> */}

                <div className="cards-wrapper">
                <div className="card">
                  <img src={imgTop} className="image-top"/>
                  <img src={imgHero} className="profile-image"/>

                  <h1 className="fullname">{name}</h1>
                  <ul className='movie-gen'>
                                <p>{date}</p>
                  </ul>
                  
                  <p className="about-film">{description}</p>

                  <button type="button">Watching</button>
                
                  <div className='movie-rating'>
                          <Rate rating={rating} />
                  </div>
    
</div>
</div>
</div>


 </div> 
</>

  );
};

export default MovieCard;
