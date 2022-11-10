import { useState } from "react";
import Table from "../Table/Table";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="App">
      <h1>Contacts</h1>
      <Table />
    </section>
  );
}

export default App;
