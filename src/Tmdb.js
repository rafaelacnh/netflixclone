/* eslint-disable import/no-anonymous-default-export */
const API_KEY = 'f94be91cc96a3ba94df571f6bae6f88d'
const API_BASE = 'https://api.themoviedb.org/3'


//criando função assíncrona que passando endpoint como parametro, faz requisição na base de dados da api do Tmdb e retorna json
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);//fazendo requisição
    const json = await req.json//pegando o json dessa requisição
    return json;//return json
}

export default {

    getHomeList: async () => {
        return [
            {
                slug: 'originais',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch(`/discover/movie?with_genres=99?language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }
}