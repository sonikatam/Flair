import React, { useState } from "react";

function App() {
  // State to manage incomes
  const [incomes, setIncomes] = useState([]);
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");

  // Function to handle adding new income
  const addIncome = () => {
    if (amount && source) {
      setIncomes([...incomes, { amount: parseFloat(amount), source }]);
      setAmount(""); // Clear input fields
      setSource("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Wealth Tracker</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>Add Income</h2>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={addIncome} style={{ padding: "5px 10px" }}>
          Add
        </button>
      </div>

      <div>
        <h2>Income List</h2>
        {incomes.length > 0 ? (
          <ul>
            {incomes.map((income, index) => (
              <li key={index}>
                <strong>${income.amount.toFixed(2)}</strong> from {income.source}
              </li>
            ))}
          </ul>
        ) : (
          <p>No incomes added yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;
