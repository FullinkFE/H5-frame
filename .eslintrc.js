module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: "eslint:recommended",
  env: {
    // 一个环境定义了一组预定义的全局变量。
    browser: true,
    // 会自动开启es6语法支持。
    es6: true,
    node: true
  },
  globals: {
    "$": true,  // zepto
    "define": true,  // requirejs
    "require": true,  // requirejs
    "process": true
  },
  /*
  * 警告（1），错误（2），关闭（0）
  * consistent-return: 要求 return 语句要么总是指定返回的值，要么不指定
  * indent: 强制使用一致的缩进
  * no-else-return: 禁止 if 语句中 return 语句之后有 else 块
  * semi: 要求或禁止使用分号代替 ASI
  * space-unary-ops: 强制在一元操作符前后使用一致的空格
  * */
  rules: {
    "consistent-return": 2,
    "indent"           : [2, 2],
    "no-else-return"   : 1,
    "semi"             : [2, "always"],
    "space-unary-ops"  : 2,
    "no-console": process.env.NODE_ENV === "production" ? "error": "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
