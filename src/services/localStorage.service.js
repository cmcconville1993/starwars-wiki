
export function Write(key, value) {
    localStorage.setItem(key, value)
}

export function Read(key) {
    return localStorage.getItem(key)
}

export function Remove(key) {
    return localStorage.removeItem(key)
}

export function GetAllFromLocalStorage() {
    const likedCharacters = { ...localStorage };
    return likedCharacters
}