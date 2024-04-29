import 'bootstrap/js/index.umd';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import { createApp } from 'vue';
import { router } from './components/js/router';
import './style/general.scss';

import App from './App.vue';

createApp(App).use(router).mount('#app');
