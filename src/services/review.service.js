import axios from 'axios';

const BREAKING_BAD_REVIEWS_ENDPOINT = 'https://breakingbadapi.com/api/reviews/'

/**
 * Return a list of all characters
 */
export async function AddCharacterReview(rName, rDateWatched, rReview, rRating) {
    let review = { name: rName, dateWatched: rDateWatched, review: rReview, rating: rRating };

    return await axios
        .post(BREAKING_BAD_REVIEWS_ENDPOINT, review)
}