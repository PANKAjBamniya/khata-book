import React from 'react'

const ListItems = ({items,removeTransaction}) => {
  return ( 
    <li className='text-lg font-bold mb-2 flex items-center justify-between bg-slate-200 dark:bg-gray-700 md:p-6 p-4'>
        <div className='dark:text-white'>
            <p >Expense : {items.text}</p>
            <h1>Amount : {items.amount}</h1>
        </div>
        <div className='flex  items-center space-x-2'>
            <button className='py-1 px-4 bg-yellow-600 rounded-sm text-white'>Edit</button>
            <button 
            onClick={() => {
              removeTransaction(items.id)
            }}
            className='py-1 px-4 bg-red-700 rounded-sm text-white'>Delete</button>
        </div>
    </li>
  )
}

export default ListItems