import { Link } from "react-router-dom"
import ColorContainer from "../components/ColorContainer"

function Navbar() {
    return (
        <nav className="bg-sky-900">
            <div className="align-element flex justify-between items-center py-5">
                <Link to='/' className="text-3xl cursor-pointer font-medium text-red-800">Movie<span className="text-green-400">HD</span></Link>
                <div className="text-4xl">
                    <ColorContainer />
                </div>
            </div>
        </nav>
    )
}

export default Navbar   