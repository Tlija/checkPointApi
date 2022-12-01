import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { MovieCard } from './MovieCard';

const MovieListe = () => {
  const[first,setfirst]=useState([])
useEffect(() => {
const getUser = async() => { 
  const res =await axios.get('https://jsonplaceholder.typicode.com/users')
            setfirst(res.data)


}
getUser()

  
}, [])

  return (
    <div className='cardss'>
      {first.map(
        (el)=><MovieCard el={el} key={el.id}/>
      )}
    </div>
  )
}

export default MovieListe