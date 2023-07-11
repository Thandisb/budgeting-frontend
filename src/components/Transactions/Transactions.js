import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import "./Transactions.css";

function Transactions() {

const [transactionsArray, setTransactionsArray] = useState([])


let url = 'https://spontaneous-moxie-4928c2.netlify.app/transactions'
useEffect(() => {
fetchData()
}, [])


  async function fetchData (){
  try {
   let result = await axios.get(`http://localhost:3333/transactions`,
   url = process.env.NODE_ENV === "production" ? "https://budget-project-backend3.onrender.com/transactions" : "localhost:3333"
   )
   setTransactionsArray(result.data)
  } catch (error) {
    
  }
}
function handleSum (){
  let sum = transactionsArray.reduce((total, current)=> total + current.amount, 0)
  return sum
}
  return (
    <div>
      <h2>Bank Account Total: <span style={handleSum() > 100 ? {color: "green"} : handleSum() < 100 ?{color: "red"} : {color:"yellow"}}>{handleSum()}</span></h2>
      <div className='table-container'>
        <table id='transactions'>
          <tbody>
           
            <tr>
              <th>Date</th>
              <th>Transaction</th>
              <th>Amount</th>
            </tr>
            { transactionsArray.map((item)=>{
              return(
                <tr key={item.id}>
                <td> <Link className='transactions-link' to={`/transactions/${item.id}`}> {item.date}</Link></td>
                 <td><Link className='transactions-link' to={`/transactions/${item.id}`}>{item.itemName}</Link></td>
                <td> <Link className='transactions-link' to={`/transactions/${item.id}`}> {item.amount} </Link></td>


                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transactions