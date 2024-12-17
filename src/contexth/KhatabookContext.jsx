import { createContext, useReducer, useState } from "react";

const KhatabookContext = createContext();

export const KhatabookProvider = (({children}) => {


  // Reducer funtion
  const khatabookReducer = (( state , action ) => {

  })

  const initialStare = {
    transactions : [{id : 1,text : "Rahul",amount : 1000,}],
    edit : {transactions : {} , isedit :false}
  }

  // Reducer
  const [state , dispatch] = useReducer(khatabookReducer) 

    const[transactions , setTransactions] = useState([])
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
        isedit: true,
      })

    })
    
    const updatedtransactions = ((updatedtranscation) => {
      setTransactions(transactions.map((transaction) => 
        transaction.id === updatedtranscation.id ? 
        updatedtranscation : transaction
      ))
      setEdit({
        transaction: {},
        isedit: true,
      })
    })

    return(
        <KhatabookContext.Provider value={{ transactions , edit ,addTransaction ,removeTransaction ,handleEdit, updatedtransactions }}>
            {children}
        </KhatabookContext.Provider>
    )
})

export default KhatabookContext; 