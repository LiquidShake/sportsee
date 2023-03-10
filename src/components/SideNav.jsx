import React from 'react'
import Icon from './Icon'

export default function SideNav() {
  return (
    <nav>
        <ul>
          <li>
            <Icon name="zen"/>
          </li>
          <li>
            <Icon name="cycle"/>
          </li>
          <li>
            <Icon name="dumbbells"/>
          </li>
          <li>
            <Icon name="swim"/>
          </li>
        </ul>
        <p>Copiryght, SportSee 2020</p>
    </nav>
  )
}
