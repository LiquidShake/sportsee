import React from 'react'
import NavItem from './NavItem'
import cycle from '../img/cycle.svg'
import dumbbells from '../img/dumbbells.svg'
import swim from '../img/swim.svg'
import zen from '../img/zen.svg'

export default function SideNav() {
  return (
    <nav>
        <ul>
            <NavItem icon={zen}/>
            <NavItem icon={swim}/>
            <NavItem icon={cycle}/>
            <NavItem icon={dumbbells}/>
        </ul>
        <p>Copiryght, SportSee 2020</p>
    </nav>
  )
}
