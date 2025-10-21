
import { createApp } from 'vue'
import App from './App.vue'

import CompTwo from './components/CompTwo.vue';

const app = createApp(App);
app.component('comp-two', CompTwo)
app.mount('#app')
