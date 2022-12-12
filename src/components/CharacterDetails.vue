<template>
    <div id="character-details-container">
        <div><b>Name: </b>{{ info.name }}</div>
        <div><b>Birth year: </b>{{ info.birth_year }}</div>
        <div><b>Gender: </b>{{ info.gender }}</div>
        <div><b>Hair Colour: </b>{{ info.hair_color }}</div>
        <div><b>Height: </b>{{ info.height }}</div>
        <div><b>Skin Colour: </b>{{ info.skin_color }}</div>
        <div><b>Mass: </b>{{ info.mass }}</div>
    </div>
</template>
  
<script>
import { GetCharacterByID } from '@/services/character.service';

export default {
    data: () => ({
        info: Object,
        characterId: null,
        page: null
    }),
    methods: {
        async getCharacterByID() {
            let character = await GetCharacterByID(this.characterId);
            if (character == null) {
                return
            }

            this.info = character

        }
    },
    mounted() {
        this.characterId = this.$route.params.id
        this.page = this.$route.params.page

        this.getCharacterByID(this.characterId)
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
    text-align: start;
    margin: 15px;
}
</style>
  