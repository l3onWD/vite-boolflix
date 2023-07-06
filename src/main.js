import { createApp } from 'vue';
import App from './App.vue';

/*** FONT AWESOME ***/
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faRegularStar, faSolidStar, faSpinner, faSearch);


createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app');
