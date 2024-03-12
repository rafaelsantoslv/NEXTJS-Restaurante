import React from 'react'
interface SideBarItemType {
    icon: any,
    text: string,
    active?: boolean,
    alert: any
  }
export function SideBar({children}: any) {
  return (
    <div>
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
              <div className="p-4 pb-2 flex justify-between items-center">
                <img src="https://img.logoipsum.com/243.svg" alt="" />
              </div>
              <ul className="flex-1 px-3">{children}</ul>
            </nav>
          </aside>
    </div>
  )
}

 export function SideBarItem(sideBarItemType: SideBarItemType) {
    return(
      <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
        sideBarItemType.active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}>
        {sideBarItemType.icon}
        <span>{sideBarItemType.text}</span>
      </li>
    )
  }

