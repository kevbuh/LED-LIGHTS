import React from 'react'
import './SideBar.css'

function SideBar() {
  return (
    <section className="sidebar">
      <div className="sidebar__title">
        <span>Categories</span>
      </div>
      <div className="sidebar__types">
        <ul>
          <li>Lights</li>
          <li>Price</li>
          <li>Color</li>
        </ul>
      </div>
    </section>
  )
}

export default SideBar
