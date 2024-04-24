import React, { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Table as TableUI, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption, TableFooter } from "@/components/ui/table";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface Table {
    id: number;
    status: string;
    totalMesa: number;
}

interface Product {
    id: number;
    name: string;
    cod: number;
    valor: string;
    img?: any;
    quantidade?: any;
}

interface Props {
    tables: Table[];
    products: Product[];
}

function TableStatus({ tables, products }: Props) {

    return (
        <div className="grid grid-cols-3 gap-4 h-full w-full">
            {tables.map(mesa => (
                <div key={mesa.id}>
                    <div className="p-4 border rounded shadow-md flex flex-col items-center">
                        <div className="text-xl font-semibold">Mesa {mesa.id}</div>
                        <div className={`mt-2 px-4 py-1 rounded ${mesa.status === "ocupada" ? "bg-red-500 text-white" : mesa.status === "reservada" ? "bg-yellow-500 text-gray-800" : "bg-green-500 text-white"}`}>
                            {mesa.status}
                        </div>
                        <div className="space-x-3 space-y-3">
                            <NovoPedido tables={tables} products={products} mesa={mesa} />
                            <PedidosMesa tables={tables} products={products} mesa={mesa} />
                        </div>
                    </div>
                </div>
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
    );
}

const NovoPedido = ({ tables, products, mesa }: Props & { mesa: Table }) => {

    const [itens, setItens] = useState<Product[]>(products);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredProducts = itens.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const adicionarQuantidade = (productId: number, mesaId: number) => {
        const novosItens = itens.map(item => {
            if (item.id === productId) {
                return { ...item, quantidade: (item.quantidade || 0) + 1 };
            }
            return item;
        });

        setItens(novosItens);
    };

    const removerQuantidade = (productId: number, mesaId: number) => {
        const novosItens = itens.map(item => {
            if (item.id === productId) {
                return { ...item, quantidade: Math.max(0, (item.quantidade || 0) - 1) };
            }
            return item;
        });

        setItens(novosItens);
    };

    const atualizarTotalMesa = (itens: Product[]) => {
        const totalMesa = itens.reduce((acc, cur) => {
            return acc + (cur.quantidade || 0) * parseFloat(cur.valor);
        }, 0);

        return parseFloat(totalMesa.toFixed(2));
    };

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant={'outline'}>Novo Pedido</Button>
            </DialogTrigger>
            <DialogContent className="block">
                <DialogHeader>
                    <DialogTitle>Novo pedido MESA {mesa.id}</DialogTitle>
                    <DialogDescription>Selecione o Produto</DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 items-center text-center gap-3">
                        <Label htmlFor='search'>Buscar Produto:</Label>
                        <Input
                            id='search'
                            type='text'
                            value={searchTerm}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                            className="col-span-2"
                        />

                        <TableUI>
                            <TableCaption>PEDIDOS</TableCaption>
                            <HeaderTable />
                            <TableBody>
                                {filteredProducts.map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell><img src={item.img} className="w-20 h-20" /></TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>R$ {item.valor}</TableCell>
                                        <TableCell>
                                            <div className="flex space-x-1">
                                                <div><Button type="button" onClick={() => removerQuantidade(item.id, mesa.id)}>-</Button></div>
                                                <div><Button>{item.quantidade}</Button></div>
                                                <div><Button type="button" onClick={() => adicionarQuantidade(item.id, mesa.id)}>+</Button></div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell>Total R$ {atualizarTotalMesa(filteredProducts)}</TableCell>
                                    <TableCell className="text-right"></TableCell>
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
    )
}

const PedidosMesa = ({ tables, products, mesa }: Props & { mesa: Table }) => {

    const [itens, setItens] = useState<Product[]>(products);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredProducts = itens.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const adicionarQuantidade = (productId: number, mesaId: number) => {
        const novosItens = itens.map(item => {
            if (item.id === productId) {
                return { ...item, quantidade: (item.quantidade || 0) + 1 };
            }
            return item;
        });

        setItens(novosItens);
    };

    const removerQuantidade = (productId: number, mesaId: number) => {
        const novosItens = itens.map(item => {
            if (item.id === productId) {
                return { ...item, quantidade: Math.max(0, (item.quantidade || 0) - 1) };
            }
            return item;
        });

        setItens(novosItens);
    };

    const atualizarTotalMesa = (itens: Product[]) => {
        const totalMesa = itens.reduce((acc, cur) => {
            return acc + (cur.quantidade || 0) * parseFloat(cur.valor);
        }, 0);

        return parseFloat(totalMesa.toFixed(2));
    };

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant={'outline'}>Pedidos</Button>
            </DialogTrigger>
            <DialogContent className="block">
                <DialogHeader>
                    <DialogTitle>Pedidos MESA {mesa.id}</DialogTitle>
                    <DialogDescription>Pedidos já feitos</DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 items-center text-center gap-3">
                        <Label htmlFor='search'>Buscar Produto:</Label>
                        <Input
                            id='search'
                            type='text'
                            value={searchTerm}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                            className="col-span-2"
                        />

                        <TableUI>
                            <TableCaption>PEDIDOS</TableCaption>
                            <HeaderTable />
                            <TableBody>
                                {filteredProducts.map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell><img src={item.img} className="w-20 h-20" /></TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>R$ {item.valor}</TableCell>
                                        <TableCell>
                                            <div className="flex space-x-1">
                                                <div><Button disabled>{15 | item.quantidade}</Button></div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell>Total Mesa R$ {115 | atualizarTotalMesa(filteredProducts)}</TableCell>
                                    <TableCell className="text-right"></TableCell>
                                </TableRow>
                            </TableFooter>
                        </TableUI>
                    </div>
                    <DialogFooter>
                        <DialogClose>
                            <Button type="button" variant='outline'>Cancelar</Button>
                            <Button type="button" className="ml-2">Fechamento</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default TableStatus;
