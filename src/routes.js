import CharacterDetails from '@/components/CharacterDetails.vue'
import CharacterList from '@/components/CharacterList.vue'
import ReviewForm from '@/components/ReviewForm.vue'
import PageNotFound from '@/components/PageNotFound.vue'
import LikedCharacterListVue from './components/LikedCharacterList.vue'

export const routes = [
    { path: '/', component: CharacterList },
    { path: '/character-details/:id', component: CharacterDetails, name: 'characterDetails' },
    { path: '/character-review', component: ReviewForm },
    { path: '/liked-characters', component: LikedCharacterListVue },
    {
      path: '/:catchAll(.*)*', name: "PageNotFound", component: PageNotFound,
    },
  ]