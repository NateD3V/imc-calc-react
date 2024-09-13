import React from "react";
import "./imcCalc.css";
import Button from "./Button";
import { useState } from "react";

const imcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForms = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validateInputs = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleHeightChange = (e) => {
    const updatedValue = validateInputs(e.target.value);
    setHeight(updatedValue);
  };

  const handleWeightChange = (e) => {
    const updatedValue = validateInputs(e.target.value);
    setWeight(updatedValue);
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-input">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo: 1,75"
              onChange={(e) => handleHeightChange(e)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo: 70,5"
              onChange={(e) => handleWeightChange(e)}
              value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button
            id="calc-btn"
            text="Calcular"
            action={(e) => calcImc(e, height, weight)}
          ></Button>
          <Button id="clear-btn" text="Limpar" action={clearForms}></Button>
        </div>
      </form>
    </div>
  );
};

export default imcCalc;
