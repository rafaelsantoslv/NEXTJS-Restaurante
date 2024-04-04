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
  { id: 1, name: "Hamburguer", cod: 11, valor: '99,99', img: 'https://unsplash.com/photos/sc5sTPMrVfk/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEwNTIxMjIwfA&force=true&w=640', quantidade: 1 },
  { id: 2, name: "Batata-frita", cod: 12, valor: '99,99', img: 'https://unsplash.com/photos/lpsbMRRqMQw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZnJpdGFzfHB0fDB8fHx8MTcxMDUyMTQ3MHww&force=true&w=640', quantidade: 1 },
  { id: 3, name: "Frango frito", cod: 13, valor: '99,99', img: 'https://unsplash.com/photos/RWAToPPP9RY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZnJhbmdvJTIwZnJpdG98cHR8MHx8fHwxNzEwNTIxNDk5fDA&force=true&w=640', quantidade: 1 },
  { id: 4, name: "Camarão", cod: 14, valor: '99,99', img: 'https://unsplash.com/photos/4LoGKVmUJsI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8Y2FtYXIlQzMlQTNvfHB0fDB8fHx8MTcxMDUyMTUzMnww&force=true&w=640', quantidade: 1 },
  { id: 5, name: "Coca-cola", cod: 15, valor: '99,99', img: 'https://unsplash.com/photos/z8PEoNIlGlg/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEwNTIxNTYzfA&force=true&w=640', quantidade: 1 },
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

