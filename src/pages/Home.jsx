import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import './Home.scss'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

function Home(){
    const [topMovies, setTopMovies] = useState([])
    async function getTopRatedMovies(url){
        const data = await fetch(url).then((resp) => resp.json())

        console.log(data.results)
        setTopMovies(data.results)
    }

    useEffect(() => {
        const url = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(url)
    }, [])

    return (
        <main>
            <div id='title'>
                <h1>Melhores filmes:</h1>
            </div>
            <div id='movieSection'>
                <div className="movie-card">
                    {topMovies && topMovies.map((movie, index) =>{
                        return (
                            <MovieCard movie={movie} key={index}/>
                        )   
                    })}
                </div>
            </div>
        </main>
    )
}

export default Home