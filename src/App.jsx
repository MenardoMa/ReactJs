import { useState } from "react";

/**
 *
 * Le Hoock Personnalisé
 *
 */

function useToggle(initial) {
  const [state, setState] = useState(initial);
  const toggle = () => setState((v) => !v);
  return [state, toggle];
}

function useIncremet(initial) {
  const [count, setCount] = useState(initial);
  const toggleIncrement = () => setCount((v) => v + 1);
  const toggleDesincrement = () => setCount((v) => v - 1);
  return [count, toggleIncrement, toggleDesincrement];
}

function App() {
  // const [checked, toggleCheck] = useToggle();
  // return (
  //   <>
  //     <label>
  //       <input type="checkbox" checked={checked} onChange={toggleCheck} />
  //       {checked && "Je suis coché"}
  //     </label>
  //   </>
  // );

  const [count, toggleIncrement, toggleDesincrement] = useIncremet(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={toggleIncrement}> + Increment</button>
      <button onClick={toggleDesincrement}> - Desincrement</button>
    </>
  );
}
export default App;
