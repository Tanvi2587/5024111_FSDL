import { useState } from "react";

// Function Component (Props)
function Greeting({ name }) {
  return <h2>Hello, {name} 👋</h2>;
}

// Counter Component (State + Event)
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

// Form Component (Form + State + Event)
function FormExample() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
      <p>You typed: {name}</p>
    </form>
  );
}

// Main App Component
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Basics Demo 🚀</h1>

      {/* Props */}
      <Greeting name="Amit" />
      <Greeting name="Sara" />

      <hr />

      {/* State + Events */}
      <Counter />

      <hr />

      {/* Forms */}
      <FormExample />
    </div>
  );
}

export default App;