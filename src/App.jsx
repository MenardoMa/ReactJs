import { useEffect, useState } from "react";

function App() {
  /**
   *
   * Le useEffect permet de suivre le cycle de vie d'un composant
   *
   * Le cycle de vie d'un composant inclus
   *
   * A PHASE DE MOUNTING (Montage) Creation d'un composant
   *    1 Lecture rendue
   *    2 Lecture useEffect
   * B PHASE DE UPDATE   (Mise a jour) Evolution d'un Composantp
   *    1 Lecture re rendue
   *    2 Lecture useEffect
   * C PHASE DE UNMOUNTING (Mord) Le demontage d'un composant
   *    1 *
   *    2
   *
   */

  const [count, setCount] = useState(0);

  console.log("ok");

  const handleClick = () => {
    /**
     * Le setter nous permet de passer d'un phase au autre
     * donc de quitter la phase 1 à la phase 2
     */
    setCount(count + 1);
  };

  /**
   * Le useEffect se declanche toujour lors de la deuxieme lecture.
   * Nous avons aussi le moyen de le lancer lors de
   *
   * useEffect prend a deuxieme paramettre un tableaux de dependance
   * un tableau des elements a suivre
   */
  useEffect(() => {
    /**
     * Par contre si nous voulons executer uniquemennt une fois
     * le useEffect prend en seconde parametre un tableau
     * [
     *    si c'est un tableau vide le useEffect va se declancher qu'une seule fois
     *    si un lui passe une variable il va suivre c'est element
     * ]
     */
    console.log("usEffect");
  }, [count]);

  console.log("rendu");

  return (
    <>
      <h1>Le useEffect</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>Incrementer</button>
    </>
  );
}

export default App;
