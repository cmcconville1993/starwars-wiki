<template>
    <div>
        <div id="character-list-container">
            <div v-if="characterList">
                <li v-for="character in characterList" :key="character.name">
                    <router-link :to="{
                        name: 'characterDetails',
                        params: { id: (character.id) }
                    }">
                        {{ character.name }}
                    </router-link>
                </li>
            </div>
            <md-progress-bar v-else md-mode="indeterminate"></md-progress-bar>

        </div>
        <div id="navigation-buttons">
            <button v-if="(pageNumber != 1)" id="previous-button" @click="previousPage">Previous</button>
            <button v-if="(pageNumber != 9)" id="next-button" @click="nextPage">Next</button>
        </div>
    </div>
</template>
  
<script>
import { GetAllCharacters } from '@/services/character.service';

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
            this.characterList = await GetAllCharacters(this.pageNumber)
        },
        nextPage() {
            this.characterList = null
            this.pageNumber++
            this.getAllCharacters()
        },
        previousPage() {
            this.characterList = null
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

#character-list-container {
    margin: auto;
    width: 80%;
    padding: 10px;
}
</style>
  