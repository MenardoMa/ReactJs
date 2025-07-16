import { useEffect, useState } from "react";

function App() {
  const [compteur, setCompteur] = useState(0);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  console.log("render 0");

  return (
    <>
      <h1>Le useEffect</h1>
      <h1>{compteur}</h1>
    </>
  );
}

export default App;
