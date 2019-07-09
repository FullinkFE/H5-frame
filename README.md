# BASE
该项目结构是基于京东的elf做的二次改造
该示例展示了最基本的项目结构，没有提供额外的功能，可以通过该示例了解整个项目的构建。

## 开始

## 环境准备

> **`提醒`**
由于依赖的包比较多，第一次安装耗时很长很长，请稍微耐心等待一下。
推荐使用淘宝的 npm 镜像进行安装，执行 npm 安装命令时带上 `--registry=https://registry.npm.taobao.org`。
另外 `node-sass` 和 `phantomjs` 这两个包需要编译，可以设置 `SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/`
和 `PHANTOMJS_CDNURL=https://npm.taobao.org/mirrors/phantomjs/`，安装已经编译好的版本。

```sh
# 全局安装 Node >= 6
# mac/linux
$ SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ PHANTOMJS_CDNURL=https://npm.taobao.org/mirrors/phantomjs/ npm install -g elf-cli --registry=https://registry.npm.taobao.org
# windows
$ npm install -g elf-cli --registry=https://registry.npm.taobao.org --SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ --PHANTOMJS_CDNURL=https://npm.taobao.org/mirrors/phantomjs/
```

## 使用

```bash
# 安装依赖
cd  H5-frame
npm install # 或者使用 yarn install

# 开发模式
npm start

# 构建
npm run build
```

## 开发

开发时，主要涉及到三个文件

- `src/index.html`

    整个网页的 HTML 文件

- `src/js/main.js`

    Javascript 文件

- `src/css/main.scss`

    样式文件


## 介绍

### 主要功能

- 开发时样式热加载
- 支持 Sass、Less 和 Stylus 样式预处理自动编译
- Autoprefixer 前缀补全
- px -> rem 自动转换
- 雪碧图合成
- 自动获取图片 width 和 height
- 部署构建时图片压缩
- 部署构建时代码合并压缩

### 相关组件依赖

- [Zepto](http://zeptojs.com/) 默认引入
