//**Source Code: JavaScript Mastery, React JS Full Course 2023 | Build an App and Master React in 1 Hour */
import "./App.css";
import SearchIcon from "./search.svg";
import {useEffect, useState} from "react";
import MovieCard from "./MovieCard";


const movie1 = {
    "Title": "Spiderman in Cannes",
    "Year": "2016",
    "imdbID": "tt5978586",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
}


const API_URL = "http://www.omdbapi.com?apikey=b1954f52";



const App = () => {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    
    setMovies(data.Search);
  }
  
  
  
  useEffect(()=> {
    searchMovie("Superman");
  },[]);

  return(
  <div className ="app">
      <h1>MovieLand</h1>
        <div className="search">
         <input placeholder="Search for movies"
          value= {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
          <img 
          src={SearchIcon} alt ="search"
          onClick={() => searchMovie(searchTerm)}
        />
    </div>

    {
    movies?.length > 0 
      ? (
      <div className="container">
        {movies.map((movie) => (
           <MovieCard movie={movie} />
        ))} 
     </div>
      ) : (
      <div className="empty">
        <h2>No movies found</h2>
      </div>
      )
    }

  </div>
  );
}

export default App;
