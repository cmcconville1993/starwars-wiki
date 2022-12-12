import { MOCK_CHARACTER } from '../__mocks__/character'
import { mount, shallowMount } from '@vue/test-utils'
import CharacterDetails from '@/components/CharacterDetails.vue'
import * as CharacterService from '@/services/character.service'
import * as FilmService from '@/services/film.service'

test('stores character ID when passed into props', async () => {
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

test('stores film titles for character from film API', async () => {
    //Arrange
    var characterSvcSpy = jest.spyOn(CharacterService, 'GetCharacterByID')
        .mockResolvedValue(MOCK_CHARACTER)
    var filmSvcSpy = jest.spyOn(FilmService, 'GetFilmTitleByID')
        .mockResolvedValueOnce("test-film-1")
        .mockResolvedValueOnce("test-film-2")
        .mockResolvedValueOnce("test-film-3")
        .mockResolvedValueOnce("test-film-4")

    const characterId = "123"

    const $route = {
        fullPath: 'full/path',
        params: {
            id: characterId
        }
    }

    //Act
    const wrapper = mount(CharacterDetails, {
        mocks: {
            $route
        }
    })

    //Assert
    expect(wrapper.vm.characterId).toEqual(characterId)
    expect(characterSvcSpy).toHaveBeenCalledTimes(1)
    expect(characterSvcSpy).toHaveBeenCalledWith("123")

    console.log(wrapper.vm.films)
    expect(wrapper.vm.films.lenght).toEqual(4)
    // expect(wrapper.vm.info.films.lenght).toEqual(4)
    expect(filmSvcSpy).toHaveBeenCalledTimes(4)
    expect(filmSvcSpy).toHaveBeenCalledWith("2")
    expect(filmSvcSpy).toHaveBeenCalledWith("4")
    expect(filmSvcSpy).toHaveBeenCalledWith("6")
    expect(filmSvcSpy).toHaveBeenCalledWith("8")

})
