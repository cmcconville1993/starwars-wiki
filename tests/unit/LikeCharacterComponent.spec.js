import LikeCharacterComponentVue from "@/components/LikeCharacterComponent.vue"
import { shallowMount } from "@vue/test-utils"
import * as LikeCharacterService from '@/services/like-character.service'

jest.spyOn(LikeCharacterService, 'LikeCharacter')


test('Like character', () => {
    //Arrange
    jest.spyOn(LikeCharacterService, 'IsCharacterLiked').mockReturnValue(false)

    const spy = jest.spyOn(LikeCharacterService, 'LikeCharacter')
    const wrapper = shallowMount(LikeCharacterComponentVue, {
        propsData: { characterId: 123 }
    })

    //Act
    wrapper.vm.ToggleLikedCharacter()

    //Assert
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(123)
})

test('Unlike character', () => {
    //Arrange
    jest.spyOn(LikeCharacterService, 'IsCharacterLiked').mockReturnValue(true)
    const spy = jest.spyOn(LikeCharacterService, 'UnlikeCharacter')
    const wrapper = shallowMount(LikeCharacterComponentVue, {
        propsData: { characterId: 321 }
    })

    //Act
    wrapper.vm.ToggleLikedCharacter()

    //Assert
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(321)
})

test('Is Character liked - should return true', () => {
    //Arrange
    jest.spyOn(LikeCharacterService, 'IsCharacterLiked').mockReturnValue(true)
    const wrapper = shallowMount(LikeCharacterComponentVue)

    //Act
    wrapper.IsCharacterLiked

    //Assert
    expect(wrapper.vm.liked).toBeTruthy()
})

test('Is Character liked - should return false', () => {
    //Arrange
    jest.spyOn(LikeCharacterService, 'IsCharacterLiked').mockReturnValue(false)
    const wrapper = shallowMount(LikeCharacterComponentVue)

    //Act
    wrapper.IsCharacterLiked

    //Assert
    expect(wrapper.vm.liked).toBeFalsy()
})