import React, { useState } from 'react'
import Form from './Form'
import DashBord from './DashBord'
import ListGroup from './ListGroup'


const Home = () => {  

  return ( 
    <div className='dark:bg-gray-800 p-4'>
        <Form />
        <DashBord />
        <ListGroup />
    </div>
  )
}

export default Home