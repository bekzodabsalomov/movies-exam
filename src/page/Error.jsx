import { NavLink, useRouteError } from "react-router-dom"

function Error() {
    const error = useRouteError()
    return (
        <main className="h-screen grid place-content-center text-center">
            <h1 className="text-7xl mb-5">404</h1>
            <p className="text-3xl mb-5">Saxifa topilmadi</p>
            <NavLink className="btn btn-outline btn-neutral" to="/">Home Page</NavLink>
        </main>
    )
}

export default Error