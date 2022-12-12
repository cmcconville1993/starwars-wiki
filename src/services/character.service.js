import axios from 'axios';

const STAR_WARS_CHARACTERS_ENDPOINT = 'https://swapi.dev/api/people/'

/**
 * Return a list of all characters
 */
export async function GetAllCharacters(page) {
    let allCharacters = [];
    await axios
        .get(STAR_WARS_CHARACTERS_ENDPOINT + '?page=' + page)
        .then(response => {
            allCharacters = response.data.results
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
        .get(STAR_WARS_CHARACTERS_ENDPOINT + id)
        .then(response => {
            character = response.data
        })
        .catch(err => err)
    return character;
}
