import { mount, shallowMount } from '@vue/test-utils'
import ReviewForm from '@/components/ReviewForm.vue'
import * as ReviewService from '@/services/review.service';

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
    const spy = jest.spyOn(ReviewService, 'AddCharacterReview')
        .mockResolvedValue({ status: 201 })

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
    await wrapper.find('form').trigger('submit')

    //Assert
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('test-name', '2021-12-12', 'test-review', 5)
    expect(wrapper.vm.isModalVisible).toEqual(true)
    expect(wrapper.vm.apiResponseInfo).toEqual("Review successfully added!")
})

test('submitReview - unsuccessful - API Issue', async () => {
    const spy = jest.spyOn(ReviewService, 'AddCharacterReview')
        .mockRejectedValue({ status: 500 })

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
    await wrapper.find('form').trigger('submit')

    //Assert
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('test-name', '2021-12-12', 'test-review', 5)
    expect(wrapper.vm.isModalVisible).toEqual(true)
    expect(wrapper.vm.apiResponseInfo).toEqual("Error submitting character review...")
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
    expect(wrapper.vm.apiResponseInfo).toBeNull()
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
    expect(wrapper.vm.apiResponseInfo).toBeNull()
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
    expect(wrapper.vm.apiResponseInfo).toBeNull()
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
    expect(wrapper.vm.apiResponseInfo).toBeNull()
})
