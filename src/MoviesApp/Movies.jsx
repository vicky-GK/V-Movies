import { useEffect, useState } from "react";
import styles from "./Movies.module.css";

function Movies(props){
  // useEffect(()=>{ console.log("use effect 1"); }, []);
  const [watch, setWatch] = useState(false);

function watchMovie(){
  if (props.watch) {
    alert("Kindly Watch in Brave to Avoid Ads \nEnjoy your movie!");
    window.open(props.watch, "_blank", "noopener,noreferrer");
  }
  setWatch(true);
}

            if(props.rating==="N/A"){
                <p>This movie is not available for watching.</p>
            }
  return (
    <article className={styles.movieCard}>
      <img className={styles.poster} src={props.image} alt={`${props.name} Poster`} />
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{props.name}</h3>
        <p className={styles.desc}>{props.description}</p>
        <div className={styles.meta}>
          <span className={styles.rating}>⭐ {props.rating ?? "NA"}</span>
          <p className={styles.watch}>{watch ? "Continue Watching" : " Start Watching"}</p>
        </div>

        <div className={styles.btnRow}>
          {props.rating!=="N/A" && <button onClick={watchMovie} className={`${styles.button} ${styles.cta}`}>Watch Now</button>}
          <button onClick={()=>props.delete(props.id)} className={`${styles.button} ${styles.ghost}`}>Delete</button>
        </div>
      </div>
    </article>
  );
}
export default Movies;
