
export function Write(key, value) {
    localStorage.setItem(key, value)
}

export function WriteObject(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function Read(key) {
    return localStorage.getItem(key)
}

export function ReadObject(key) {
    return JSON.parse(localStorage.getItem(key))
}

export function Remove(key) {
    return localStorage.removeItem(key)
}

export function GetAllFromLocalStorage() {
    const likedCharacters = []
    const keys = Object.keys(localStorage)

    keys.forEach(key => {
        likedCharacters.push(JSON.parse(localStorage.getItem(key)))
    });
    return likedCharacters
}