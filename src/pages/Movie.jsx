import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './Movie.scss'
import {FaStar} from 'react-icons/fa'
import {BsWallet2, BsGraphUp, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const imageURL = import.meta.env.VITE_IMG

function Movie(){
    const {id} = useParams()
    const [movie, setMovie] = useState([])

    function formatCurrency(number = 1000){
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    async function getMovieInfo(url){
        const data = await fetch(url).then((resp) => resp.json())
        console.log(data)
        setMovie(data)
    }

    useEffect(() => {
        const url = `${moviesURL}${id}?${apiKey}`
        getMovieInfo(url)
    }, [])


    return (
        <main id='container'>
            {movie && (
                <div id='movieInfo'>
                    <div>
                        <img src={`${imageURL}${movie.poster_path}`} />
                    </div>
                    <div id='movieTitle'>
                        <h4>{movie.title}</h4>
                    </div>
                    <div id="rate"><FaStar  />
                        {movie.vote_average}
                    </div>
                    <div id='movie_description'>
                        {movie.tagline}
                    </div>
                    <div className='movie_info'><BsWallet2 /> 
                        Orçamento: {formatCurrency(movie.budget)}
                    </div>
                    <div className='movie_info'>
                        <BsGraphUp /> 
                        Receita: {formatCurrency(movie.revenue)}
                    </div>
                    <div className='movie_info'><BsHourglassSplit />
                        Duração: {movie.runtime} minutos
                    </div>
                    <div className='movie_info'><BsFillFileEarmarkTextFill /> 
                        Descrição: {movie.overview}
                    </div>
                </div>
            )}
        </main>
    )
}

export default Movie