import React from 'react'

export default function NavItem({icon}) {
  return (
    <li className='nav-item'>
      <img src={icon} alt="navigation" />
    </li>
  )
}
