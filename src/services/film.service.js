import axios from 'axios'

const STAR_WARS_FILMS_ENDPOINT = 'https://swapi.dev/api/films/'

/**
 * Get film title by filmID
 * 
 * @param {*} id 
 * @returns Title of film
 */
export async function GetFilmTitleByID(id) {
    let title;
    await axios
        .get(STAR_WARS_FILMS_ENDPOINT + id)
        .then(response => {
            title = response.data.title
        })
    return title;
}