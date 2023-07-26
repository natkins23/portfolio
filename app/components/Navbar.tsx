"use client"
import React from 'react'
import react, {useState} from 'react'
import { Link } from 'react-scroll'
import { useTheme } from 'next-themes'
import {BsMoonFill} from 'react-icons/bs'
import {BiSolidSun} from 'react-icons/bi'

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [{
  label: 'Home',
  page: 'home'
}, {
  label: 'About',
  page: 'about'

}, {
  label: 'Projects',
  page: 'projects'
}, {
  label: 'Contact',
  page: 'contact'
}]


export default function Navbar() {
  const {systemTheme, theme, setTheme} = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  return (
    <header className=' w-full mx-auto px-4 top-0 z-50 shadow'>

    <div>
      <div className='flex justify-between items-center '>
        <div>
          <h2 className='text-2xl font-bold py-5 '>
            Nathan Watkins
          </h2>
        </div>
        <div className='flex flex-row justify-end items-center space-x-4'>
          {
            NAV_ITEMS.map((item, index) => {
              return <a key = {index}>
                {item.label}
              </a>
            })
          }

        </div>
      </div>
    </div>
                </header>
  )
}
