import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import "./aboutFilm.css" ;


const CardExampleCard = (props) => {
  const fetchedFilm = props.moviesList.find(
    (person) => person.id == props.match.params.filmId
  );

const headerStyle = {
  color:'white'
}

  return (
    <div className="movieDetail">
        
    <h1 style={headerStyle}>{fetchedFilm.name}</h1>
    <p style={headerStyle}>{fetchedFilm.description}</p>
    <h3 style={headerStyle}>Movie official Trailer:</h3>
    <br/>
    <iframe width="760" height="506"  src={fetchedFilm.trailer}
    frameborder="0" a></iframe><br/><br/>
<br/>
    <Link className="back" to ="/"> Back To Home </Link>
  
    </div>


  );
};

export default CardExampleCard;
