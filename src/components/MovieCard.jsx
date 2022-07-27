const imageURL = import.meta.env.VITE_IMG
import '../pages/Home.scss'
import {FaStar} from 'react-icons/fa'

function MovieCard({movie}){
    return(
        <div className='movie'>
            <img src={`${imageURL}${movie.poster_path}`} />
            <h4 className='movieTitle'>{movie.title}</h4>
            <span className="rate"><FaStar  />{movie.vote_average}</span>
            <a href={`/movie/${movie.id}`}>Detalhes</a>
        </div>
    )
}

export default MovieCard