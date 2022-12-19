import Vue from 'vue'
import { mutations } from '@/mutations'
import { getters } from '@/getters'
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        likedCharacters: [],
        currentPage: 1
    },
    mutations,
    getters
});