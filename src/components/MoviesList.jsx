import { Link } from "react-router-dom"
import React from 'react'

function MoviesList({ movies }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 px-5">
      {movies && movies.map((movie) => {
        const { Poster, Title, imdbID, Year } = movie
        return (
          <li key={imdbID} className="card h-[400px] shadow-2xl flex flex-col mb-5">
            <figure className="object-cover pt-11">
              <img src={Poster} alt={Title} />
            </figure>
            <div className="px-3 text-center">
              <h2 className="text-base font-bold mt-2">{Title}</h2>
              <h2 className="font-medium mb-2">{Year}-year</h2>
            </div>
            <Link className="btn btn-ghost border-green-400 mb-3 w-[280px] m-auto" to={`/movie/${imdbID}`}>Malumot</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default MoviesList