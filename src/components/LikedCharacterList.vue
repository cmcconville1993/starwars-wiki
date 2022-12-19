<template>
    <div id="character-list-container">
        <div v-if="characterList">
            <li v-for="character in characterList" :key="character.name">
                <router-link :to="{
                    name: 'characterDetails',
                    params: { id: (character.id) }
                }">
                    <div class="character-list-item"> {{ character.name }} </div>
                </router-link>
            </li>
        </div>
        <md-progress-bar v-else md-mode="indeterminate"></md-progress-bar>

    </div>
</template>
  
<script>
import { GetAllLikedCharacters } from '@/services/like-character.service';

export default {
    name: 'CharacterList',
    data: () => ({
        characterList: null,

        pageNumber: 1
    }),
    mounted() {
        this.getAllCharacters()
    },
    methods: {
        async getAllCharacters() {
            this.characterList = GetAllLikedCharacters()
        }
    }
}
</script>
  
<style scoped>
.navigation-buttons {
    text-align: center;
    position: relative;
    left: 100px;
    height: 200px;
    width: 500px;
}

#character-list-container {
    padding: 10px;
}
</style>
  