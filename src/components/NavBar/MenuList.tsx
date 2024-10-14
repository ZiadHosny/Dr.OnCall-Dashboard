import React from 'react'
import NavBarItem from './Item'
import { MenuNavBarItem } from '../../data/menuNavBar'

type Props = {
  menu: MenuNavBarItem[]
}

export default function NavBarMenuList({ menu }: Props) {
  return (
    <>
      {menu.map((item, index) => (
        <NavBarItem key={index} item={item} />
      ))}
    </>
  )
}
