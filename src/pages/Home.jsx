import { useEffect, useState } from "react";
import api from './../services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');
      setUsuarios(response.data);
      setLoading(false);
    }

    loadUsers();
  }, []);

  const filteredUsers = usuarios.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando usuários...</h2>
      </div>
    );
  }

  return (
    <div className="container">

     
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Filtrar por Nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

    
      <div className="lista-usuarios">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((usuario) => (
            <article key={usuario.id}>
              <strong>{usuario.name}</strong>
              <p>Email: {usuario.email}</p>
              <p>Telefone: {usuario.phone}</p>
              <Link to={`/usuario/${usuario.id}`} className="link">Exibir mais detalhes</Link>
            </article>
          ))
        ) : (
          <p>Nenhum usuário encontrado</p>
        )}
      </div>
    </div>
  );
}

export default Home;
