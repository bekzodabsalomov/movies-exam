import { useFetch } from "../hooks/UseFetch"
import MoviesList from "../components/MoviesList"
import { useState } from "react";

function Home() {
    const [item, setItem] = useState('Spider Man')
    const { data: movies, isPending, error } = useFetch(`https://www.omdbapi.com/?s=${item}&apikey=bb1151cd`)
    return (
        <div>
            <div className="flex items-center gap-5 justify-between">
                <div>
                    <h1 className="mb-2 font-medium text-center">Barcha kinolar shu yerda 🧑‍💻</h1>
                    <input
                        onChange={(e) => setItem(e.target.value)}
                        className="input input-bordered border-green-300 w-full max-w-xs mb-10" type="text"
                        placeholder="kino qidirng" value={item}
                    />
                </div>
                <ul className="menu menu-horizontal bg-base-200 rounded-box btn input-bordered border-green-300 items-center">
                    <li>
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="./page/Movie">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </a>
                    </li>
                </ul>
                <div className="dropdown dropdown-right">
                    <label tabIndex={0} className="btn input-bordered border-green-300 m-1">Kategoryalar</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Detektiv 🕵️‍♀️</a></li>
                        <li><a>Fantastik 🦸</a></li>
                        <li><a>Horror 🧛‍♀️</a></li>
                        <li><a>Romantik ❤️</a></li>
                    </ul>
                </div>
            </div>
            {movies && <MoviesList movies={movies && movies.Search} />}
        </div>
    )
}

export default Home