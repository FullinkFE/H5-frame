import Vue from 'vue/dist/vue.min';
import Button from 'vant/es/button';
// import Dialog from 'vant/es/dialog';
import Loading from 'vant/es/loading';
import overlay from 'vant/es/overlay';
Vue.use(Button)
Vue.use(Loading)
Vue.use(overlay)

new Vue({
  el: '#app',
  data(){
    return {
      name: 'index111.html',
      show: false
    }
  },
  methods: {
    showDialog(){
      // Dialog.alert({
      //   message: '弹窗内容',
      //   closeOnClickOverlay: true,
      //   beforeClose(action, done){
      //     done()
      //   }
      // }).catch(() => {})
    }
  }
})
