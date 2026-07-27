import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  function increment() {
    setCount(count + 1);
    sayHello();
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello Member!");
  }

  function sayWelcome(message) {
    alert(message);
  }

  function onPress() {
    alert("I was clicked");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const rupees = parseFloat(amount);

    if (isNaN(rupees)) {
      alert("Please enter a valid amount");
      return;
    }

    // 1 Euro = 80 Rupees
    const euro = (rupees / 80).toFixed(2);

    alert(
      `Converting to Euro Amount is ${euro}`
    );
  }

  return (
    <div className="container">

      <h2>{count}</h2>

      <button onClick={increment}>Increment</button>
      <br /><br />

      <button onClick={decrement}>Decrement</button>
      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>
      <br /><br />

      <button onClick={onPress}>
        Click on me
      </button>

      <br /><br /><br />

      <h1 className="heading">
        Currency Convertor!!!
      </h1>

      <form onSubmit={handleSubmit}>

        <label>Amount:</label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br /><br />

        <label>Currency:</label>

        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default App;