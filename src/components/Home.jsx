import React, { useState } from 'react'
import Form from './Form'
import DashBord from './DashBord'
import ListGroup from './ListGroup'


const Home = () => {
  const [transactions , setTransactions] = useState([])
  const [edit , setEdit ] = useState({
    transaction: {} ,
    isedit : false , 
  })

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

  const handleEdit = ((transaction) => {
 
    setEdit({
      transaction: transaction,
      isedit: true
    })
  })
  return ( 
    <div className='dark:bg-gray-800 p-4'>
        <Form addTransaction={addTransaction} edit={edit}/>
        <DashBord/>
        <ListGroup transactions={transactions} removeTransaction={removeTransaction} handleEdit={handleEdit}/>
    </div>
  )
}

export default Home