<template>
    <div>
        <li v-for="character in characterList" :key="character.name">
            <router-link :to="{ name: 'characterDetails', params: { id: (character.id) } }">
                {{ character.name }}
            </router-link>
        </li>
        <div id="navigation-buttons">
            <md-button @click="previousPage">Previous</md-button>
            <md-button @click="nextPage">Next</md-button>
        </div>
    </div>
</template>
  
<script>
import { GetAllCharacters } from '@/services/character.service';

export default {
    name: 'CharacterList',
    data: () => ({
        characterList: Object,
        pageNumber: 1
    }),
    mounted() {
        this.getAllCharacters()
    },
    methods: {
        async getAllCharacters() {
            this.characterList = await GetAllCharacters(this.pageNumber)
        },
        nextPage() {
            this.pageNumber++
            this.getAllCharacters()
        },
        previousPage() {
            this.pageNumber--
            this.getAllCharacters()
        }
    }
}
</script>
  
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.navigation-buttons {
    text-align: center;
    position: relative;
    left: 100px;
    height: 200px;
    width: 500px;
}
</style>
  