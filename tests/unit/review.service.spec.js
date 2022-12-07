import axios from 'axios'
import { AddCharacterReview } from '../../src/services/review.service';


test('Add character reviews - successful', async () => {
    //Arrange
    jest.spyOn(axios, 'post').mockResolvedValue({ status: 200 })

    //Action
    await AddCharacterReview('test-name', 'test-date-watched', 'test-review', 'test-rating').then(response => {
        // expect(response).toHaveLength(3)
    })

    //Assert
    let expectedBody = { name: "test-name", dateWatched: "test-date-watched", review: "test-review", rating: "test-rating" };

    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(axios.post).toHaveBeenCalledWith('https://breakingbadapi.com/api/reviews/', expectedBody)
})

test('Add character reviews - unsuccessful', async () => {
    //Arrange
    jest.spyOn(axios, 'post').mockRejectedValue({ status: 500 })

    //Action
    await AddCharacterReview('test-name', 'test-date-watched', 'test-review', 'test-rating').then(response => {
        // expect(response).toHaveLength(3)
    })

    //Assert
    let expectedBody = { name: "test-name", dateWatched: "test-date-watched", review: "test-review", rating: "test-rating" };

    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(axios.post).toHaveBeenCalledWith('https://breakingbadapi.com/api/reviews/', expectedBody)
})

afterEach(() => {
    jest.clearAllMocks();
});
