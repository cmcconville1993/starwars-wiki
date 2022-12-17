import { IsCharacterLiked, LikeCharacter, UnlikeCharacter } from '@/services/like-character.service'
import * as LocalStorageService from '@/services/localStorage.service'
import * as CharacterService from '@/services/character.service'
import { MOCK_CHARACTER } from '../__mocks__/character'

test('Like character', async () => {
    //Arrange
    const spy = jest.spyOn(LocalStorageService, 'Write')
    jest.spyOn(CharacterService, 'GetCharacterByID').mockResolvedValue(MOCK_CHARACTER)

    //Act
    await LikeCharacter(999)

    //Assert
    expect(spy).toBeCalledWith(999, 'test-name-1')
})

test('Unike character', async() => {
    //Arrange
    const spy = jest.spyOn(LocalStorageService, 'Remove')
    jest.spyOn(CharacterService, 'GetCharacterByID').mockResolvedValue(MOCK_CHARACTER)

    //Act
    UnlikeCharacter(888)

    //Assert
    expect(spy).toBeCalledWith(888)
})

test('Is Character liked - should return true', () => {
    //Arrange
    jest.spyOn(LocalStorageService, 'Read').mockReturnValue('test-name')

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