/* eslint-disable import/no-anonymous-default-export */

import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import './App.css'


export default () => {

  const [movieList, setMovieList] = useState([])//

  useEffect(() => {
    const loadAll = async () => {//funcao carregar tudo
      //pegando lista total
      let list = await Tmdb.getHomeList()//
      setMovieList(list)
      console.log(list)

    }
    loadAll()
  }, [])


  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))}
      </section>
    </div>
  )
}