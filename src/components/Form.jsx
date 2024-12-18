import React,{useContext, useEffect, useState} from 'react'
import KhatabookContext from '../contexth/KhatabookContext'

const Form = () => {

  const {addTransaction , edit ,updatedtransactions} = useContext(KhatabookContext);

  const [text, setText] = useState('')
  const [amount, setAmount] = useState()

  useEffect (() => {
    setText(edit.transaction.text)
    setAmount(edit.transaction.amount)
  },[edit])
    
  const handleSubmit = ((e) => {
    e.preventDefault()

    edit.isedit ? updatedtransactions({
      id:edit.transaction.id,
      text,
      amount:parseInt(amount)
    }) :
    addTransaction(text , amount)


    setText("")
    setAmount("")
  })

  return (
    <div className='bg-slate-200 p-3 dark:bg-gray-700'>
            <form 
            onSubmit={handleSubmit}
            className='flex flex-col items-center space-y-2'>
              <h1 className='dark:text-white font-bold text-[3em]'>Enter Your Transactions</h1>
                <input
                value={text}
                onChange={(e) => {
                  setText(e.target.value) 
                }}
                 type="text" placeholder='Enter Transaction' className='w-full py-2 px-4 rounded-sm outline-none'/>
                <input 
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value)
                }}
                type="number" placeholder='Enter Amount' className='w-full py-2 px-4 rounded-sm outline-none'/>
                <button className='w-full bg-green-700 py-2 text-white rounded-sm hover:bg-green-600'>
                  {edit.isedit ? "Update" : "Submit" }
                  </button>
            </form>
    </div>
  )
}

export default Form