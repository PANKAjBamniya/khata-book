import React,{useState} from 'react'

const Form = ({ addTransaction }) => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState()
    
  const hadleSubmit = ((e) => {
    e.preventDefault()
    addTransaction(text , +amount)

    setText("")
    setAmount("")
  })

  return (
    <div className='bg-slate-200 p-10 dark:bg-gray-700'>
            <form 
            onSubmit={hadleSubmit}
            className='flex flex-col items-center space-y-2'>
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
                <button className='w-full bg-green-700 py-2 text-white rounded-sm hover:bg-green-600'>Submit</button>
            </form>
    </div>
  )
}

export default Form