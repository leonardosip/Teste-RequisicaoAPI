import './favoritos.css'
import { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';


function Favoritos(){

    const [filmes , setFilmes ] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("salvos")
        setFilmes (JSON.parse(minhaLista) || [])
    }, [])



    return(

        <div>
            <h1> Meus Filmes </h1>

            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id} className='area'>
                            <span className='titulo'> {item.title} </span>

                            <div className='botoes'>
                                <Link to={`/filme/${item.id}`} className='botao1'> Ver Detalhes</Link>
                                <button className='botao2'> Excluir </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;