import React from 'react'
import { useSelector } from 'react-redux';
const About = () => {
    const {count} = useSelector((state)=>state.counter)
  return (
    <div className='container'>
        <h2>Data From Redux{count}</h2>    
    </div>
  )
}

export default About