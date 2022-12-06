// import { flushPromises } from '@vue/test-utils'
import axios from 'axios'
import { GetCharacterByID } from '../../src/services/character.service';
import { MOCK_CHARACTER } from '../__mocks__/character'

jest.spyOn(axios, 'get').mockResolvedValue({ status: 200, data: MOCK_CHARACTER })

test('loads posts on button click', async () => {

    const result = await GetCharacterByID(1)

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://breakingbadapi.com/api/characters/1')

    expect(result.id).toEqual(1)
    expect(result.name).toContain('test-name-1')
})
