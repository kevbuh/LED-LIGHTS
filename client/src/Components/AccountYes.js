import React from "react";

function AccountYes() {
  return (
    <section>
      <div className="account__bottom">
        <div className="account_left">
          <div>
            <span className="account__name">
              Welcome, <span> {data.username}</span>
            </span>
          </div>
          <div className="account__email">
            <span className="account__name">
              Email: <span> {data.email}</span>
            </span>
          </div>
          <div className="account__email">
            <span className="account__name">
              Phone Number:{" "}
              {data.phone ? (
                <span> {data.phone}</span>
              ) : (
                <span>You currently have no phone number linked.</span>
                <div>
                  <span>Update your email: </span>
                </div>
              )}
            </span>
          </div>
          {/* <div className="account__addressTitle">
            <span> Primary Address</span>
          </div>
          <div className="account__email">
            <span>No addresses currently on file</span>
            <span>View addresses (0)</span>
          </div> */}
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
      <button type="button" className="account__logout" onClick={logOut}>
        Log Out
      </button>
    </section>
  );
}

export default AccountYes;
