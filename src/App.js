import { useState } from "react";
import Division from "./componentes/Division";
import Multiplicacion from "./componentes/Multiplicacion";
import Numero from "./componentes/Numero";
import Operador from "./componentes/Operador";
import Pantalla from "./componentes/Pantalla";
import Resta from "./componentes/Resta";
import Suma from "./componentes/Suma";
import styles from "./App.module.css";

function App() {
  const [currentInput1, setCurrentInput1] = useState("");
  const [currentInputOpe, setCurrentInputOpe] = useState("");
  const [currentInput2, setCurrentInput2] = useState("");
  const numOnClickHandler = (numero) => {
    if (currentInputOpe === "") setCurrentInput1((prev) => prev + numero);
    else setCurrentInput2((prev) => prev + numero);
  };
  const opeOnClickHandler = (operador) => {
    setCurrentInputOpe(operador);
  };

  const resultOnClickHandler = () => {
    let res;
    switch (currentInputOpe) {
      case "+":
        res = Suma(currentInput1, currentInput2);
        break;
      case "/":
        res = Division(currentInput1, currentInput2);
        break;
      case "-":
        res = Resta(currentInput1, currentInput2);
        break;
      case "x":
        res = Multiplicacion(currentInput1, currentInput2);
        break;
      default:
    }
    console.log(res);
    setCurrentInput1(res);
    setCurrentInput2("");
    setCurrentInputOpe("");
  };

  return (
    
      <div className={styles.div}>
        <table id="matrix"className={styles.table}>
          <tr >
          <td colSpan='4'>
              <Pantalla
                inp1={currentInput1}
                oper={currentInputOpe}
                inp2={currentInput2}
              ></Pantalla>
            </td>
          </tr>
          <tr>
            <td >
              <Numero numOnClick={numOnClickHandler} num={7} />
            </td>
            <td >
              <Numero numOnClick={numOnClickHandler} num={8} />
            </td>
            <td >
              <Numero numOnClick={numOnClickHandler} num={9} />
            </td>
            <td >
              <Operador opeOnClick={opeOnClickHandler} ope="/" />
            </td>
          </tr>

          <tr>
            <td >
              <Numero numOnClick={numOnClickHandler} num={4} />
            </td>
            <td>
              <Numero numOnClick={numOnClickHandler} num={5} />
            </td>
            <td>
              <Numero numOnClick={numOnClickHandler} num={6} />
            </td>
            <td>
              <Operador opeOnClick={opeOnClickHandler} ope="x" />
            </td>
          </tr>

          <tr>
            <td>
              <Numero numOnClick={numOnClickHandler} num={1} />
            </td>
            <td>
              <Numero numOnClick={numOnClickHandler} num={2} />
            </td>
            <td>
              <Numero numOnClick={numOnClickHandler} num={3} />
            </td>
            <td>
              <Operador opeOnClick={opeOnClickHandler} ope="-" />
            </td>
          </tr>

          <tr>
            <td>
              <Numero numOnClick={numOnClickHandler} num={0} />
            </td>
            <td>
              <Numero numOnClick={numOnClickHandler} num="." />
            </td>
            <td>
              <button className={styles.boton} onClick={resultOnClickHandler}>
                =
              </button>
            </td>
            <td>
              <Operador opeOnClick={opeOnClickHandler} ope="+" />
            </td>
          </tr>
        </table>
      </div>
    
  );
}

export default App;
