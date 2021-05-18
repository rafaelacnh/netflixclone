/* eslint-disable import/no-anonymous-default-export */

import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'
import './App.css'


export default () => {

  const [movieList, setMovieList] = useState([])//
  const [featureData, setFeatureData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {//funcao carregar tudo
      //pegando lista total
      let list = await Tmdb.getHomeList()//
      setMovieList(list)
      console.log(list)

      //pegando featuredMovie
      let originals = list.filter(item => item.slug === 'originals')//usando filter, aqui pegamos o item do array que tem valor 'originals' na propriedade slug
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))//gerando um valor aleatorio, com metodo math.random e arredondando p/ baixo e multiplicando pelo tamanho lista -1
      let chosen = originals[0].items.results[randomChosen]//pegando filme específico
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      console.log(chosen)
      console.log(chosenInfo)
      setFeatureData(chosenInfo)
    }
    loadAll()

  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);


  return (
    <div className="page">
      <Header black={blackHeader}/>
      {featureData && <FeaturedMovie item={featureData}/>}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))}
      </section>
      </div>
   )
}