import PhraseController from "../controller/PhraseController";
import { useState } from "react";



export default function item({ phrase, id }) {
  const { Edit, Delete } = PhraseController;

   const [editMode, setEditMode] = useState(false)
   const [editedPhrase, setEditedPhrase] = useState({})

   async function salvar(){
   await Edit(id, editedPhrase)
    setEditMode(false)
   }

   function edit() {
    setEditMode(true)
    setEditedPhrase({text: phrase})
   }

  return (
    <>
      
      { editMode?<input onChange={(event) => setEditedPhrase({ text: event.target.value })} value={editedPhrase.text}/>:
      phrase
      }
      <button onClick={() => Delete(id)}>
        Deletar
      </button>
      {!editMode?
      <button onClick={ edit }> Editar </button>:
      <button
        onClick={salvar}
      >
        Salvar
      </button>
    }
    </>
  );
}
