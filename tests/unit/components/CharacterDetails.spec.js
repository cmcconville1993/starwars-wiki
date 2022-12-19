import { MOCK_CHARACTER_1 } from '../../__mocks__/character'
import { shallowMount } from '@vue/test-utils'
import CharacterDetails from '@/components/CharacterDetails.vue'
import * as CharacterService from '@/services/character.service'
import * as FilmService from '@/services/film.service'
import flushPromises from 'flush-promises'

import Vue from 'vue'
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)

jest.spyOn(CharacterService, 'GetCharacterByID')
    .mockResolvedValue(MOCK_CHARACTER_1)

test('stores character ID when passed into props', async () => {
    //Arrange
    const characterId = "123"

    var spy = jest.spyOn(CharacterService, 'GetCharacterByID')
        .mockResolvedValue(MOCK_CHARACTER_1)

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
    const characterId = "123"

    //Arrange
    var filmSvcSpy = jest.spyOn(FilmService, 'GetFilmTitleByID')
        .mockResolvedValueOnce("test-film-1")
        .mockResolvedValueOnce("test-film-2")
        .mockResolvedValueOnce("test-film-3")
        .mockResolvedValueOnce("test-film-4")


    const $route = {
        fullPath: 'full/path',
        params: {
            id: characterId
        }
    }

    //Act
    shallowMount(CharacterDetails, {
        mocks: {
            $route
        }
    })

    await flushPromises()

    //Assert
    expect(filmSvcSpy).toHaveBeenCalledTimes(4)
    expect(filmSvcSpy).toHaveBeenCalledWith("2")
    expect(filmSvcSpy).toHaveBeenCalledWith("4")
    expect(filmSvcSpy).toHaveBeenCalledWith("6")
    expect(filmSvcSpy).toHaveBeenCalledWith("8")
})
