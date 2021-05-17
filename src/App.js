/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb'

export default () => {

  const [movieList, setMovieList] = useState([])//

  useEffect(() => {
    const loadAll = async () => {//funcao carregar tudo
      //pegando lista total
      let list = await Tmdb.getHomeList()//
      setMovieList(list)

    }
    loadAll()
  }, [])


  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <div>{item.title}</div>
        ))}
      </section>
    </div>
  )
}