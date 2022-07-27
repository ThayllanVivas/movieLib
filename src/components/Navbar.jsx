import { Link, useNavigate} from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import './Navbar.scss'
import { useState } from 'react';

function Navbar() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        // console.log(search)

        if(!search) return

        navigate(`/search?search=${search}`)
        setSearch('')
    }

    return (
        <div id='navbarContainer'>
            <nav id='navbar'>
                <div id='div1'>
                    <h2>    
                        <BiCameraMovie /> 
                        <Link to='/'>
                            <span>MoviesLib</span>
                        </Link>
                    </h2>
                </div>
                {/* <Outlet /> */}
                <form id='div2' onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        placeholder='Busque um filme' 
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button>
                        <BiSearchAlt2 />
                    </button>
                </form>
            </nav>
        </div>
    )
  }
  
  export default Navbar
  