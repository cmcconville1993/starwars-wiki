import { mount, shallowMount } from '@vue/test-utils'
import ReviewForm from '@/components/ReviewForm.vue'

//Needed, bug 
//https://github.com/vuematerial/vue-material/issues/695
import Vue from 'vue'
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)


test('stores character ID when passed into props', () => {
    const characterId = "123"
    const wrapper = mount(ReviewForm, {
        propsData: { characterId }
    })
    expect(wrapper.props('characterId')).toMatch(characterId)
})

test('Clear form', () => {
    //Arrange
    const wrapper = mount(ReviewForm, {
        propsData: { characterId: "123" },
        // mixins: [validationMixin],
        data: () => ({
            form: {
                name: 'test-name',
                dateWatched: '2021-12-12',
                review: 'test-review',
                rating: 5,
            }
        })
    })

    //Action
    wrapper.find('#clearBtn').trigger('click')

    //Assert
    expect(wrapper.vm.form.name).toBeNull()
    expect(wrapper.vm.form.dateWatched).toBeNull()
    expect(wrapper.vm.form.rating).toBeNull()
    expect(wrapper.vm.form.review).toBeNull()
})

test('submitReview - successful', async () => {
    //Arrange
    const spy = jest.spyOn(ReviewForm.methods, 'submit')

    const wrapper = shallowMount(ReviewForm, {
        propsData: { characterId: "123" },
        data: () => ({
            form: {
                name: 'test-name',
                dateWatched: '2021-12-12',
                review: 'test-review',
                rating: 5,
            }
        })
    })

    //Action
    wrapper.find('form').trigger('submit')

    //Assert
    expect(spy).toHaveBeenCalledTimes(1)
})

test('submitReview - unsuccessful - API Issue', async () => {
    throw new Error('Not Implemented')
})

test('submitReview - unsuccessful - no name provided', () => {
    //Arrange
    const spy = jest.spyOn(ReviewForm.methods, 'submit')

    const wrapper = shallowMount(ReviewForm, {
        propsData: { characterId: "123" },
        data: () => ({
            form: {
                dateWatched: '2021-12-12',
                review: 'test-review',
                rating: 5,
            }
        })
    })

    //Action
    wrapper.find('form').trigger('submit')

    //Assert
    expect(spy).not.toHaveBeenCalled()
})

test('submitReview - unsuccessful - no review provided', () => {
    //Arrange
    const spy = jest.spyOn(ReviewForm.methods, 'submit')

    const wrapper = shallowMount(ReviewForm, {
        data: () => ({
            form: {
                name: 'test-name',
                dateWatched: '2021-12-12',
                rating: 5,
            }
        })
    })

    //Action
    wrapper.find('form').trigger('submit')

    //Assert
    expect(spy).not.toHaveBeenCalled()
})

test('submitReview - unsuccessful - no date watched provided', () => {
    //Arrange
    const spy = jest.spyOn(ReviewForm.methods, 'submit')

    const wrapper = shallowMount(ReviewForm, {
        data: () => ({
            form: {
                name: 'test-name',
                review: 'test-review',
                rating: 5,
            }
        })
    })

    //Action
    wrapper.find('form').trigger('submit')

    //Assert
    expect(spy).not.toHaveBeenCalled()
})

test('submitReview - unsuccessful - no rating provided', () => {
    //Arrange
    const spy = jest.spyOn(ReviewForm.methods, 'submit')

    const wrapper = shallowMount(ReviewForm, {
        propsData: { characterId: "123" },
        data: () => ({
            form: {
                name: 'test-name',
                dateWatched: '2021-12-12',
                review: 'test-review',
            }
        })
    })

    //Action
    wrapper.find('form').trigger('submit')

    //Assert
    expect(spy).not.toHaveBeenCalled()
})

// Global way to do this? 
afterEach(() => {
    jest.clearAllMocks();
});
