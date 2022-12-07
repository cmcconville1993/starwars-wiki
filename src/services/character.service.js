import axios from 'axios';

const BREAKING_BAD_CHARACTERS_ENDPOINT = 'https://breakingbadapi.com/api/characters/'

/**
 * Return a list of all characters
 */
export async function GetAllCharacters() {
    let allCharacters = [];
    await axios
        .get(BREAKING_BAD_CHARACTERS_ENDPOINT)
        .then(response => {
            allCharacters = response.data
        })
        .catch(err => err)

    return allCharacters;
}

/**
 * Used to get a character by ID
 * 
 * @param {*} id 
 * @returns character by ID
 */
export async function GetCharacterByID(id) {
    let character;
    await axios
        .get(BREAKING_BAD_CHARACTERS_ENDPOINT + id)
        .then(response => {
            character = response.data[0]
        })
        .catch(err => err)

    return character;
}
