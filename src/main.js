import Vue from 'vue'
// import App from './App.vue'

const HelloVueApp = {
	data() {
		return {
			message: 'Hello Vue!!'
		}
	}
}

Vue.createApp(HelloVueApp).mount('#hello-vue')
