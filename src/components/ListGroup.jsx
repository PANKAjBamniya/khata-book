import React, { useContext } from 'react'
import ListItems from './ListItems'
import KhatabookContext from '../contexth/KhatabookContext'

const ListGroup = () => {

  const { transactions } = useContext(KhatabookContext);

  return (
    <div className=' rounded-sm mt-5'>
        <ul className='space-y-2'>
           {
            transactions.map((transaction) => {
                return (
                    <ListItems key={transaction.id} transaction={transaction} />
                )
            })
           }
        </ul>
    </div>
  )
}

export default ListGroup