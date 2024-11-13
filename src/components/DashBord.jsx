import React from 'react'

const DashBord = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-between bg-slate-200 p-6 md:px-10 dark:bg-gray-700 rounded-sm gap-6'>
  <div className='bg-emerald-600 p-6 md:p-10 rounded-lg w-full md:w-auto'>
    <h1 className='text-white font-serif text-2xl md:text-4xl'>Total Salary</h1>
    <h2 className='text-[2em] md:text-[4em] text-white'>1000000</h2>
  </div>
  <div className='bg-yellow-600 p-6 md:p-10 rounded-lg w-full md:w-auto'>
    <h1 className='text-white font-serif text-2xl md:text-4xl'>Total Expense</h1>
    <h2 className='text-[2em] md:text-[4em] text-white'>1000000</h2>
  </div>
  <div className='bg-blue-600 p-6 md:p-10 rounded-lg w-full md:w-auto'>
    <h1 className='text-white font-serif text-2xl md:text-4xl'>Total Balance</h1>
    <h2 className='text-[2em] md:text-[4em] text-white'>1000000</h2>
  </div>
</div>

  )
}

export default DashBord