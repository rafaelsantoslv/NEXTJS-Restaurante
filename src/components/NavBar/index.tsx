import React from 'react'
import { User, Menu } from 'lucide-react'
import Image from 'next/image'

interface NavBarType {
  toggleMenu: () => void
}

function NavBar({ toggleMenu }: NavBarType) {
  return (
    <nav className="flex bg-primary text-secondary p-[15px] justify-between items-center">
      <div className="container flex justify-between items-center">
        <div className='flex space-x-5 items-center'>
          <Logo />
          <MenuButton toggleMenu={toggleMenu} />

        </div>
        <div className="flex items-center space-x-4">
          <UserSection />
          <Logo />
        </div>
      </div>
    </nav>
  )
}

function Logo() {
  return (
    <Image
      src="https://img.logoipsum.com/243.svg"
      width={200}
      height={200}
      alt="Picture of the author"
    />
  )
}

function UserSection() {
  return (
    <div className="flex items-center space-x-2">
      <User />
      <div>
        <span className="block text-sm">Rafael Santos</span>
        <span className="text-xs">Administrador</span>
      </div>
    </div>
  )
}

function MenuButton({ toggleMenu }: NavBarType) {
  return (
    <button onClick={toggleMenu}>
      <Menu />
    </button>
  )
}

export default NavBar
