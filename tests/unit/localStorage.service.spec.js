import { Write, Read, Remove, GetAllFromLocalStorage } from '@/services/localStorage.service'

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

test('read from client-side storage', () => {
    //Arrange
    localStorage.setItem('key-1', 'value-1')

    //Act
    const result = Read('key-1')

    //Assert
    expect(result).toBe('value-1')
})

test('remove from client-side storage', () => {
    //Arrange
    localStorage.setItem('key-1', 'value-1')

    //Act
    Remove('key-1')


    //Assert
    const result = localStorage.getItem('key-1')
    expect(result).toBeNull()
})

test('Get all from client-side storage', () => {
    //Arrange
    localStorage.setItem('key-1', 'value-1')
    localStorage.setItem('key-2', 'value-2')
    localStorage.setItem('key-3', 'value-3')
    localStorage.setItem('key-4', 'value-4')

    //Act
    const allLiked = GetAllFromLocalStorage()

    //Assert
    expect(allLiked).toStrictEqual({ "key-1": "value-1", "key-2": "value-2", "key-3": "value-3", "key-4": "value-4" })
})

beforeEach(() => {
    window.localStorage.clear();
});