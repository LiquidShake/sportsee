import React from 'react'

export default function NavItem({pic}) {
  return (
    <li className='nav-item'>
      <img src={pic} alt="navigation" />
    </li>
  )
}
