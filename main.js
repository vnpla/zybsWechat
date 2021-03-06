import Vue from 'vue'
import App from './App'
import store from './store'
import http from './common/js/config.js'

Vue.config.productionTip = false

Vue.prototype.$store = store;
Vue.prototype.$http = http;

Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
