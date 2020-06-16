import React from 'react';

const Film = (props) => {
  return (
    <li><a href={props.film.url}>{props.film.name}</a></li>
  );
}

export default Film;
