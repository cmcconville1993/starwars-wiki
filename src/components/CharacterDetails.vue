<template>
    <div>
        <img v-bind:src="info.img" />
        <div>{{ info.name }}</div>
    </div>
</template>
  
<script>

import { GetCharacterByID } from '../services/character.service';


export default {
    props: {
        characterId: String
    },
    data() {
        return {
            info: this.getCharacterByID()
        }
    },
    methods: {
        getCharacterByID() {
            return GetCharacterByID(this.characterId);
        }
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
</style>
  