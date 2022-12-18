import { IsCharacterLiked, LikeCharacter, GetAllLikedCharacters, UnlikeCharacter } from '@/services/like-character.service'
import * as LocalStorageService from '@/services/localStorage.service'
import * as CharacterService from '@/services/character.service'
import { MOCK_CHARACTER_1, MOCK_CHARACTER_LIST_PAGE_1 } from '../__mocks__/character'
import { Character } from '@/models/Character'

test('Like character', async () => {
    //Arrange
    const spy = jest.spyOn(LocalStorageService, 'WriteObject')
    jest.spyOn(CharacterService, 'GetCharacterByID').mockResolvedValue(MOCK_CHARACTER_1)

    //Act
    await LikeCharacter(1)

    //Assert
    expect(spy).toBeCalledWith(1, new Character(1, 'test-name-1'))
})

test('Unike character', async () => {
    //Arrange
    const spy = jest.spyOn(LocalStorageService, 'Remove')
    jest.spyOn(CharacterService, 'GetCharacterByID').mockResolvedValue(MOCK_CHARACTER_1)

    //Act
    UnlikeCharacter(888)

    //Assert
    expect(spy).toBeCalledWith(888)
})

test('Get a list of all liked characters', () => {
    //Arrange
    const spy = jest.spyOn(LocalStorageService, 'GetAllFromLocalStorage')
        .mockReturnValue(MOCK_CHARACTER_LIST_PAGE_1)

    //Act
    const result = GetAllLikedCharacters()

    //Assert
    expect(spy).toHaveBeenCalledTimes(1)
    expect(result).toBe(MOCK_CHARACTER_LIST_PAGE_1)
})

test('Is Character liked - should return true', () => {
    //Arrange
    jest.spyOn(LocalStorageService, 'Read').mockReturnValue(MOCK_CHARACTER_1)

    //Act
    const result = IsCharacterLiked()

    //Assert
    expect(result).toBeTruthy()
})

test('Is Character liked - should return false', () => {
    //Arrange
    jest.spyOn(LocalStorageService, 'Read').mockReturnValue(undefined)

    //Act
    const result = IsCharacterLiked()

    //Assert
    expect(result).toBeFalsy()
})