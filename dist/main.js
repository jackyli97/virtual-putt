/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Game {\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\n\nclass GameView {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.round = 1;\n        this.gameMenu = document.getElementById('start-menu');\n        this.startButton = document.querySelector('.start-button');\n        this.menuTitle = document.querySelector('.menu-title');\n        this.menuText = document.querySelector('.menu-text');\n        this.inProgress = false;\n\n        this.bindMenuHandlers();\n    }\n\n    start() {\n        this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.round]);\n        this.menuTitle.dataset.round = this.round;\n        this.inProgress = true;\n        this.bindGameHandlers();\n        this.gameLoop();\n    }\n\n    gameLoop() {\n        this.game.moveObjects();\n        this.game.checkCollision();\n        this.game.draw(this.ctx);\n\n        if (this.roundOver()) {\n            this.gameMenu.classList.toggle('hide');\n            this.inProgress = false;\n        } else {\n            this.animationRequestId = window.requestAnimationFrame(this.gameLoop.bind(this));\n        }\n    }\n\n    roundOver() {\n        if (this.game.won()) {\n            window.cancelAnimationFrame(this.animationRequestId);\n            this.round += 1;\n\n            this.menuTitle.innerHTML = _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.round].menuTitle;\n            this.menuText.innerHTML = _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.round].menuText;\n\n            if (this.round < 5) {\n                this.startButton.innerHTML = 'Start';\n            } else {\n                this.startButton.innerHTML = 'Play Again';\n                this.round = 1;\n            }\n\n            return true;\n        } else if (this.game.lost()) {\n            window.cancelAnimationFrame(this.animationRequestId);\n            this.menuTitle.innerHTML = 'Not Quite!';\n            this.menuText.innerHTML = 'Better luck next time! Give it another shot and hone those herding skills.'\n            this.startButton.innerHTML = 'Play Again';\n\n            this.round = 1;\n            return true;\n        }\n\n        return false;\n    }\n\n    bindMenuHandlers() {\n        const startGame = () => {\n            this.gameMenu.classList.toggle('hide');\n            this.start();\n        };\n\n        this.startButton.addEventListener('click', () => {\n            if (!this.inProgress) startGame();\n        });\n\n        window.addEventListener('keydown', (e) => {\n            if (e.keyCode === 13 && !this.inProgress) startGame();\n        });\n    }\n\n    bindGameHandlers() {\n        const sheepDog = this.game.sheepDog;\n        const keyDownHandler = sheepDog.keyDownHandler.bind(sheepDog);\n        const keyUpHandler = sheepDog.keyUpHandler.bind(sheepDog);\n\n        document.addEventListener('keydown', keyDownHandler);\n        document.addEventListener('keyup', keyUpHandler);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconsole.log('IT WORKS')\n// import PuttPutt from './game';\n\n// const canvas = document.getElementById('golf-course');\n// const canvas2 = document.getElementById('background-hover-canvas');\n\n// new PuttPutt(canvas, canvas2);\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"game-canvas\");\n    canvas.height = 550;\n    canvas.width = 900;\n\n    const ctx = canvas.getContext('2d');\n    ctx.fillStyle = \"rgb(126, 200, 80)\";\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    ctx.fillStyle = \"rgb(0, 0, 0)\";\n    ctx.fillRect(20, 20, 20, 20)\n    const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n})\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const canvas = document.getElementById(\"game-canvas\");\n//     canvas.height = 550;\n//     canvas.width = 900;\n\n//     const ctx = canvas.getContext('2d');\n//     ctx.fillStyle = \"rgb(126, 200, 80)\";\n//     ctx.fillRect(0, 0, canvas.width, canvas.height);\n//     const gameView = new GameView(ctx);\n// })\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst levels = {\n    1: {\n        numSheep: 3,\n        sheepSpeed: 0.25,\n        numGoats: 0,\n        goatSpeed: 0.5,\n        timeRemaining: '1:30',\n        numHayBales: 0,\n        menuTitle: 'Great Job!',\n    },\n    2: {\n        numSheep: 8,\n        sheepSpeed: 0.6,\n        numGoats: 0,\n        goatSpeed: 0.25,\n        timeRemaining: '2:00',\n        numHayBales: 0,\n        menuTitle: 'Great Job!',\n        menuText: 'It was good while it lasted, but somehow the sheep are out again! This time even more have escaped.',\n    },\n    3: {\n        numSheep: 8,\n        sheepSpeed: 0.5,\n        numGoats: 0,\n        goatSpeed: 0.25,\n        timeRemaining: '2:00',\n        numHayBales: 8,\n        menuTitle: 'Great Job!',\n        menuText: \"You're becoming an expert! But can you navigate the hay bales to get sheep back in time again?\",\n    },\n    4: {\n        numSheep: 5,\n        sheepSpeed: 0.5,\n        numGoats: 5,\n        goatSpeed: 0.3,\n        timeRemaining: '2:00',\n        numHayBales: 0,\n        menuTitle: 'Great Job!',\n        menuText: 'You seem to have those sheep under control. Unfortunately, this time some goats have gotten out as well! Make sure to herd them into the right pasture...',\n    },\n    5: {\n        menuTitle: 'Congrats!',\n        menuText: \"You did it! You're now an expert herder. Play again using the button below, or click on the links to the side to check out some of my other work.\",\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (levels);\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ })

/******/ });