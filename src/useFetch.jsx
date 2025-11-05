// import { useState,useEffect } from 'react';
// const useFetch = (jsonFile) => {
//     const [Movies,setMovies]=useState(null); 
//     useEffect(()=>{                
//         setTimeout(() => {
                           
//     fetch(jsonFile)
//     .then((response)=> {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('response was not ok');
//         }
//     })
//     .then((data)=>setMovies(data))
//     .catch((error)=>console.log(error));
//       }, 300);   
//     },[]); 
//     return [Movies,setMovies]
// };
// export default useFetch;    