import { MOCK_CHARACTER } from '../__mocks__/character'
import { shallowMount } from '@vue/test-utils'
import CharacterDetails from '@/components/CharacterDetails.vue'

jest.spyOn(CharacterDetails.methods, 'getCharacterByID').mockResolvedValue(MOCK_CHARACTER)

test('stores ID when passed into props', () => {
    const characterId = "123"
    const wrapper = shallowMount(CharacterDetails, {
        propsData: { characterId }
    })
    expect(wrapper.props('characterId')).toMatch(characterId)
})
