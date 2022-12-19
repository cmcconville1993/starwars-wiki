<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons" />
<template>
    <div id="review-form-container">
        <form novalidate class="md-layout" @submit.prevent="validateAndSubmit">
            <md-card-content>
                <h2>Feedback</h2>

                <div class="md-layout">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('name')">
                            <label for="name">Name:</label>
                            <md-input name="name" id="name" autocomplete="given-name" v-model="form.name"
                                :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.name.required">Name required</span>
                            <span class="md-error" v-else-if="!$v.form.name.minlength">Invalid name</span>
                        </md-field>
                    </div>
                </div>

                <div class="md-layout">
                    <div class="md-layout-item">
                        <md-field :class="getValidationClass('dateWatched')">
                            <label for="dateWatched">Date watched:</label>
                            <md-datepicker name="dateWatched" id="dateWatched" v-model="form.dateWatched"
                                :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.dateWatched.required">Date Watched required</span>
                        </md-field>
                    </div>

                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('rating')">
                            <label for="rating">Rating:</label>
                            <md-select name="rating" id="rating" v-model="form.rating" :disabled="sending">
                                <md-option value="1">1</md-option>
                                <md-option value="2">2</md-option>
                                <md-option value="3">3</md-option>
                                <md-option value="4">4</md-option>
                                <md-option value="5">5</md-option>
                                <md-option value="6">6</md-option>
                                <md-option value="7">7</md-option>
                                <md-option value="8">8</md-option>
                                <md-option value="9">9</md-option>
                                <md-option value="10">10</md-option>
                            </md-select>
                            <span class="md-error" v-if="!$v.form.rating.required">Rating required</span>
                        </md-field>
                    </div>
                </div>

                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('review')">
                            <label for="review">Review:</label>
                            <md-textarea name="review" id="review" v-model="form.review" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.review.required">Review required</span>
                        </md-field>
                    </div>
                </div>

                <md-card-actions>
                    <md-button @click="clearForm" id="clearBtn" class="md-secondary"
                        :disabled="sending">Clear</md-button>
                    <md-button type="submit" class="md-primary" :disabled="sending">Submit review</md-button>
                </md-card-actions>
            </md-card-content>

        </form>

        <!-- Modal -->
        <DialogComponent v-show="isModalVisible" @close="closeModal" header="Test new header CMC">
            <template v-slot:body>
                {{ apiResponseInfo }}
            </template>
        </DialogComponent>
    </div>
</template>
  
<script>
import { validationMixin } from 'vuelidate'
import {
    required,
} from 'vuelidate/lib/validators'
import { AddCharacterReview } from '../services/review.service';
import DialogComponent from '@/components/DialogComponent.vue';

export default {
    props: {
        characterId: String
    },
    mixins: [validationMixin],
    components: {
        DialogComponent
    },
    data: () => ({
        form: {
            name: null,
            dateWatched: null,
            review: null,
            rating: null,
        },
        userSaved: false,
        sending: false,
        isModalVisible: false,
        apiResponseInfo: null
    }),
    validations: {
        form: {
            name: {
                required
            },
            dateWatched: {
                required
            },
            review: {
                required
            },
            rating: {
                required
            }
        }
    },
    methods: {
        getValidationClass(fieldName) {
            const field = this.$v.form[fieldName]

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
        validateAndSubmit() {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                this.submit()
            }
        },
        async submit() {
            await AddCharacterReview(this.form.name, this.form.dateWatched,
                this.form.review, this.form.rating).then(() => {
                    this.showModal('Review successfully added!')
                    this.clearForm()
                }).catch(() => {
                    this.showModal("Error submitting character review...")
                })
        },
        clearForm() {
            this.$v.$reset()
            this.form.name = null
            this.form.rating = null
            this.form.review = null
            this.form.dateWatched = null
        },
        showModal(modalBody) {
            this.apiResponseInfo = modalBody
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
}

</script>

<style scoped>
.md-card-content {
    width: 100%;
}
</style>
  
