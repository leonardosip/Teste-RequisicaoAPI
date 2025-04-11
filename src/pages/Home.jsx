import { useEffect, useState } from "react";
import api from './../services/api'
import {Link} from 'react-router-dom';
import './home.css'


//https://api.themoviedb.org/3/movie/popular?api_key=2127cf387a2f25a8301e5d825a366d03&language=pt-BR&page=1

function Home() {

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true) ;

    useEffect(() => {
        async function loadFilms() {
            const response = await api.get('/movie/popular', {
                params: {
                    api_key: '2127cf387a2f25a8301e5d825a366d03',
                    language: 'pt-BR',
                    page: 1
                }
            }
            )
            // console.log(response.data.results.slice(0,15));
            setFilmes(response.data.results.slice(0, 15));
            setLoading(false);
        }
        loadFilms();
    })





    if(loading){
        return(
            <div className="loading">
                <h2>Carregando Filmes..</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src=
                            {`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
                            alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}> Acessar </Link>
                        </article>
                    )
                })}
            </div>
        </div>

    )

}

export default Home;