import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import './EditTransaction.css'

function EditTransaction() {
      const { id } = useParams();
      const navigate = useNavigate();

      const [categoryInput, setCategoryInput] = useState("")
      const [dateInput, setDateInput] = useState("")
      const [amountInput, setAmountInput] = useState(0)
      const [itemNameInput, setItemNameInput] = useState("")
      const [paymentForInput, setPaymentForInput] = useState("")
  
  
  useEffect(() => {
    handleFetchDataForEdit()
  }, [])
  
  async function handleFetchDataForEdit(){
    try {
        let {data} = await axios.get(`http://localhost:3333/transactions/transaction/${id}`,
         //    url = process.env.NODE_ENV === "production" ? "https://budget-project-backend3.onrender.com/transactions" : "localhost:3333"
         )
        console.log(data)
        const {
            amount,
            category,
            date,
            itemName,
            paymentFor,
        } =data;


        setCategoryInput(category)
        setItemNameInput(itemName)
        setAmountInput(amount)
        setDateInput(date)
        setPaymentForInput(paymentFor)

    } catch (e) {
        console.log(e)
    }
  }
  // let url = ""
  async function handleOnSubmitUpdate(event){
         event.preventDefault()
         try {
            let result = await axios.put(`http://localhost:3333/transactions/update-item-by-id/${id}`,{
                amount: amountInput,
                category: categoryInput,
                date: dateInput,
                itemName: itemNameInput,
                paymentFor: paymentForInput,
            },
           // url = process.env.NODE_ENV === "production" ? "https://budget-project-backend3.onrender.com/transactions" : "localhost:3333"
           )
            alert("Budget list Updated")
            navigate("/transactions")
            const {
                amount: newAmount,
                category: newCategory,
                date: newDate,
                itemName: newItemName,
                paymentFor: newPaymentFor
            } = result.data
            setAmountInput(newAmount);
            setCategoryInput(newCategory);
            setDateInput(newDate);
            setItemNameInput(newItemName);
            setPaymentForInput(newPaymentFor);
            

         } catch (e) {
            console.log(e.response)
         }

  }
    return (
    <div className='edit-form-container'>
        <div>
            <h2> Edit Budget Form </h2>
        </div>
        <div className='edit-container-form'>
            <form onSubmit={handleOnSubmitUpdate}>
                <div className='edit-container-input'>
                    <label>category</label>
                    <select id='category' onChange={(e)=>setCategoryInput(e.target.value)}>
                    <option >{categoryInput}</option>
                    <option value="income">Income</option>
                    <option value="bills">Bills</option>
                    <option value="housing">Housing</option>
                    <option value="food">Food</option>
                    </select>
                </div>
                <div className='edit-container-input'>
                    <label>Date</label>
                    <input type='text'
                    value={dateInput}
                    onChange={(e)=>setDateInput(e.target.value)}/>
                </div>
                <div className='edit-container-input'>
                    <label>Transaction Name</label>
                    <input type='text'
                    value={itemNameInput}
                    onChange={(e)=>setItemNameInput(e.target.value)}/>
                </div>
                <div className='edit-container-input'>
                    <label>Payment for:</label>
                    <input type='text'
                    value={paymentForInput}
                    onChange={(e)=>setPaymentForInput(e.target.value)}/>
                </div>
                <div className='edit-container-input'>
                    <label>Amount</label>
                    <input type='number'
                    value={amountInput}
                    onChange={(e)=>setAmountInput(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default EditTransaction