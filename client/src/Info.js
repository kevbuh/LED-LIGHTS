import React from 'react'
import './Info.css'
import CheckIcon from '@material-ui/icons/Check';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import WifiIcon from '@material-ui/icons/Wifi';
import CancelIcon from '@material-ui/icons/Cancel';

function Info() {
  return (
    <section className="info"> 
      <div className="info__title">
        <span>Why Use Gravity LEDs?</span>
        </div>
        <ul>
          <li>
            <div className="info__reason">
          <div className="info__reasonLeft">
            <span>Easy to use</span>
          </div>
          <div className="info__reasonRight">
            <InsertEmoticonIcon className="info__icon"/>
          </div>
        </div>
          </li>
        
<li>
  <div className="info__reason">
          <div className="info__reasonLeft">
            <span>Wifi Enabled</span>
          </div>
          <div className="info__reasonRight">
            <WifiIcon className="info__icon"/>
          </div>
        </div>
</li>
        
        <li>
          <div className="info__reason">
          <div className="info__reasonLeft">
            <span>No Controller</span>
          </div>
          <div className="info__reasonRight">
            <CancelIcon className="info__icon"/>
          </div>
        </div>
        </li>
        
<li>
  <div className="info__reason">
          <div className="info__reasonLeft">
            <span>Tons of patterns</span>
          </div>
          <div className="info__reasonRight">
            <CheckIcon className="info__icon"/>
          </div>
        </div>
</li>
        
        </ul>
    </section>
  )
}

export default Info
