const API_KEY = 'f94be91cc96a3ba94df571f6bae6f88d'
const API_BASE = 'https://api.themoviedb.org/3'


//criando função assíncrona que passando endpoint como parametro, faz requisição na base de dados da api do Tmdb e retorna json
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);//fazendo requisição
    const json = await req.json//pegando o json dessa requisição
    return json;//return json
}