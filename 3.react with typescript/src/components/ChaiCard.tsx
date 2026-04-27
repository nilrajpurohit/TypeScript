interface ChaiCardProps {
    name: string,
    price: number,
    isSpecial?: boolean
}

export function ChaiCard(chaiCardProps: ChaiCardProps) {
  const { name, price, isSpecial = false } = chaiCardProps;
  return (
    <div>
      <h2>{name} {isSpecial && '(Special)'}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      {isSpecial && <p>This is a special offer!</p>}
    </div>
  )
}