import { WriteObject, Read, Remove, GetAllFromLocalStorage } from '@/services/localStorage.service'
import { GetCharacterByID } from '@/services/character.service'
import { Character } from '@/models/Character'

export async function LikeCharacter(id) {
    var character = await GetCharacterByID(id)
    WriteObject(id, new Character(id, character.name))
}

export function UnlikeCharacter(id) {
    Remove(id)
}

export function GetAllLikedCharacters() {
    return GetAllFromLocalStorage()
}

export function IsCharacterLiked(id) {
    const character = Read(id)
    return character != null ? true : false
}
