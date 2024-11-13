import React from 'react'
import ListItems from './ListItems'

const ListGroup = ({transactions, removeTransaction}) => {
  return (
    <div className=' rounded-sm mt-5'>
        <ul className='space-y-2'>
           {
            transactions.map((items) => {
                return (
                    <ListItems key={items.id} items={items} removeTransaction={removeTransaction}/>
                )
            })
           }
        </ul>
    </div>
  )
}

export default ListGroup