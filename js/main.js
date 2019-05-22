import Vue from 'vue';
import Buefy from 'buefy'
import Bass from './Components/Base.vue'
// import 'buefy/dist/buefy.css'

Vue.use(Buefy)

new Vue({
  el: '#anchor',
  render: a => a(Bass)
})
