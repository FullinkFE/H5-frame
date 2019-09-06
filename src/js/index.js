import Vue from 'vue/dist/vue.min';
import Button from 'vant/es/button';
import Dialog from 'vant/es/dialog';
import Loading from 'vant/es/loading';
import Area from 'vant/es/area';
Vue.use(Button);
Vue.use(Loading);
Vue.use(Area);

new Vue({
  el: '#app',
  data(){
    return {
      name: 'index111.html',
      show: false,
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区',
          // ....
        }
      }
    }
  },
  methods: {
    showDialog(){
      Dialog.alert({
        message: '弹窗内容',
        closeOnClickOverlay: true,
        beforeClose(action, done){
          done()
        }
      }).catch(() => {})
    }
  }
})
