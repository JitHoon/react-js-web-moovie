import { useEffect, useState } from "react";
import Movies from "../components/Movies";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  /* 기존 Fetch API 문법
  fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data)); 
  */
  // async, await 비동기식 Fetch API 문법
  const getMovies = async () => {
    const json = await(
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
      ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  // useEffect(()=>{}, []); 1회 동작
  useEffect(() => {getMovies()}, []);

  return <div>
    {
      loading ? (<h1>Loading...</h1>)
      : (<div>
          {movies.map((movie) => (
          <Movies
            key={movie.id}
            // id값을 자식 component로 넘겨주기
            id={movie.id} 
            m_cover_img={movie.medium_cover_image} 
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
          ))}
        </div>)
    }
  </div>
}