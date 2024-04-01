import React from 'react';
import MovieCard from './MovieCard';


const MovieList = ({Movies}) => {

    return (
        <div>
            {Movies.map(movie=>(
    <MovieCard
    key={movie.id}
    title={movie.title}
    description={movie.description}
    posterURL={movie.posterURL}
    note={movie.note}
    />
    ))}
        </div>
    )
}
export default MovieList;