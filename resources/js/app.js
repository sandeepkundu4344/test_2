// app.js

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import { ToastPlugin } from 'bootstrap-vue';
import Toaster from 'v-toaster';
import 'v-toaster/dist/v-toaster.css';
Vue.use(Toaster, {timeout: 5000});
Vue.use(ToastPlugin)
Vue.use(VueRouter);
Vue.use(BootstrapVue)
window.Vue =Vue;
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import Task from './components/Task.vue';
const routes = [
{
  name: 'task',
  path: '/',
  component: Task
}
];

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');