function PhraseService(baseUrl) {

    this.GetPhrases = async function () {
  
      const response = await fetch(baseUrl);
      const phrases = await response.json();
      console.log("service", phrases)
      return phrases
    };
  
    this.GetById = async function (idPhrase){
      const response = await fetch(`${baseUrl}/${idPhrase}`);
      const phrase = await response.json()
  
      return phrase
    };
  
    this.CreatePhrase = async function (bodyPhrase) {
      const bodyConfig = {
          method: 'POST',
          body: JSON.stringify(bodyPhrase),
          headers: {
              'Content-type': 'application/json; charset=UTF-8'
          }
      }
      const response = await fetch (baseUrl, bodyConfig);
      const newPhrase = await response.json();
      return newPhrase
    }
  
    this.UpdatePhraseById = async function(idPhrase, newBodyPhrase){
      const bodyConfig = {
          method: 'PUT',
          body: JSON.stringify(newBodyPhrase),
          headers: {
              'Content-type': 'application/json; charset=UTF-8'
          }
      }
      const response = await fetch(`${baseUrl}, ${idPhrase}`, bodyConfig)
      const updatedPhrase = await response.json();
      return updatedPhrase
    }
  
    this.DeletePhraseById = async function (idPhrase) {
      return response.ok
    }
  }
  
  const phraseService = new PhraseService('http://localhost:3001/list')
  
  export default phraseService;