import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import api from "../services/api";
import './filme.css'


function Usuario() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '2127cf387a2f25a8301e5d825a366d03',
                    language: 'pt-BR',
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    navigate('/' , {replace : true })
                    return;
                })
        }

        loadFilme();

        return () => {

        }

    }, [navigate , id])


    function salvarFilme(){
        const minhaLista = localStorage.getItem("salvos")

        let filmesSalvos =JSON.parse(minhaLista) || [];

        const hasFilme = 
        filmesSalvos.some((filmesSalvos) =>  
            filmesSalvos.id === filme.id)

        if(hasFilme){
            alert('Esse filme ja esta na lista');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('salvos' , JSON.stringify(filmesSalvos));
        alert("FILME SALVO COM SUCESSO")
    }


    if (loading) {
        return (
            <div className="loading">
                <h1>Carregando os detalhes...</h1>
            </div>
        )
    }


    return (
        <div className="filme-info">

            <h1>{filme.title}</h1>
            <img src=
                {`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
                alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <br />
            <strong> Avaliacao : {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}> Salvar </button>
                <button>
                    <a target="blank" 
                    rel="external" 
                    href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>

        </div>

    )

}

export default Usuario;