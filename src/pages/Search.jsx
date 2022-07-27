import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

function Search(){
    const [searchParams] = useSearchParams()
    const search = searchParams.get('search')

    const [movies, setMovies] = useState([])

    async function getMovies(url){
        const data = await fetch(url).then((resp) => resp.json())
        // const result = new Array
        // await data.results.map((movie) => {
        //     let title = movie.title.split(' ')
        //     title.map((tit) => {
        //         if(tit.toLowerCase() == search.toLowerCase()){
        //             result.push(movie)
        //             // console.log('ABAIXO --------------')
        //         }
        //         console.log('tit', tit.toLowerCase())
        //     })
        //     // console.log('title', title)
        // })
        // console.log(result)

        // console.log(data.results)
        setMovies(data.results)
    }

    useEffect(() => {
        const url = `${searchURL}?${apiKey}&query=${search}`
        getMovies(url)
    }, [search])
    

    return (
        <main>
            <div id='title'>
                <h1>Resultado(s) para: {search}</h1>
            </div>
            <div id='movieSection'>
                <div className="movie-card">
                    {movies && movies.map((movie, index) =>{
                        return (
                            <MovieCard movie={movie} key={index}/>
                        )   
                    })}
                </div>
            </div>
        </main>
        // <p>{search}</p>
    )
}

export default Search