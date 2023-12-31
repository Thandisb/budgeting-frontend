import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

import "./Transaction.css"

function Transaction() {
 
 const { id } = useParams()
 

 const [data, setData] = useState(null)

 const navigate = useNavigate()

 useEffect(() => {
   fetchData()
 }, [])
 
 
 

async function fetchData(){
    try {
        const url = process.env.NODE_ENV === "production" ? 
       "https://budget-project-backend3.onrender.com/transactions" : 
       `http://localhost:3333/transactions/transaction/${id}`
        let result = await axios.get(url)
        setData(result.data)
    } catch (e) {
        console.log(e.response)
        
    }
 }
function handleNavigateBack(){
    navigate("/transactions")
}
async function handleDeleteItemById(id){
    try {
        const url = process.env.NODE_ENV === "production" ? 
        "https://budget-project-backend3.onrender.com/transactions" : 
        `http://localhost:3333/transactions/delete-item-by-id/${id}`
        await axios.delete(url)
        navigate("/transactions")
    } catch (e) {
        console.log(e)
        
    }
}

function handlesEdit(id){
    navigate(`/transactions/${id}/edit`)
}
 
 
 
    return (
    <div className='transaction-container'>
        <div className='transaction-container-content'>
            <p>Category: {data?.category}</p>
            <p>Date: {data?.date}</p>
            <p>Transaction Name: {data?.itemName}</p>
            <p> Payment for: {data?.paymentFor}</p>
            <p>Transaction Amount: {data?.amount}</p>
            <div className='transaction-container-navigation'>
                <ul>
                    <li>
                        <button onClick={handleNavigateBack}>Back to Transactions</button>
                    </li>
                    <li>
                        <button onClick={()=>handlesEdit(id)}>Edit Budget</button>
                    </li>
                    <li>
                        <button onClick={()=>handleDeleteItemById(id)}> Delete Item</button>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Transaction