import axios from 'axios';

export function GetAllCharacters() {
    return axios
        .get('https://breakingbadapi.com/api/characters');
}

export async function GetCharacterByID(id) {
    let response1;
    await axios
        .get('https://breakingbadapi.com/api/characters/' + id)
        .then(response => {
            response.data
            response1 = response.data[0]
        })
        .catch(err => err)

    return response1;
}
