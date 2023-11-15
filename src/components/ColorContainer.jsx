import { FaSun, FaMoon } from "react-icons/fa6"
import { useThemeContext } from '../hooks/useThemeContext'

function ColorContainer() {
    const { theme, changeTheme } = useThemeContext()

    const setNewTheme = () => {
        const newTheme = theme === 'halloween' ? '' : 'halloween';
        changeTheme(newTheme)
        document.documentElement.setAttribute('data-theme', theme)
    };
    return (
        <div className='align-top my-5 flex justify-end items-center hover:'>
             <a className="w-6"  href="https://www.instagram.com/beka.2nite/">
            <img  src="https://www.unipile.com/wp-content/uploads/2022/09/logo_instagram.png" alt="" /> 
            </a>
          
            <a className="w-6 ml-5"  href="https://github.com/bekzodabsalomov">
            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />
            </a>
          
            <a className="w-6 ml-5 mr-5"  href="https://www.youtube.com/@akhrorweb">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png" alt="" />
            </a>
        
            <button onClick={setNewTheme} className='text-2xl cursor-pointer'>
                {theme === 'light' ? <FaSun /> : <FaMoon />}
            </button>
            <button className="btn btn-primary ml-16">Login</button>
            <button className="btn btn-info ml-3">SignUP</button>
        </div>
    )
}

export default ColorContainer