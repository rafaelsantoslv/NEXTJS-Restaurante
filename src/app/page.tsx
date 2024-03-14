'use client'
import Image from "next/image";
import { User, Menu, Utensils, DoorOpen, PieChart, Bolt } from 'lucide-react';
import { SideBar, SideBarItem } from "@/components/SideBar";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import TableStatus from "@/components/TableMesas";

const tables = [
  { id: 1, status: "ocupada" },
  { id: 2, status: "livre" },
  { id: 3, status: "reservada" },
  { id: 4, status: "ocupada" },
  { id: 5, status: "livre" },
  { id: 6, status: "reservada" },
  { id: 7, status: "ocupada" },
  { id: 8, status: "livre" },
  { id: 9, status: "reservada" },

];

const products = [
  { id: 1, name: "Product 1", cod: 11, valor: '99,99' },
  { id: 2, name: "Product 2", cod: 12, valor: '99,99' },
  { id: 3, name: "Product 3", cod: 12, valor: '99,99' },
  { id: 4, name: "Product 4", cod: 12, valor: '99,99' },
  { id: 5, name: "Product 5", cod: 12, valor: '99,99' },
  // Outros produtos..., valor: '99,99'
];


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
            <SideBarItem icon={<DoorOpen size={20} />} text="Mesas" active />
            <SideBarItem icon={<PieChart size={20} />} text="Relatórios" alert />
            <SideBarItem icon={<Bolt size={20} />} text="Configurações" alert />
          </SideBar>
          <TableStatus tables={tables} products={products} />
        </div>
      </div>
    </>
  );
}

