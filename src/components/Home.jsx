import React, { useState } from 'react'
import Form from './Form'
import DashBord from './DashBord'
import ListGroup from './ListGroup'


const Home = () => {
  const [transactions , setTransactions] = useState([])

  const removeTransaction = ((id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id))
  })

  const addTransaction = ((text , amount) => {
    const newTransaction = {
      id: crypto.randomUUID(),
      text:text,
      amount:amount
    }
    
    setTransactions([...transactions , newTransaction])
  })

  return ( 
    <div className='dark:bg-gray-800 p-4'>
        <Form addTransaction={addTransaction}/>
        <DashBord/>
        <ListGroup transactions={transactions} removeTransaction={removeTransaction}/>
    </div>
  )
}

export default Home