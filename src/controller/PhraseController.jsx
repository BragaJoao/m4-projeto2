import PhraseService from "../services/PhraseServices";

function PhraseController() {

    const { GetPhrases, CreatePhrase, UpdatePhraseById, DeletePhraseById } = PhraseService;

    this.Create = async function (bodyPhrase) {

        const newPhrase = await CreatePhrase(bodyPhrase);

        return newPhrase;
    }

    this.Read = async function () {

        const phrases = await GetPhrases();
        console.log("controler", phrases)

        return phrases;
    }

    this.Edit = async function (idPhrase, bodyPhrase) {

        const updatedPhrase = await UpdatePhraseById(idPhrase, bodyPhrase);

        return updatedPhrase;
    }

    this.Delete = async function (idPhrase) {

        const hasDeletedPhrase = await DeletePhraseById(idPhrase);

        return hasDeletedPhrase;
    }
}

const phraseController = new PhraseController()

export default phraseController;