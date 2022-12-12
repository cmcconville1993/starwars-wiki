<template>
    <div>
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
        </div>
        <div>
            <h3>Films</h3>
            <ul v-for="film in films" :key="film">
                {{ film }}
            </ul>
        </div>
    </div>
</template>
  
<script>
import { GetCharacterByID } from '@/services/character.service';
import { GetFilmTitleByID } from '@/services/film.service';

export default {
    data: () => ({
        info: Object,
        films: [],
        characterId: null,
        page: null
    }),
    methods: {
        async getCharacterByID() {
            let character = await GetCharacterByID(this.characterId);
            if (character == null) {
                console.log('Navigate from here to /')
                return
            }

            this.info = character

        },
        async getCharacterFilmTitles() {
            console.log(this.info.films)
            let titles = []
            for (const film of this.info.films) {
                var id = film.substring(film.length - 2, film.length - 1)
                const filmName = await GetFilmTitleByID(id)
                titles.push(filmName)
            }
            return titles
        }
    },
    async mounted() {
        this.characterId = this.$route.params.id
        this.page = this.$route.params.page
        await this.getCharacterByID()
        this.films = await this.getCharacterFilmTitles()
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
    display: inline-block;
    text-align: start;
    margin: 15px;
}

#character-film-container {
    text-align: start;
    margin: 15px;
    width: auto;
}
</style>
  