import { useState } from "react"

interface Order {
    name: string;
    cups: number;
}

interface OrderFormProps {
    onSubmit(order: Order): void;
}

export function OrderForm({onSubmit}: OrderFormProps) {
    const [name, setName] = useState<string>('Masala');
    const [cups, setCups] = useState<number>(1);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSubmit({ name, cups });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Chai Name</label>
            <input type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            <label htmlFor="">Number of Cups</label>
            <input type="number" value={cups} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value) || 0)} />
            <button type="submit">Place Order</button>
        </form>
    )
}