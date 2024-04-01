
import './App.css';
import Filtre from './Filtre';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import {useState, useEffect} from 'react';

function App() {
const [movies,setMovies]=useState([
  {
    id:1,
    title:"The darknight",
    description:"Batman est plus que jamais déterminé à éradiquer le crime organisé qui sème la terreur en ville. Epaulé par le lieutenant Jim Gordon et par le procureur de Gotham City, Harvey Dent, Batman voit son champ d'action s'élargir.",
    posterURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FTrends-International-Knight-Poster-22-375%2Fdp%2FB072B8KZZW&psig=AOvVaw0tqN3P7pgYWDLfidzzGej_&ust=1711817031569000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPic1ML1mYUDFQAAAAAdAAAAABAE",
    note:5
},
{
   id:2,
    title:"Harry Potter",
    description:"Harry Potter est une série de romans écrits par l'auteure britannique J.K. Rowling. Elle raconte l'histoire d'un jeune sorcier nommé Harry Potter et de ses amis Hermione Granger et Ron Weasley, qui étudient à l'école de sorcellerie Poudlard. Ensemble, ils affrontent le sorcier maléfique Lord Voldemort.",
    posterURL:"https://www.begeek.fr/wp-content/uploads/2024/01/Harry-Potter-Warner-Bros.-Discovery.jpeg",
    note:6
}
])

  return (
    <div className="App">
      <h2>Movie library</h2>
     <Filtre/>
     <MovieList Movies={movies}/>
    </div>
  );
}

export default App;
