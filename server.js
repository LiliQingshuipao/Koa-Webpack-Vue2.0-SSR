/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _koa = __webpack_require__(3);

	var _koa2 = _interopRequireDefault(_koa);

	var _koaConvert = __webpack_require__(4);

	var _koaConvert2 = _interopRequireDefault(_koaConvert);

	var _koaStatic = __webpack_require__(5);

	var _koaStatic2 = _interopRequireDefault(_koaStatic);

	var _combinedStream = __webpack_require__(6);

	var _combinedStream2 = _interopRequireDefault(_combinedStream);

	var _stringToStream = __webpack_require__(7);

	var _stringToStream2 = _interopRequireDefault(_stringToStream);

	var _main = __webpack_require__(8);

	var _main2 = _interopRequireDefault(_main);

	var _webpack = __webpack_require__(13);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackClient = __webpack_require__(14);

	var _webpackClient2 = _interopRequireDefault(_webpackClient);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var renderer = __webpack_require__(15).createRenderer();
	var renderToStream = renderer.renderToStream;

	var compiler = (0, _webpack2.default)(_webpackClient2.default);
	var devMiddleware = __webpack_require__(16);
	var hotMiddleware = __webpack_require__(17);

	var app = new _koa2.default();

	app.use((0, _koaConvert2.default)(devMiddleware(compiler, {
	    publicPath: _webpackClient2.default.output.publicPath,
	    stats: {
	        colors: true,
	        modules: false,
	        children: false,
	        chunks: false,
	        chunkModules: false
	    }
	})));
	app.use((0, _koaConvert2.default)(hotMiddleware(compiler)));

	app.use((0, _koaStatic2.default)(_path2.default.join(process.cwd(), 'dist'), {}));

	app.use(function (ctx) {
	    ctx.type = 'text/html; charset=utf-8';
	    var title = '数说雷达2.0';
	    var stream = _combinedStream2.default.create();
	    stream.append((0, _stringToStream2.default)('<!DOCTYPE html>\n    <html lang="en">\n        <head>\n            <meta charset="utf-8">\n            <title>' + title + '</title>\n            <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">\n        </head>\n        <body>'));
	    stream.append(renderToStream(_main2.default));
	    stream.append('\n            <script src=\'./app.bundle.js\'></script>\n        </body>\n    </html>');
	    ctx.body = stream;
	});

	var port = 5000;
	app.listen(port, function () {
	    console.log('==> Listening at http://localhost:' + port);
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("koa");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("koa-convert");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("koa-static");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("combined-stream");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("string-to-stream");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(9);

	var _vue2 = _interopRequireDefault(_vue);

	var _demo = __webpack_require__(10);

	var _demo2 = _interopRequireDefault(_demo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (typeof window !== 'undefined') {

	    new _vue2.default({
	        el: '#app',
	        render: function render(h) {
	            return h(_demo2.default);
	        }
	    });
	} else {

	    module.exports = new _vue2.default({
	        render: function render(h) {
	            return h(_demo2.default);
	        }
	    });
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	if (__vue_options__.functional) {console.error("[vue-loader] demo.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            msg: 'Hello world'
	        };
	    }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    attrs: {
	      "id": "app"
	    }
	  }, ["\n    " + _s(msg) + "\n"])
	}},staticRenderFns: []}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var path = __webpack_require__(2);
	var webpack = __webpack_require__(13);

	var hotMiddlewareScript = 'webpack-hot-middleware/client?noInfo=false&reload=true';

	module.exports = {
	    entry: {
	        app: ['./src/app/main', hotMiddlewareScript]
	    },
	    output: {
	        path: path.join(process.cwd(), 'dist'),
	        publicPath: '/',
	        filename: '[name].bundle.js'
	    },
	    resolve: {
	        extensions: ['', '.js', '.vue'],
	        alias: {
	            'src': path.resolve(__dirname, '../src'),
	            'app': path.resolve(__dirname, '../src/app'),
	            'client': path.resolve(__dirname, '../src/client'),
	            'server': path.resolve(__dirname, '../src/server')
	        }
	    },
	    resolveLoader: {
	        fallback: [path.join(__dirname, '../node_modules')]
	    },
	    module: {
	        loaders: [{
	            test: /\.vue$/,
	            loader: 'vue'
	        }, {
	            test: /\.html$/,
	            loader: 'vue-html'
	        }, {
	            test: /\.css$/,
	            loader: 'style!css'
	        }, {
	            test: /\.js$/,
	            loader: 'babel',
	            exclude: /node_modules/
	        }, {
	            test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
	            loader: 'url',
	            query: {
	                limit: 10000,
	                name: 'static/images/[name].[ext]'
	            }
	        }]
	    },
	    vue: {
	        loaders: {
	            css: 'vue-style!css'
	        }
	    },
	    plugins: [new webpack.optimize.OccurenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()]

	};
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("vue-server-renderer");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("koa-webpack-dev-middleware");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("koa-webpack-hot-middleware");

/***/ }
/******/ ]);