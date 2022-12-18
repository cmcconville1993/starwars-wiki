import { MOCK_CHARACTER_LIST_PAGE_1 } from '../__mocks__/character'
import { mount, shallowMount } from '@vue/test-utils'
import CharacterList from '@/components/CharacterList.vue'
import * as CharacterService from '@/services/character.service'
import flushPromises from 'flush-promises'

import Vue from 'vue'
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)


test('Gets all characters when mounted', async () => {
    //Arrange
    var spy = jest.spyOn(CharacterService, 'GetAllCharacters')
        .mockResolvedValue(MOCK_CHARACTER_LIST_PAGE_1)

    //Act
    let wrapper = shallowMount(CharacterList, {
        stubs: ['router-link']
    })

    await flushPromises()

    //Assert
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(1)
    expect(wrapper.vm.characterList.length).toBe(10)
})

test('Goes to next page', async () => {
    //Arrange
    var spy = jest.spyOn(CharacterService, 'GetAllCharacters')
        .mockResolvedValue(MOCK_CHARACTER_LIST_PAGE_1)

    //Act
    let wrapper = shallowMount(CharacterList, {
        stubs: ['router-link']
    })

    await wrapper.find('#next-button').trigger('click')

    //Assert
    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy).toHaveBeenCalledWith(1)
    expect(spy).toHaveBeenCalledWith(2)
    expect(wrapper.vm.pageNumber).toBe(2)
})

test('Goes to previous page', async () => {
    //Arrange
    var spy = jest.spyOn(CharacterService, 'GetAllCharacters')
        .mockResolvedValue(MOCK_CHARACTER_LIST_PAGE_1)

    //Act
    let wrapper = mount(CharacterList, {
        stubs: ['router-link'],
        data: () => ({
            pageNumber: 8
        })

    })

    await wrapper.find('#previous-button').trigger('click')

    //Assert
    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy).toHaveBeenCalledWith(8)
    expect(spy).toHaveBeenCalledWith(7)
    expect(wrapper.vm.pageNumber).toBe(7)
})

test('Retrieve list of liked characters', async () => {
    jest.spyOn(CharacterService, 'GetAllCharacters')
        .mockResolvedValue(MOCK_CHARACTER_LIST_PAGE_1)

    //Act
    let wrapper = mount(CharacterList, {
        stubs: ['router-link'],
        data: () => ({
            pageNumber: 8
        })

    })

    await flushPromises()

    //Assert
    expect(wrapper.vm.characterList).toBe(MOCK_CHARACTER_LIST_PAGE_1)
})
