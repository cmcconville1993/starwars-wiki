import axios from 'axios'
import { GetCharacterByID, GetAllCharacters } from '../../src/services/character.service';
import { MOCK_CHARACTER, MOCK_CHARACTER_LIST } from '../__mocks__/character'


test('Returns a list of all characters from API', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({ status: 200, data: MOCK_CHARACTER_LIST })

    await GetAllCharacters().then(response => {
        expect(response).toHaveLength(3)
        expect(response[0].id).toEqual(1)
        expect(response[0].name).toContain('test-name-1')
        expect(response[1].id).toEqual(1)
        expect(response[1].name).toContain('test-name-2')
        expect(response[2].id).toEqual(1)
        expect(response[2].name).toContain('test-name-3')
    })

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://breakingbadapi.com/api/characters/')
})

test('Return character by ID from API', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({ status: 200, data: MOCK_CHARACTER })

    await GetCharacterByID(1).then(response => {
        expect(response.id).toEqual(1)
        expect(response.name).toContain('test-name-1')
    })

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://breakingbadapi.com/api/characters/1')
})

afterEach(() => {
    jest.clearAllMocks();
});
