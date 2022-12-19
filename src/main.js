import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import CharacterDetails from '@/components/CharacterDetails.vue'
import CharacterList from '@/components/CharacterList.vue'
import ReviewForm from '@/components/ReviewForm.vue'
import PageNotFound from '@/components/PageNotFound.vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import LikedCharacterListVue from './components/LikedCharacterList.vue'


Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: CharacterList },
  { path: '/character-details/:id', component: CharacterDetails, name: 'characterDetails' },
  { path: '/character-review/:id', component: ReviewForm },
  { path: '/liked-characters', component: LikedCharacterListVue },
  {
    path: '/:catchAll(.*)*', name: "PageNotFound", component: PageNotFound,
  },
]

const router = new VueRouter({
  routes
})

// Required, VueMaterials bug
// https://github.com/vuematerial/vue-material/issues/2285
Vue.component('MdSelect', Vue.options.components.MdSelect.extend({
  methods: {
    isInvalidValue: function isInvalidValue() {
      return this.$el.validity ? this.$el.validity.badInput : this.$el.querySelector('input').validity.badInput
    }
  }
}))

export const mutations = {
  updateCurrentPage(state, n) {
    state.currentPage = n
  }
}

export const store = new Vuex.Store({
  state: {
    likedCharacters: [],
    currentPage: 1
  },
  mutations: mutations,
  getters: {
    getPage: (state) => {
      return state.currentPage
    }
  }
});

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
