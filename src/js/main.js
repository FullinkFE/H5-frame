require('../index.html');
require('../css/package.scss');

var Preloader = require('preloader.js');

/**
 * init
 */
function init() {
  console.log('init ok');
}

/**
 * preloader && start
 * API地址：https://github.com/o2team/elf-preloader.js/blob/master/README_CN.md
 */
var preloader = new Preloader({
  resources: [
    require('../img/img1/cropland.jpg'),
    require('../img/img1/energize.jpg'),
    require('../img/img2/benefit.jpg'),
    require('../img/img2/run.jpg')
  ],
  concurrency: 0,   // 并发数测试，生产环境一般设置为0
  perMinTime: 0 // 加载每个资源所需的最小时间，一般用来测试 loading
});
preloader.addProgressListener(function (loaded, length) {
  console.log('loaded', loaded, length, loaded / length);
});
preloader.addCompletionListener(() => {
  $('#o2_loading').remove();
  $('#o2_main').removeClass('hide');
  init();
});
preloader.start();

console.log($);
