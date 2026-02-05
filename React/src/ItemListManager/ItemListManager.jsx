import { useState } from "react";
import "./ItemListManager.css";

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input.trim() === "") return;
    setItems((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <div className="container">
      <div className="itemListManager">
        <div className="titleContainer">
          <h3 className="title">Item List</h3>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          className="input"
        />
        <button onClick={handleAddItem} className="button">
          Add Item
        </button>
        <ul className="list">
          {items.map((item, index) => (
            <li key={index} className="el">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemListManager;
