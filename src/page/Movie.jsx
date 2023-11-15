import { useParams, NavLink } from "react-router-dom"
import { useFetch } from "../hooks/UseFetch"

function Movie() {
  const { imdbID } = useParams()
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=2b8d4e56`
  const { data, isPending, error } = useFetch(url)
  if (data === null) {
    return (
      <div>
        <h1 className="text-center text-3xl font-medium text-green-400">Kutib Turing ...  </h1>
      </div>
    );
  }

  const { Poster, Title, Year, Awards, Genre, Actors, Language, Country, } = data
  return (
    <div className="card-list-items">
      {data && <>
        <img className="rounded-xl" src={Poster} alt={Title} height="300" width="300" />
        <div className="card-texts">
          <h2 className="text-xl font-bold mb-4 text-green-400">{Title}</h2>
          <p className="mb-5 font-medium">
            <span className="font-medium text-green-400">Yil: </span>
            {Year}-y
          </p>
          <p className="mb-5 font-medium">
            <span className="font-medium text-green-400">Janr: </span>
            {Genre}
          </p>
          <p className="mb-5 font-medium">
            <span className="font-medium text-green-400">Aktors: </span>
            {Actors}
          </p>
          <p className="mb-5 font-medium">
            <span className="font-medium text-green-400">Til: </span>
            {Language}
          </p>
          <p className="mb-5 font-medium">
            <span className="font-medium text-green-400">Davlat: </span>
            {Country}
          </p>
          <p className="mb-5 font-medium">
            <span className="font-medium text-green-400">Award: </span>
            {Awards}
          </p>
          <NavLink className="card-btn btn btn-ghost border-green-400" to="/">Movies-ga Qaytish</NavLink>
        </div>
      </>}
    </div>
  )
}

export default Movie