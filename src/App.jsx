import { Fragment, useState } from "react";

function App() {
  return (
    <>
      <Input />
    </>
  );
}

function Input() {
  const [values, setValues] = useState("");
  const [taches, setTaches] = useState([]);

  // ADD TACHE
  const handleChange = (e) => {
    setValues(e.target.value);
  };

  // SOUMISSION TACHE
  const handleClick = () => {
    if (values != "") {
      const newTaches = [...taches];
      newTaches.push(values);
      setTaches(newTaches);
      setValues("");
    } else {
      alert("Entrez une tache .");
    }
  };

  // DELETE TACHE
  const handleDelete = (e) => {
    e.preventDefault();
    const nameTache = e.target.getAttribute("name");
    const filter = taches.filter((tache) => tache != nameTache);
    setTaches(filter);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={values}
          onChange={handleChange}
          placeholder="Entre la tache"
        />
        <button onClick={handleClick}>Entree</button>
      </div>
      <div>
        <ul>
          {taches.length != 0 ? (
            taches.map((list, index) => (
              <li key={index}>
                {list}
                <button name={list} onClick={handleDelete}>
                  x
                </button>
              </li>
            ))
          ) : (
            <p>Ajouter la tache.</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
