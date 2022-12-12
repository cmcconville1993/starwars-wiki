import { GetFilmTitleByID } from '@/services/film.service';
import axios from 'axios'
import { MOCK_FILM } from '../__mocks__/film'


test('Get film title by film ID', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({ status: 201, data: MOCK_FILM })

    await GetFilmTitleByID(1).then(response => {
        expect(response).toContain('test-title-1')
    })

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/films/1')
})