import axios from "axios";

// Base da Url: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=5b5a8215e0bfc6ae42294316f959ec2e&language=pt-BR

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;