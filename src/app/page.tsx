'use client'
import Image from "next/image";
import { User, Menu, Utensils, DoorOpen, PieChart, Bolt } from 'lucide-react';
import { SideBar, SideBarItem } from "@/components/SideBar";
import { useState } from "react";



export default function Home() {
  const [expanded, setExpanded] = useState(true)

  return (
    <>
      <div>
        <nav className="flex bg-primary text-secondary p-[15px] justify-between items-center">
          <div className="container flex justify-between items-center">
            <div className="flex space-x-5 items-center">
              <a><img src="https://img.logoipsum.com/243.svg" alt="Logo" /></a>
              <button onClick={() => setExpanded((curr) => !curr)}>
                <Menu />
              </button>
            </div>
            <div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User />
                  <div>
                    <span className="block text-sm">Rafael Santos</span>
                    <span className="text-xs">Administrador</span>
                  </div>

                </div>
                <a><img src="https://img.logoipsum.com/243.svg" alt="" /></a>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex container">
          <SideBar expanded={expanded}>
            <SideBarItem icon={<Utensils size={20} />} text="Pedidos" active />
            <SideBarItem icon={<DoorOpen size={20} />} text="Mesas" active/>
            <SideBarItem icon={<PieChart size={20} />} text="Relatórios" alert />
            <SideBarItem icon={<Bolt size={20} />} text="Configurações" active alert />
          </SideBar>
          {/* <div className="">content</div> */}
        </div>
      </div>
    </>
  );
}

