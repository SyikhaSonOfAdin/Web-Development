import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'
import Navbar from './Navbar.vue'
import Section_1 from './Section-1.vue'
import Section_2 from './Section-2.vue'
import Section_3 from './Section-3.vue'
import Section_4 from './Section-4.vue'
// import Footer from './Footer.vue'

// createApp(App).mount('#app')
createApp(Navbar).mount('#navbar')
createApp(Section_1).mount('#section-1')
createApp(Section_2).mount('#section-2')
createApp(Section_3).mount('#section-3')
createApp(Section_4).mount('#section-4')
// createApp(Footer).mount('#footer')

