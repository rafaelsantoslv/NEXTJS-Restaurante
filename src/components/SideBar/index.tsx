'use client'
import React, { createContext, useContext } from 'react'
interface SideBarItemType {
    icon: any,
    text: string,
    active?: boolean,
    alert?: boolean
  }

const SideBarContext = createContext()
export function SideBar({children, expanded}: any) {
  return (
    <div>
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
              <div className="p-4 pb-2 flex justify-between items-center">
                <img src="https://img.logoipsum.com/243.svg" alt="" className={`overflow-hidden, transition-all ${expanded? "w-32" : "w-0"}`} />
              </div>

              <SideBarContext.Provider value={{expanded}}>

              <ul className="flex-1 px-3">{children}</ul>
              </SideBarContext.Provider>
            </nav>
          </aside>
    </div>
  )
}

 export function SideBarItem(sideBarItemType: SideBarItemType) {
  const {expanded} = useContext(SideBarContext)
    return(
      <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
        sideBarItemType.active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}>
        {sideBarItemType.icon}
        <span className={`overflow-hidden transition-all ${expanded? "w-32 ml-3" : "w-0"}`}>{sideBarItemType.text}</span>
        {sideBarItemType.alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-500 ${expanded? "" : "top-2"}`} />}
      </li>
    )
  }

