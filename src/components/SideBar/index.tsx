'use client'
import Image from 'next/image'
import React, { createContext, useContext } from 'react'

interface SideBarItemType {
  icon: React.ReactNode
  text: string
  active?: boolean
  alert?: boolean
}

const SideBarContext = createContext<any>('')
export function SideBar({ children, expanded }: any) {
  return (
    <div>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <Image
              src="https://img.logoipsum.com/243.svg"
              alt=""
              width={30}
              height={30}
              className={`overflow-hidden, transition-all ${expanded ? 'w-32' : 'w-0'}`}
            />
          </div>

          <SideBarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SideBarContext.Provider>
        </nav>
      </aside>
    </div>
  )
}

export function SideBarItem({ icon, text, active, alert }: SideBarItemType) {
  const { expanded } = useContext(SideBarContext)

  const getItemClasses = () => {
    return `
    relative flex items-center py-2 px-3 my-1
    font-medium rounded-md cursor-pointer
    transition-colors group
    ${active ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800' : 'hover:bg-indigo-50 text-gray-600'}
  `
  }
  const getAlertIndicator = () => {
    return (
      alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`}
        />
      )
    )
  }

  const getCollapsedText = () => {
    return (
      !expanded && (
        <div
          className={`
        absolute left-full rounded-md px-2 py-1 ml-6
        bg-indigo-100 text-indigo-800 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )
    )
  }

  return (
    <li className={getItemClasses()}>
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'
          }`}
      >
        {text}
      </span>
      {getAlertIndicator()}
      {getCollapsedText()}
    </li>
  )
}
