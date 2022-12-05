<template>
    <div>
        <img v-bind:src="info.img" />
        <div>{{ info.name }}</div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            info: null
        }
    },
    mounted() {
        axios
            .get('https://breakingbadapi.com/api/characters/1')
            .then(response => {
                console.log('yupppaaaa')
                this.info = response.data[0]
                console.log(JSON.stringify(this.details))
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
</style>
  