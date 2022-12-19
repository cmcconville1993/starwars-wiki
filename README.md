# starwars-wiki

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Unit tests
```
npm run test:unit
```
Unit tests for Components/Services.
Located in Tests/Unit

### Vuex
Vuex implemented on CharacterList page. This is being used to track the state of the current page.

Configured in main.js, getters and mutations are stored in getters.js and mutations.js

### Leave feedback
Feedback form added to the character details page.
Includes validation for each of the input feilds.

Functionallity to clear the form.

When the valid form has been completed, as there is no valid API endpoint this will result in a fail and display an error message to the user.

If this was to be successful, a succcess error message would be displayed and the form would be completed (demonstrated in unit tests)

### Like Character functionallity
Like characters can be viewed from selecting the Liked characters tab at the top of the page.

User can navigate from this page to view the details of that character or to unlike the character which will remove the option from the list.

### Routing
Routing implemented main.js.

User can navigate to the character details page with the characterId in the url




