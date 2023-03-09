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
            <NavItem pic={zen}/>
            <NavItem pic={swim}/>
            <NavItem pic={cycle}/>
            <NavItem pic={dumbbells}/>
        </ul>
        <p>Copiryght, SportSee 2020</p>
    </nav>
  )
}
