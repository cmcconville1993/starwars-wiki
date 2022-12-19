import { Write, WriteObject, Read, ReadObject, Remove, GetAllFromLocalStorage } from '@/services/localStorage.service'
import { MOCK_CHARACTER_1, MOCK_CHARACTER_2, MOCK_CHARACTER_3 } from '../../__mocks__/character'

test('Write to client-side storage', () => {
    //Arrange
    const key = 'key-1'
    const value = 'value-1'

    //Act
    Write(key, value)

    //Assert
    const result = localStorage.getItem('key-1')
    expect(result).toBe('value-1')
})

test('Write object to client-side storage', () => {
    //Arrange
    const key = 'key-1'
    const value = MOCK_CHARACTER_1

    //Act
    WriteObject(key, value)

    //Assert
    const result = localStorage.getItem('key-1')
    expect(result).toBe(JSON.stringify(MOCK_CHARACTER_1))
})

test('read from client-side storage', () => {
    //Arrange
    localStorage.setItem(1, 'test-name-1')

    //Act
    const result = Read(1)

    //Assert
    expect(result).toBe('test-name-1')
})

test('read object from client-side storage', () => {
    //Arrange
    localStorage.setItem('1', JSON.stringify(MOCK_CHARACTER_1))

    //Act
    const result = ReadObject('1')

    //Assert
    expect(result).toStrictEqual(MOCK_CHARACTER_1)
})

test('remove from client-side storage', () => {
    //Arrange
    localStorage.setItem('key-1', JSON.stringify(MOCK_CHARACTER_1))

    //Act
    Remove('key-1')

    //Assert
    const result = localStorage.getItem('key-1')
    expect(result).toBeNull()
})

test('Get all from client-side storage', () => {
    //Arrange
    localStorage.setItem('1', JSON.stringify(MOCK_CHARACTER_1))
    localStorage.setItem('2', JSON.stringify(MOCK_CHARACTER_2))
    localStorage.setItem('3', JSON.stringify(MOCK_CHARACTER_3))

    //Act
    const allLiked = GetAllFromLocalStorage()

    //Assert
    expect(allLiked.length).toBe(3)
})

beforeEach(() => {
    window.localStorage.clear();
});