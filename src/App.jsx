import { useRef, useEffect } from "react";

/**
 *
 * Le hoock useRef
 * Permet d'interargir avec le HTML et de conserver la valeur
 *
 */

function App() {
  const ref = useRef(undefined);

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <>
      <h1>Lorem ipsum dolor</h1>
      <Input ref={ref} />
    </>
  );
}

function Input({ ref }) {
  console.log(ref);
  return <input ref={ref} type="text" placeholder="votre champ" />;
}

export default App;
