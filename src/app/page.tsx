'use client'
import Image from "next/image";
import { User, Menu, Utensils, DoorOpen, PieChart, Bolt } from 'lucide-react';
import { SideBar, SideBarItem } from "@/components/SideBar";
import { useState } from "react";
import NavBar from "@/components/NavBar";



export default function Home() {
  const [expanded, setExpanded] = useState(true)

  const toggleMenu = () => {
    setExpanded((curr) => !curr)
  }

  return (
    <>
      <div>
        <NavBar toggleMenu={toggleMenu} />
        <div className="flex container">
          <SideBar expanded={expanded}>
            <SideBarItem icon={<Utensils size={20} />} text="Pedidos" />
            <SideBarItem icon={<DoorOpen size={20} />} text="Mesas" />
            <SideBarItem icon={<PieChart size={20} />} text="Relatórios" alert />
            <SideBarItem icon={<Bolt size={20} />} text="Configurações" active alert />
          </SideBar>
          {/* <div className="">content</div> */}
        </div>
      </div>
    </>
  );
}

