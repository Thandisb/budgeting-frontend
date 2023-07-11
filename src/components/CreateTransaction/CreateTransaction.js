import {useNavigate} from 'react-router-dom'
import React, {useState} from 'react'
import axios from 'axios'

import './CreateTransaction.css'

function CreateTransaction() {
  const navigate=useNavigate()
  const [data, setData] = useState({
                amount: 0,
                category: "",
                date: "",
                itemName: "",
                paymentFor: "",
  })

  let url = "https://spontaneous-moxie-4928c2.netlify.app/transactions"
  async function handleSubmit(event){
    event.preventDefault()
    try {
      await axios.post(`http://localhost:3333/transactions/create-transaction`,{
        ...data,
      },
      url = process.env.NODE_ENV === "production" ? "https://budget-project-backend3.onrender.com/transactions" : "localhost:3333"
     )
      alert("New transaction added!!")
      navigate("/transactions")
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className='new-form-container'>
    <div>
        <h2> New Budget Form </h2>
    </div>
    <div className='new-container-form'>
        <form onSubmit={handleSubmit}>
            <div className='new-container-input'>
                <label>category</label>
                <select id='category' onChange={(e)=>setData({...data, category: e.target.value})}>
                <option >{data.category}</option>
                <option value="income">Income</option>
                <option value="bills">Bills</option>
                <option value="housing">Housing</option>
                <option value="food">Food</option>
                </select>
            </div>
            <div className='new-container-input'>
                <label>Date</label>
                <input type='text'
                value={data.date}
                onChange={(e)=>setData({...data, date: e.target.value})}/>
            </div>
            <div className='new-container-input'>
                <label>Transaction Name</label>
                <input type='text'
                value={data.itemName}
                onChange={(e)=>setData({...data, itemName: e.target.value})}/>
            </div>
            <div className='new-container-input'>
                <label>Payment for:</label>
                <input type='text'
                value={data.paymentFor}
                onChange={(e)=>setData({...data, paymentFor: e.target.value})}/>
            </div>
            <div className='new-container-input'>
                <label>Amount</label>
                <input type='number'
                value={data.amount}
                onChange={(e)=>setData({...data, amount: e.target.value})}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
</div>
  )
}


export default CreateTransaction