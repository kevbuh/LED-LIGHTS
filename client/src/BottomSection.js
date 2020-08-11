import React from 'react'
import'./BottomSection.css'
import { Link } from 'react-router-dom';

function BottomSection() {
  return (
    <section className="bottomsection">
      <Link to="/shop">
        <div className="bottomsection__text">
        <span>Shop For Gravity LEDs</span>
      </div>
      </Link>
      
    </section>
  )
}

export default BottomSection
