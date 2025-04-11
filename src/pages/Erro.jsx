import { Link } from "react-router-dom";
import './erro.css'

function Erro (){
    return (
        <div className="not-found">

            <h1> 404 </h1>

            <div className="centro">
            <h2>Pagina nao encontrada</h2>
            <Link to="/" className="linq">Veja todos os filmes</Link>
            </div>           
        </div>
    )
}
export default Erro;