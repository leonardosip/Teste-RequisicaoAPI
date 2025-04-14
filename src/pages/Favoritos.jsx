import './favoritos.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("salvos")
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter ((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('salvos' , JSON.stringify(filtroFilmes))
    }



    return (

        <div>
            <h1> Meus Filmes </h1>

            {filmes.length === 0 && <span className='aviso'> Voce nao possui nenhum filme salvo</span>}

            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id} className='area'>
                            <span className='titulo'> {item.title} </span>

                            <div className='botoes'>
                                <Link to={`/filme/${item.id}`} className='botao1'> Ver Detalhes</Link>
                                <button className='botao2' 
                                onClick={() => excluirFilme(item.id)}>
                                    Excluir
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;