import React from 'react'
import {Link} from 'react-router-dom'

import "./Nav.css"

function Nav() {
  return (
    <header>
        <nav>
            <ul>
                <li className='left'>
                    <Link to="/transactions">Budget Model App</Link>
                </li>
                <li className='right'>
                    <Link to="/transactions/new">New Transaction</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav