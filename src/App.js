import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [operand1, setOperand1] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [isResult, setIsResult] = useState(false);

  const numClick = (num) => {
    if (!operator) {
      setOperand1(operand1 + num);
    } else {
      setOperand2(operand2 + num);
    }
    setIsResult(false);
  };

  const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const handlePlus = () => {
    setIsResult(false);
    setOperator("+");
  };
  const handleMinus = () => {
    setIsResult(false);
    setOperator("-");
  };
  const handleClean = () => {
    setOperator("");
    setOperand1("");
    setOperand2("");
    setIsResult(false);
  };

  const setResult = () => {
    const num1 = Number(operand1);
    const num2 = Number(operand2);

    if (operator === "+") {
      setOperand1(String(num1 + num2));
      setOperand2("");
      setOperator("");
    }
    if (operator === "-") {
      setOperand1(String(num1 - num2));
      setOperand2("");
      setOperator("");
    }

    setIsResult(true);
  };

  return (
    <div className={styles.calculator}>
      <div className={isResult ? styles.displayWithResult : styles.display}>
        {operand1} {operator} {operand2}
      </div>
      <div className={styles.buttons}>
        {NUMS.map((num) => (
          <button key={num} onClick={() => numClick(num)}>
            {num}
          </button>
        ))}

        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
        <button onClick={handleClean}>C</button>
        <button onClick={setResult}>=</button>
      </div>
    </div>
  );
}

export default App;
