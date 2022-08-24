import { useState, useEffect } from "react";
import PhraseController from "../controller/PhraseController";

import Item from "./Item";

export default function Todo() {
  const { Read, Create } = PhraseController;

  const [phrases, setPhrases] = useState([]);
  const [newPhrase, setNewPhrase] = useState(null);
  

  const getAll = async () => {
    const response = await Read();
    setPhrases(response.phrases);
    console.log("getAll", response.phrases);
  };

  useEffect(() => {
    getAll();
  }, []);
  console.log("state", phrases);

  return (
    <>
      <h1> App To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Adicione uma tarefa."
          onChange={(event) => setNewPhrase({ text: event.target.value })}
        />
        <button onClick={() => Create(newPhrase)}>+</button>
      </div>
      <ul>
        {/*phrases.map((phrase, index) => (<li key={`list-item-${index}`}><Item phrase={phrase} /></li>))*/}
        {phrases.map((phrase, index) => (
          <li key={`list-item-${index}`}>
            <Item  phrase={phrase.text} id={phrase._id} />
          </li>
        ))}
      </ul>
    </>
  );
}
