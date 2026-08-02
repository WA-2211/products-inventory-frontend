import React from 'react'
import {Link} from 'react-router'

function Navbar() {
  return (
    <div>
        <nav>
            <Link to= '/' >Home</Link>
            <Link to= '/products' >All Products</Link>
            <Link to= '/products/create'>Create Product</Link>
        </nav>
    </div>
  )
}

export default Navbar