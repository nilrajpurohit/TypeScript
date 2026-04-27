import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/Counter'
import { ChaiList } from './components/ChaiList'
import { OrderForm } from './components/OrderForm'
import { Card } from './components/Card'

function App() {
  return (
    <>
      <div>
        <h1>Hello, React with TypeScript!</h1>
        <ChaiCard name="Masala Chai" price={2.99} isSpecial={true} />
        <ChaiCard name="Ginger Chai" price={2.49} />
        <Counter />
        <ChaiList chaiList={[
          { name: "Masala Chai", price: 2.99, isSpecial: true },
          { name: "Ginger Chai", price: 2.49 },
          { name: "Cardamom Chai", price: 3.49, isSpecial: true }
        ]} />
        <OrderForm onSubmit={(order) => {
          console.log(order);
        }}/>
        <Card 
        title="Chai aur Typescript"
        footer={<button onClick={() => console.log('Order placed!')}>Order Now</button>}>
          <p>Enjoy the perfect blend of chai and TypeScript in one delightful package!</p>
        </Card>
      </div>
    </>
  )
}

export default App;
