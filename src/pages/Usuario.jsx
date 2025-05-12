import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import "./usuario.css";

function Usuario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsuario() {
      try {
        const response = await api.get(`/users/${id}`);
        setUsuario(response.data);
        setLoading(false);
      } catch (error) {
        navigate("/", { replace: true });
      }
    }

    loadUsuario();
  }, [id, navigate]);

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

      <div className="user-details">
        <h3>Detalhes de Contato</h3>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Telefone:</strong> {usuario.phone}</p>
        <p><strong>Website:</strong> <a href={`https://${usuario.website}`} target="_blank" rel="noopener noreferrer">{usuario.website}</a></p>
      </div>


      <div className="address">
        <h3>Endereço</h3>
        <p><strong>Rua:</strong> {usuario.address.street}</p>
        <p><strong>Cidade:</strong> {usuario.address.city}</p>
        <p><strong>Código Postal:</strong> {usuario.address.zipcode}</p>
      </div>

      <div className="company">
        <h3>Empresa</h3>
        <p><strong>Nome:</strong> {usuario.company.name}</p>
        <p><strong>Indústria:</strong> {usuario.company.bs}</p>
      </div>

      <div className="back-button">
        <button onClick={() => navigate("/")}>Voltar para a lista</button>
      </div>
    </div>
  );
}

export default Usuario;
