/* eslint-disable import/no-anonymous-default-export */
import React , {useEffect} from 'react';
import Tmdb from './Tmdb'

export default () => {

    useEffect(() => {
    const loadAll = async () => {//funcao carregar tudo
      //pegando lista total
      let list = await Tmdb.getHomeList()//
      console.log(list);
    }
    loadAll()
  }, [])


  return (
    <div>
      <h1>OLá Mundo!</h1>
    </div>
  );
}