<template>
    <div>
        <div v-if="(info && films)">
            <h2>{{ info.name }}</h2>
            <div class="character-details-container">
                <div style="overflow-x:auto;">
                    <table>
                        <th>Birth Year</th>
                        <th>Gender</th>
                        <th>Hair Colour</th>
                        <th>Height</th>
                        <th>Skin Colour</th>
                        <th>Mass</th>
                        <tr>
                            <td>{{ info.birth_year }}</td>
                            <td>{{ info.gender }}</td>
                            <td>{{ info.hair_color }}</td>
                            <td>{{ info.height }}</td>
                            <td>{{ info.skin_color }}</td>
                            <td>{{ info.mass }}</td>
                        </tr>
                    </table>
                </div>

                <div>
                    <h3>Films</h3>
                    <ul v-for="film in films" :key="film">
                        {{ film }}
                    </ul>
                </div>
            </div>

            <details>
                <summary>Leave chracter feedback</summary>
                <ReveiwForm v-bind:character-id="characterId" />
            </details>

            <LikeCharacterComponent v-bind:character-id="characterId" />
        </div>
        <md-progress-bar v-else md-mode="indeterminate"></md-progress-bar>
    </div>
</template>
  
<script>
import { GetCharacterByID } from '@/services/character.service';
import { GetFilmTitleByID } from '@/services/film.service';
import ReveiwForm from '@/components/ReviewForm.vue'
import LikeCharacterComponent from '@/components/LikeCharacterComponent.vue'

export default {
    data: () => ({
        info: null,
        films: null,
        characterId: null,
        page: null
    }),
    components: {
        ReveiwForm,
        LikeCharacterComponent
    },
    methods: {
        async getCharacterByID() {
            let character = null
            await GetCharacterByID(this.characterId)
                .then(res => character = res)
            return character
        },
        async getCharacterFilmTitles() {
            let titles = []
            for (const film of this.info.films) {
                var id = film.substring(film.length - 2, film.length - 1)
                await GetFilmTitleByID(id).then(res => {
                    titles.push(res)
                })
            }
            return titles
        }
    },
    async mounted() {
        this.characterId = this.$route.params.id
        this.page = this.$route.params.page
        this.info = await this.getCharacterByID()
        this.films = await this.getCharacterFilmTitles()
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

.character-details-container {
    margin: 35px
}

#character-details-container div {
    max-width: 300px;
    text-align: start;
    margin: 15px;
}

table {
    width: 100%;
}
</style>
  