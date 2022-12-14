
export function Write(key, value) {
    localStorage.setItem(key, value)
}

export function Read(key) {
    return localStorage.getItem(key)
}