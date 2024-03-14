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
import { Search } from "lucide-react";

interface Table {
    id: number;
    status: string;
}

interface Product {
    id: number;
    name: string;
    cod: number;
    valor: string
}

interface Props {
    tables: Table[];
    products: Product[];
}

function TableStatus({ tables, products }: Props) {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
                                {/* {filteredProducts.map(product => (
                                    <div key={product.id} className="flex items-center justify-between border-b py-2">
                                        <span>{product.cod}</span>
                                        <span>{product.name}</span>
                                        <Button type="button" variant="outline">Remover</Button>
                                        <Button type="button">Adicionar</Button>
                                    </div>
                                ))} */}
                                <TableUI>
                                    <TableCaption>PEDIDOS</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Codigo</TableHead>
                                            <TableHead>Nome</TableHead>
                                            <TableHead>Quantidade</TableHead>
                                            <TableHead>Valor</TableHead>

                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredProducts.map(product => (
                                            <TableRow key={product.id}>
                                                <TableCell>{product.cod}</TableCell>
                                                <TableCell>{product.name}</TableCell>
                                                <TableCell>
                                                    <div className="flex space-x-1">
                                                        <div><Button>-</Button></div>
                                                        <div><Button>10</Button></div>
                                                        <div><Button>+</Button></div>

                                                    </div>
                                                </TableCell>
                                                <TableCell>R$ {product.valor}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell className="col-span-3">
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
                                </DialogClose>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
}


export default TableStatus;
