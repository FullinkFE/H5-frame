/**
 * ELF 配置文件
 *
 * 详细说明：https://github.com/o2team/elf/blob/master/doc/CONFIGURATION.md
 */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  devPort: '8000', // dev server 运行的端口
  designLayoutWidth: 750, // 设计稿的宽度 | 默认750，如果开启 Zoom 则直接按照设计稿宽度和屏幕宽度进行缩放
  designLayoutHeight: 1206, // 设计稿的高度 | 默认1206，如果开启 Zoom 则直接按照设计稿高度和屏幕高度进行缩放
  baseZoomRuler: 'width', // Zoom 缩放的基准 | 默认为 'width'，以屏幕的宽度进行缩放
  baseSize: 10, // 计算 rem 的基数，通常不用修改
  enableREM: true, // 是否用 rem 做适配
  enableZoom: true, // 是否用 zoom 做适配
  enableDisplayQR: true,

  /**
   * webpack base config
   */
  entry: 'src/js/main.js',
  output: {
    path: 'dist',
    publicPath: './',  // js 的引入路径的公用前缀，比如：<script type="text/javascript" src="./js/bundle.c34921.js"></script>
    filename: 'js/bundle.[hash:6].js'
  },
  outputCss: 'css/app.[hash:6].css',
  outputCssPublicPath: '../', // css的资源引入路径的公用前缀，例如：background: url('../img/html5-logo.png');
  imgLoaderQuery: {
    limit: 1000,  // 单位：byte
    name: 'img/[name].[hash:6].[ext]'
  },
  audioLoaderQuery: {
    name: 'plugin/[name].[hash:6].[ext]'
  },

  imgToBase64Dir: /src\/img-base64/,

  // postcss 相关配置
  autoprefixerOptions: {
    browsers: ['iOS >= 5', 'Android >= 2.3'],
    add: true,
    cascade: false
  },

  // 可以通过width, height获取图片的宽高, 通过inline把图片进行base64编码
  assetsOptions: {
    loadPaths: ['src/img/']
  },

  enableSpritesOnDev: true,

  spritesOptions: {
    stylesheetPath: 'src/css/',
    spritePath: 'src/img/',
    retina: true,
    relativeTo: 'rule',
    spritesmith: {
      algorithm: 'left-right', // 图片的布局方式
      padding: 2  // 单位 px
    },
    verbose: false, // 将插件打印到控制台
    // 将 img 目录下的子目录作为分组，子目录下的 png 图片会合成雪碧图
    groupBy: function (image) {
      var reg = /img\/(\S+)\/\S+\.png$/.exec(image.url)
      var groupName = reg ? reg[1] : reg
      return groupName ? Promise.resolve(groupName) : Promise.reject()
    },
    // 非 img 子目录下面的 png 不合
    filterBy: function (image) {
      return /img\/\S+\/\S+\.png$/.test(image.url) ? Promise.resolve() : Promise.reject()
    }
  },

  rules: [{
    test: /\.js?$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        babelrc: true,
      }
    }]
  },{

  }],
  /**
   * webpack development config
   *
   * 只作用于 development 模式，会覆盖 base config 中相同的配置项
   **/
  DEVELOPMENT: {
  },

  /**
   * webpack production config
   *
   * 只作用于 production 模式，会覆盖 base config 中相同的配置项
   **/
  PRODUCTION: {
    enableImageMin: true,
    enableJSCompress: true,
    enableCSSCompress: true,
    enableHTMLCompress: true,
    imageWebpackLoader: {
      mozjpeg: {
        quality: 65
      },
      pngquant: {
        quality: "65-90", //图片质量
        speed: 4
      },
      svgo: {
        plugins: [{
          removeViewBox: false
        }, {
          removeEmptyAttrs: false
        }]
      },
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      // png图片的深度压缩
      optipng: {
        optimizationLevel: 8,
        interlaced: false
      }
    },
    enableWebpackVisualizer: true,
    // 预加载配置参照：https://www.npmjs.com/package/preload-webpack-plugin
    plugins: [
      new PreloadWebpackPlugin({
        rel: 'preload',
        include: 'initial'
      }),
      new BundleAnalyzerPlugin()
    ],
  }
};
