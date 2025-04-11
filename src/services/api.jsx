import axios from 'axios';


//Base da url https://api.themoviedb.org/3/
//Url da API https://api.themoviedb.org/3/movie/popular?api_key=2127cf387a2f25a8301e5d825a366d03&language=pt-BR&page=1

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;