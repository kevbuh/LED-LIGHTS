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
          < img src="https://i.pinimg.com/564x/d1/1b/2a/d11b2a5c85c78690f1d6123e4af52769.jpg" alt="k" />
          </div>
        </Link>
        
        <Link to="/shop">
          <div className="featured__pic">
            <img src="https://i.pinimg.com/564x/ae/49/59/ae4959b9a83eb02ed43e32bb31ad7708.jpg" alt="k" />
          </div>
        </Link>
        
        <Link to="/shop">
          <div className="featured__pic">
            <img src="https://i.pinimg.com/564x/ac/76/2d/ac762dcbb4f1b3a7f2b09a98a001bec1.jpg" alt="k" />
          </div>
        </Link>
        </div>
    </div>
      
    
  )
}

export default Featured
 