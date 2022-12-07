import { shallowMount } from '@vue/test-utils'
import ReviewForm from '@/components/CharacterDetails.vue'

test('stores character ID when passed into props', () => {
    const characterId = "123"
    const wrapper = shallowMount(ReviewForm, {
        propsData: { characterId }
    })
    expect(wrapper.props('characterId')).toMatch(characterId)
})

test('Clear form', () => {
    throw new Error('Not Implemented')
})

test('submit feedback - successful', () => {
    throw new Error('Not Implemented')
})

test('submit feedback - unsuccessful - no name provided', () => {
    throw new Error('Not Implemented')
})

test('submit feedback - unsuccessful - no review provided', () => {
    throw new Error('Not Implemented')
})

test('submit feedback - unsuccessful - no date watched provided', () => {
    throw new Error('Not Implemented')
})

test('submit feedback - unsuccessful - no rating provided', () => {
    throw new Error('Not Implemented')
})

// Global way to do this? 
afterEach(() => {
    jest.clearAllMocks();
});
