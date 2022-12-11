import { MOCK_CHARACTER } from '../__mocks__/character'
import { shallowMount } from '@vue/test-utils'
import CharacterDetails from '@/components/CharacterDetails.vue'
import * as CharacterService from '@/services/character.service'

test('stores character ID when passed into props', async() => {
    //Arrange
    var spy = jest.spyOn(CharacterService, 'GetCharacterByID')
        .mockResolvedValue(MOCK_CHARACTER)

    const characterId = "123"

    const $route = {
        fullPath: 'full/path',
        params: {
            id: characterId
        }
    }

    //Act
    const wrapper = shallowMount(CharacterDetails, {
        mocks: {
            $route
        }
    })

    //Assert
    expect(wrapper.vm.characterId).toEqual(characterId)
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith("123")
})
