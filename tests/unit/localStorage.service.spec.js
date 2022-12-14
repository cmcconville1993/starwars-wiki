import { Write, Read } from '@/services/localStorage.service'

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