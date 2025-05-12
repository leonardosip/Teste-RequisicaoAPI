import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import api from "../services/api";
import './usuario.css';

function Usuario() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsuario() {
      try {
        const response = await api.get(`/users/${id}`);
        setUsuario(response.data);
        setLoading(false);
      } catch (error) {
        navigate('/', { replace: true });
      }
    }

    loadUsuario();
  }, [navigate, id]);

  if (loading) {
    return (
      <div className="loading">
        <h1>Carregando os detalhes...</h1>
      </div>
    );
  }

  return (
    <div className="usuario-info">
      <h1>{usuario.name}</h1>
      <p><strong>Usuário:</strong> {usuario.username}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Telefone:</strong> {usuario.phone}</p>
      <p><strong>Website:</strong> <a href={`https://${usuario.website}`} target="_blank" rel="noopener noreferrer">{usuario.website}</a></p>
      <p><strong>Empresa:</strong> {usuario.company?.name}</p>
      <p><strong>Endereço:</strong> {usuario.address?.street}, {usuario.address?.city}</p>

      <div className="area-buttons">
        <button onClick={() => navigate('/')}>Voltar</button>
      </div>
    </div>
  );
}

export default Usuario;