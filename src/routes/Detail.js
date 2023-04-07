import { useEffect, useState } from "react";
// useParams을 통해 url에 있는 변수 사용 가능
import { useParams } from "react-router-dom";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  // useParams을 통해 url에 있는 id 가져오기
  const { id } = useParams();
  const getDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {getDetails()}, []);
  
  return <div>
      {
        loading ? (<h1>Loading...</h1>) : 
        (<div>
          {details.title}
        </div>)
      }
  </div>
}