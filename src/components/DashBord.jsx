import React, { useContext } from 'react'
import KhatabookContext from '../contexth/KhatabookContext';

const DashBord = () => {

  const {transactions} = useContext(KhatabookContext);

  const balance = transactions.reduce((p, c) => p + Number(c.amount), 0);

  const income = transactions
    .filter((transaction) => Number(transaction.amount) > 0)
    .reduce((p, c) => p + Number(c.amount), 0);

  const expense = transactions
    .filter((transaction) => Number(transaction.amount) < 0)
    .reduce((p, c) => p + Number(c.amount), 0);
    
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-between bg-slate-200 p-6 md:px-10 dark:bg-gray-700 rounded-sm gap-6'>
  <div className='bg-emerald-600 p-6 md:p-10 rounded-lg w-full md:w-auto'>
    <h1 className='text-white font-serif text-2xl md:text-4xl'>Total Income :</h1>
    <h2 className='text-[2em] md:text-[4em] text-white'>{income}</h2>
  </div>
  <div className='bg-yellow-600 p-6 md:p-10 rounded-lg w-full md:w-auto'>
    <h1 className='text-white font-serif text-2xl md:text-4xl'>Total Expense :</h1>
    <h2 className='text-[2em] md:text-[4em] text-white'>{expense}</h2>
  </div>
  <div className='bg-blue-600 p-6 md:p-10 rounded-lg w-full md:w-auto'>
    <h1 className='text-white font-serif text-2xl md:text-4xl'>Total Balance :</h1>
    <h2 className='text-[2em] md:text-[4em] text-white'>{balance}</h2>
  </div>
</div>

  )
}

export default DashBord