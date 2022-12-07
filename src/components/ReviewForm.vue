<template>
    <div>
    </div>
</template>
  
<script>
import { validationMixin } from 'vuelidate'
import {
    required,
    // email,
    minLength,
    maxLength
} from 'vuelidate/lib/validators'

export default {
    props: {
        characterId: String
    },
    mixins: [validationMixin],
    data: () => ({
        form: {
            firstName: null,
            lastName: null,
            gender: null,
            age: null,
            email: null,
        },
        userSaved: false,
        sending: false,
        lastUser: null
    }),
    validations: {
        form: {
            name: {
                required,
                minLength: minLength(3)
            },
            dateWatched: {
                required,
                minLength: minLength(3)
            },
            review: {
                required,
                maxLength: maxLength(3)
            },
            rating: {
                required
            }
        }
    },
    methods: {
    }
}
</script>
  
