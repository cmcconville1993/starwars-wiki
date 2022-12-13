<template>
    <div v-if="info">
        <div id="character-details-container">
            <h3>Character Details</h3>
            <div><b>Name: </b>
                <br />
                {{ info.name }}
            </div>
            <div><b>Birth year: </b>
                <br />
                {{ info.birth_year }}
            </div>
            <div><b>Gender: </b>
                <br />
                {{ info.gender }}
            </div>
            <div><b>Hair Colour: </b>
                <br />
                {{ info.hair_color }}
            </div>
            <div><b>Height: </b>
                <br />
                {{ info.height }}
            </div>
            <div><b>Skin Colour: </b>
                <br />{{ info.skin_color }}
            </div>
            <div><b>Mass: </b>
                <br />{{ info.mass }}
            </div>

            <div v-if="films">
                <h3>Films</h3>
                <ul v-for="film in films" :key="film">
                    {{ film }}
                </ul>
            </div>
        </div>

        <ReveiwForm />
    </div>
</template>
  
<script>
import { GetCharacterByID } from '@/services/character.service';
import { GetFilmTitleByID } from '@/services/film.service';
import ReveiwForm from '@/components/ReviewForm.vue'

export default {
    data: () => ({
        info: null,
        films: null,
        characterId: null,
        page: null
    }),
    components: {
        ReveiwForm
    },
    methods: {
        async getCharacterByID() {

            // this.info = character
            await GetCharacterByID(this.characterId)
                .then(res => character = res)
            return character
        },
        async getCharacterFilmTitles() {
            let titles = []
            for (const film of this.info.films) {
                var id = film.substring(film.length - 2, film.length - 1)
                titles.push(await GetFilmTitleByID(id))
            }
            return titles
        }
    },
    async mounted() {
        this.characterId = this.$route.params.id
        this.page = this.$route.params.page
        this.info = await this.getCharacterByID()
        this.getCharacterFilmTitles().then(res => {
            this.films = res
        })
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
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


#character-details-container {
    vertical-align: middle;
}

#character-details-container div {
    max-width: 300px;
    text-align: start;
    margin: 15px;
}

#character-film-container {
    text-align: start;
    margin: 15px;
    width: auto;
}
</style>
  