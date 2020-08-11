import React from 'react'
import './Featured.css'
import { Link } from 'react-router-dom';

function Featured() {
  return (
    <div className="featured__all">
      
        <div className="featured__title">
          Photos:
        </div>
      
      <div className="featured__pics">
        <Link to="/shop">
          <div className="featured__pic">
            <img src="https://i.pinimg.com/564x/49/8a/3b/498a3bde1158d514df494d86a3bc1ab2.jpg" alt="k" />
          </div>

        </Link>

        <Link to="/shop">
          <div className="featured__pic">
          < img src="https://images.unsplash.com/photo-1583267926025-393ef3e5f878?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="k" />
          </div>
        </Link>
        
        <Link to="/shop">
          <div className="featured__pic">
            <img src="https://i.pinimg.com/564x/ae/49/59/ae4959b9a83eb02ed43e32bb31ad7708.jpg" alt="k" />
          </div>
        </Link>
        
        <Link to="/shop">
          <div className="featured__pic">
            <img src="https://images.unsplash.com/photo-1558249579-fde0d755f0b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="k" />
          </div>
        </Link>
        </div>
    </div>
      
    
  )
}

export default Featured
 