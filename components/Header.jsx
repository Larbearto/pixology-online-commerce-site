import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='relative flex items-center justify-between w-full h-20 m-12 '>
      <Link href='#' className='fixed ml-2 text-4xl font-bold tracking-wide left-10'>
        Pixology
      </Link>

      <ul className='flex items-center justify-center w-full space-x-16 text-lg font-bold text-Coolgray'>
        <li className='navbar-item'>
          <Link href='/home' className='navbar-link'>
            Home
          </Link>
        </li>

        <li className='navbar-item'>
          <Link href='/service' className='navbar-link'>
            Services
          </Link>
        </li>

        <li className='navbar-item'>
          <Link href='/feature' className='navbar-link'>
            Features
          </Link>
        </li>

        <li className='navbar-item'>
          <Link href='/project' className='navbar-link'>
            Portfolio
          </Link>
        </li>

        <li className='navbar-item'>
          <Link href='/blog' className='navbar-link'>
            Blog
          </Link>
        </li>
      </ul>

      <Link
        href='#'
        className='fixed py-6 font-bold border-none right-10 px-14 bg-Majorelleblue text-Ghostwhite rounded-2xl'
      >
        Let&apos;s Talk 👋
      </Link>
    </div>
  )
}

export default Header
