import PhraseController from "../controller/PhraseController";

export default function item({ phrase, id }) {
  const { Edit, Delete } = PhraseController;
   
  return (
    <>
      {phrase}
      <button onClick={() => Delete(phrase.id).then((status) => status)}>
        Deletar
      </button>
      <button
        onClick={() =>
          Edit(phrase.id, phrase).then((editedPhrase) => editedPhrase)
        }
      >
        Editar
      </button>
    </>
  );
}
