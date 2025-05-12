import { useEffect, useState } from "react";
import api from './../services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get('/users');
        setUsuarios(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        setLoading(false);
      }
    }

    loadUsers();
  }, []); 

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando usuários...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-usuarios">
        {usuarios.map((usuario) => (
          <article key={usuario.id}>
            <strong>{usuario.name}</strong>
            <p>Email: {usuario.email}</p>
            <p>Telefone: {usuario.phone}</p>
            <Link to={`/usuario/${usuario.id}`} className="link">Exibir mais detalhes</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;