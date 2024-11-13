import React from 'react'
import ListItems from './ListItems'

const ListGroup = ({transactions, removeTransaction ,handleEdit}) => {
  return (
    <div className=' rounded-sm mt-5'>
        <ul className='space-y-2'>
           {
            transactions.map((transaction) => {
                return (
                    <ListItems key={transaction.id} transaction={transaction} removeTransaction={removeTransaction} handleEdit={handleEdit}/>
                )
            })
           }
        </ul>
    </div>
  )
}

export default ListGroup