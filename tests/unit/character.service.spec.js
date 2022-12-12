import axios from 'axios'
import { GetCharacterByID, GetAllCharacters } from '../../src/services/character.service';
import { MOCK_CHARACTER, MOCK_CHARACTER_LIST_PAGE_1, MOCK_CHARACTER_LIST_PAGE_2 } from '../__mocks__/character'


test('Returns a list of all characters from API - Page 1', async () => {
    //Arrange
    jest.spyOn(axios, 'get').mockResolvedValue({ status: 201, data: { results: MOCK_CHARACTER_LIST_PAGE_1 } })

    //Act
    await GetAllCharacters(1).then(response => {
        expect(response).toHaveLength(10)
        expect(response[0].name).toContain('test-name-1')
        expect(response[1].name).toContain('test-name-2')
        expect(response[2].name).toContain('test-name-3')
        //...
        expect(response[8].name).toContain('test-name-9')
        expect(response[9].name).toContain('test-name-10')
    })

    //Assert
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/people/?page=1')
})

test('Returns a list of all characters from API - Page 2', async () => {
    //Arrange
    jest.spyOn(axios, 'get').mockResolvedValue({ status: 201, data: { results: MOCK_CHARACTER_LIST_PAGE_2 } })

    //Act
    await GetAllCharacters(2).then(response => {
        expect(response).toHaveLength(10)
        expect(response[0].name).toContain('test-name-11')
        expect(response[1].name).toContain('test-name-12')
        expect(response[2].name).toContain('test-name-13')
        //...
        expect(response[8].name).toContain('test-name-19')
        expect(response[9].name).toContain('test-name-20')
    })

    //Assert
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/people/?page=2')
})

test('Return character by ID from API', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({ status: 201, data: MOCK_CHARACTER })

    await GetCharacterByID(1).then(response => {
        expect(response.name).toContain('test-name-1')
        expect(response.films.length).toEqual(4)
    })

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/people/1')
})
