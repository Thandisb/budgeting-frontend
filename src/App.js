import {BrowserRouter as Router, Routes, Route}from 'react-router-dom'
import Transactions from './components/Transactions/Transactions'
import  Transaction from './components/Transaction/Transaction'
import EditTransaction from './components/EditTransaction/EditTransaction'
import CreateTransaction from './components/CreateTransaction/CreateTransaction'
import Nav from './components/Nav/Nav'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/transactions/new' element={<CreateTransaction />} />
          <Route path='/transactions/:id' element={<Transaction />} />
          <Route path='/transactions/:id/edit' element={<EditTransaction />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
