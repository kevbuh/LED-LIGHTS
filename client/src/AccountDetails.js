import React from 'react'
import './AccountDetails.css'

function AccountDetails() {
  return (
    <section className="account">
      <div className="account__details">
        <span>ACCOUNT DETAILS</span>
      </div>
      <div className="account__bottom">
        <div className="account_left">
        <div className="account__name">
          <span> Kevin Buhler</span>
        </div>
        <div className="account__email">
          <span>kevinbuhler@gmail.com</span>
        </div>
        <div className="account__addressTitle">
          <span> Primary Address</span>
        </div>
        <div className="account__email">
          <span>No addresses currently on file</span>
          <span>View addresses (0)</span>
        </div>
      </div>
      <div className="account__right">
        <div className="account__history">
        <span>Order History</span>
        </div>
        <div>
          <span>You haven't placed any orders yet</span>
        </div>
      </div>

      </div>
      
    </section>
  )
}

export default AccountDetails
