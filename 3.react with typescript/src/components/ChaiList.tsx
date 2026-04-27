import type { Chai } from '../types';
import { ChaiCard } from './ChaiCard';

interface ChaiListProps {
    chaiList: Chai[];
}

export function ChaiList({ chaiList }: ChaiListProps) {
    return (
        <div>
            {chaiList.map((chai, index) => (
                <ChaiCard
                    key={index}
                    name={chai.name}
                    price={chai.price}
                    isSpecial={chai.isSpecial}
                />
            ))}
        </div>
    );
}