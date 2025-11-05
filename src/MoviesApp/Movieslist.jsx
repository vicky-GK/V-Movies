import Movie from './Movies.jsx';
import styles from './Movies.module.css';
import loading from '../loadingAssests/Video Cam.gif'
import data from '/src/MoviesApp/moviesfile.json';
import { useEffect, useState } from 'react';
function Movieslist() {
   const [movies,setMovies]=useState(null);
   useEffect(() => {
    setTimeout(() => setMovies(data.movies), 500);
  }, []);

if(!movies){
    return(
        <img src={loading} alt="Loading..." />

    );
}

function deleteMovie(id){
    const newMovie=movies.filter((item)=>item.id!=id);
     setMovies(newMovie);
}    

//const highRatedMovies=movies.filter((item)=>(item.rating<4.9 ||item.rating=="N/A"));
//movies.sort((a,b)=>(a.rating-b.rating));
    const movieList=movies.map((item)=>(<Movie key={item.id}  id={item.id} name ={item.name} description={item.description} image={item.image} rating={item.rating} watch={item.watch} delete ={deleteMovie}/>));
    return (
          <main className="container">
        <section className={styles.movieContainer}>
            {movieList}
        </section>
        </main>
    );
}
export default Movieslist;