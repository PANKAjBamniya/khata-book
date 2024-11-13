import React from 'react'

const ListItems = ({transaction,removeTransaction,handleEdit}) => {
  return ( 
    <li className='text-lg font-bold mb-2 flex items-center justify-between bg-slate-200 dark:bg-gray-700 md:p-6 p-4'>
        <div className='dark:text-white'>
            <p >Expense : {transaction.text}</p>
            <h1>Amount : {transaction.amount}</h1>
        </div>
        <div className='flex  items-center space-x-2'>
            <button 
            onClick={ () => {
              handleEdit(transaction)
            }}
            className='py-1 px-4 bg-yellow-600 rounded-sm text-white'>Edit</button>
            <button 
            onClick={() => {
              removeTransaction(transaction.id)
            }}
            className='py-1 px-4 bg-red-700 rounded-sm text-white'>Delete</button>
        </div>
    </li>
  )
}

export default ListItems