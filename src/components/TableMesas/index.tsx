import React, { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import {
    Table as TableUI,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption,
    TableFooter,

} from "@/components/ui/table"
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";


interface Table {
    id: number;
    status: string;
}

interface Product {
    id: number;
    name: string;
    cod: number;
    valor: string;
    img?: any;
    quantidade?: any
}

interface Props {
    tables: Table[];
    products: Product[];
}

function TableStatus({ tables, products }: Props) {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [quantidade, setQuantidade] = useState(0)

    const index = () => {
        return (
            <div>index</div>
        )
    }


    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );



    const aumentaQuantidade = () => {
        setQuantidade(quantidade + 1)
    }
    const diminuiQuantidade = () => {
        setQuantidade(quantidade - 1)
    }

    return (
        <div className="grid grid-cols-3 gap-4 h-full w-full">
            {tables.map(table => (
                <Dialog key={table.id} >
                    <DialogTrigger>
                        <div
                            key={table.id}
                            className="p-4 border rounded shadow-md flex flex-col items-center hover:bg-slate-400 cursor-pointer"
                        >
                            <div className="text-xl font-semibold">Mesa {table.id}</div>
                            <div
                                className={`mt-2 px-4 py-1 rounded ${table.status === "ocupada"
                                    ? "bg-red-500 text-white"
                                    : table.status === "reservada"
                                        ? "bg-yellow-500 text-gray-800"
                                        : "bg-green-500 text-white"
                                    }`}
                            >
                                {table.status}
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Novo pedido MESA {table.id}</DialogTitle>
                            <DialogDescription>Selecione o Produto</DialogDescription>
                        </DialogHeader>
                        <form key={table.id} className="space-y-4">
                            <div className="grid grid-cols-6 items-center text-center gap-3">
                                <Label htmlFor='search'>Buscar Produto:</Label>
                                <Input
                                    id='search'
                                    type='text'
                                    value={searchTerm}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                                    className="col-span-2"
                                />
                            </div>
                            <div>
                                <TableUI>
                                    <TableCaption>PEDIDOS</TableCaption>
                                    <HeaderTable />
                                    <TableBody>
                                        {filteredProducts.map(product => (
                                            <TableRow key={product.id}>
                                                <TableCell>
                                                    <img src={product.img}
                                                        className="w-20 h-20" />
                                                </TableCell>
                                                <TableCell>{product.name}</TableCell>
                                                <TableCell>R$ {product.valor}</TableCell>
                                                <TableCell>
                                                    <div className="flex space-x-1">
                                                        <div><Button type="button" onClick={diminuiQuantidade}>-</Button></div>
                                                        <div><Button>{quantidade}</Button></div>
                                                        <div><Button type="button" onClick={aumentaQuantidade}>+</Button></div>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell>
                                                Total
                                            </TableCell>
                                            <TableCell className="text-right">R$ 2500</TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </TableUI>
                            </div>
                            <DialogFooter>
                                <DialogClose>
                                    <Button type="button" variant='outline'>Cancelar</Button>
                                    <Button type="button" className="ml-2">Confirmar</Button>
                                </DialogClose>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
}


const HeaderTable = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Quantidade</TableHead>
            </TableRow>
        </TableHeader>
    )
}








export default TableStatus;
