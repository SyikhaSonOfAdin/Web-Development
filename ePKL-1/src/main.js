import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
createApp({
    data() {
      return {
        pages : [
          {
            title : 'Hallo' ,
          },
        ]
      }
    }
  }).mount('body')