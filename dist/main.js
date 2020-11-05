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

/***/ "./src/current_hole.js":
/*!*****************************!*\
  !*** ./src/current_hole.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/current_hole.js?");

/***/ }),

/***/ "./src/fence.js":
/*!**********************!*\
  !*** ./src/fence.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass FenceBox {\n    constructor(ctx, x, y, width, height, rotated) {\n        this.ctx = ctx;\n        this.pos = [x, y];\n        this.width = width;\n        this.height = height;\n        this.rotated = rotated;\n    }\n\n    draw() {\n        // Build hit box for collisions\n        this.ctx.beginPath();\n        this.ctx.rect(this.pos[0], this.pos[1], this.width, this.height);\n        // Start Testing\n        // this.ctx.strokeStyle = \"black\";\n        // this.ctx.stroke();\n        // End Testing\n        this.ctx.closePath();\n\n        this.rotated ? this.drawDetailsHorizontal() : this.drawDetailsVertical();\n    }\n\n    drawDetailsVertical() {\n        // Add main fence railings\n        this.ctx.beginPath();\n        this.ctx.rect(this.pos[0] + 5, this.pos[1], 7, this.height);\n        this.ctx.fillStyle = \"rgb(125, 106, 62)\";\n        this.ctx.fill();\n        this.ctx.closePath();\n\n        this.ctx.beginPath();\n        this.ctx.rect(this.pos[0] + 22, this.pos[1], 7, this.height);\n        this.ctx.fillStyle = \"rgb(125, 106, 62)\";\n        this.ctx.fill();\n        this.ctx.closePath();\n\n        // Add fenceposts\n        let offset = 20;\n        while (offset < this.height) {\n            this.ctx.beginPath();\n            this.ctx.rect(this.pos[0], this.pos[1] + offset, this.width, 8);\n            this.ctx.fillStyle = \"rgb(125, 106, 62)\";\n            this.ctx.fill();\n            this.ctx.closePath();\n\n            offset += 37.5;\n        }\n    }\n\n    drawDetailsHorizontal() {\n        // Add main fence railings\n        this.ctx.beginPath();\n        this.ctx.rect(this.pos[0], this.pos[1] + 5, this.width + 10, 7);\n        this.ctx.fillStyle = \"rgb(125, 106, 62)\";\n        this.ctx.fill();\n        this.ctx.closePath();\n\n        this.ctx.beginPath();\n        this.ctx.rect(this.pos[0], this.pos[1] + 22, this.width + 10, 7);\n        this.ctx.fillStyle = \"rgb(125, 106, 62)\";\n        this.ctx.fill();\n        this.ctx.closePath();\n\n        // Add fenceposts\n        let offset = 20;\n        while (offset < this.width) {\n            this.ctx.beginPath();\n            this.ctx.rect(this.pos[0] + offset, this.pos[1], 8, this.height);\n            this.ctx.fillStyle = \"rgb(125, 106, 62)\";\n            this.ctx.fill();\n            this.ctx.closePath();\n\n            offset += 37.5;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FenceBox);\n\n//# sourceURL=webpack:///./src/fence.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sheep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheep */ \"./src/sheep.js\");\n/* harmony import */ var _golfcourse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./golfcourse */ \"./src/golfcourse.js\");\n/* harmony import */ var _goat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goat */ \"./src/goat.js\");\n/* harmony import */ var _fence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fence */ \"./src/fence.js\");\n/* harmony import */ var _current_hole__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current_hole */ \"./src/current_hole.js\");\n/* harmony import */ var _current_hole__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_current_hole__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\n\n\n// import Hole from '../assets/images/hole.png'\n\n\n\n\nclass Game {\n    constructor(ctx, levelData) {\n        this.currentLevel = levelData;\n        this.numSheep = this.currentLevel.numSheep;\n        this.numGoats = this.currentLevel.numGoats;\n        this.sheep = [];\n        this.goats = [];\n        this.stationaryObjects = [];\n        this.ctx = ctx;\n        // this.addFences();\n        this.addTimer();\n        this.addGolfCourse();\n    }\n\n    \n    addGolfCourse() {\n        let img1 = new Image();\n        img1.src = \"assets/images/golfball.png\";\n        \n        let img2 = new Image();\n        img2.src = \"assets/images/golfclub.png\"\n        let golfcourse = new _golfcourse__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, img1, img2, {x: 0, y: 0});\n        this.golfcourse = golfcourse;\n    }\n    \n    addTimer() {\n        this.timer = new _timer__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.ctx, this.currentLevel.timeRemaining);\n        this.stationaryObjects.push(this.timer);\n        this.timer.countdown();\n    }\n    \n    // moveBall() {\n    //     this.golfcourse.move();\n    // }\n    draw() {\n        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n        // this.ctx.fillStyle = \"rgb(126, 200, 80)\";\n        // this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n        // let img = new Image();\n        // img.src = \"assets/images/grass.png\"\n        // this.ctx.drawImage(img, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2, this.ctx.canvas.width, this.ctx.canvas.height)\n        // Add objects to canvas\n        let holeImg = new Image();\n        holeImg.src = \"assets/images/hole.png\";\n        this.golfcourse.draw();\n        this.ctx.drawImage(holeImg, 225, 200);\n        // let clubImg = new Image();\n        // clubImg.src = \"assets/images/golfclub.png\";\n        // this.ctx.drawImage(clubImg, 224, 200);\n        \n        // Sheep remaining counter\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\n\nclass GameView {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.hole = 1;\n        this.gameMenu = document.getElementById('start-menu');\n        this.startButton = document.querySelector('.start-button');\n        this.menuTitle = document.querySelector('.menu-title');\n        this.menuText = document.querySelector('.menu-text');\n        this.inProgress = false;\n\n        this.bindMenuHandlers();\n    }\n\n    start() {\n        this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.hole]);\n        this.menuTitle.dataset.hole = this.hole;\n        this.inProgress = true;\n        this.bindGameHandlers();\n        this.gameLoop();\n    }\n\n    gameLoop() {\n        this.game.draw(this.ctx);\n        if (this.holeOver()) {\n            this.gameMenu.classList.toggle('hide');\n            this.inProgress = false;\n        } else {\n            this.animationRequestId = window.requestAnimationFrame(this.gameLoop.bind(this));\n        }\n    }\n\n    holeOver() {\n        if (false) {} else if (false) {}\n\n        return false;\n    }\n\n    bindMenuHandlers() {\n        const startGame = () => {\n            this.gameMenu.classList.toggle('hide');\n            this.start();\n        };\n\n        this.startButton.addEventListener('click', () => {\n            if (!this.inProgress) startGame();\n        });\n\n        window.addEventListener('keydown', (e) => {\n            if (e.keyCode === 13 && !this.inProgress) startGame();\n        });\n    }\n\n    bindGameHandlers() {\n        const golfcourse = this.game.golfcourse;\n        const mouseMoveHandler = golfcourse.mouseMoveHandler.bind(golfcourse);\n        const mouseClickHandler = golfcourse.mouseClickHandler.bind(golfcourse);\n\n        // document.addEventListener('mousemove', event => {\n        //     mouse.x = event.clientX\n        //     mouse.y = event.clientY\n        // });\n        // document.addEventListener('click', (event) => {\n        //     console.log('clicked');\n        // });\n        document.addEventListener('click', mouseClickHandler);\n        document.addEventListener('mousemove', mouseMoveHandler);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/goat.js":
/*!*********************!*\
  !*** ./src/goat.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nconst constants = {\n    RADIUS: 26,\n}\n\nclass Goat extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(ctx, img, speed) {\n        super(ctx, img, constants.RADIUS, speed);\n\n        this.scale = 0.25;\n        this.frameWidth = 160;\n        this.frameHeight = 144;\n        this.scaledWidth = this.scale * this.frameWidth;\n        this.scaledHeight = this.scale * this.frameHeight;\n        this.numCols = 3;\n    }\n\n    draw() {\n        // Testing\n        // this.ctx.beginPath();\n        // this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n        // this.ctx.strokeStyle = \"black\";\n        // this.ctx.stroke();\n        // this.ctx.closePath();\n        // End Testing\n\n        if (this.vel[0] === 0 && this.vel[1] === 0) {\n            this.frameCount = 0;\n        }\n\n        this.vel[0] <= 0 ? this.currentRow = 0 : this.currentRow = 1;\n\n        this.frameCount++;\n        this.drawFrame(this.currentLoop, this.currentRow, this.pos[0] - this.radius * 0.8, this.pos[1] - this.radius * 0.8);\n        if (this.frameCount < this.frameRate) {\n            return\n        }\n\n        this.frameCount = 0;\n        this.currentLoop++;\n        if (this.currentLoop === this.numCols) {\n            this.currentLoop = 0;\n        }\n    }\n\n    move() {\n        this.frameRate = 15;\n\n        if (this.pos[0] + this.radius > this.ctx.canvas.width) {\n            this.vel[0] = -this.vel[0];\n        }\n\n        if (this.pos[1] + this.radius > this.ctx.canvas.height || this.pos[1] - this.radius < 0) {\n            this.vel[1] = - this.vel[1];\n        }\n\n        if (Math.abs(this.vel[0]) > this.speed || Math.abs(this.vel[1]) > this.speed) {\n            this.frameRate = 8;\n            if (this.vel[0] > 0) this.vel[0] -= this.friction;\n            if (this.vel[0] < 0) this.vel[0] += this.friction;\n\n            if (this.vel[1] > 0) this.vel[1] -= this.friction;\n            if (this.vel[1] < 0) this.vel[1] += this.friction;\n        }\n\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Goat);\n\n//# sourceURL=webpack:///./src/goat.js?");

/***/ }),

/***/ "./src/golfcourse.js":
/*!***************************!*\
  !*** ./src/golfcourse.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vectors */ \"./src/vectors.js\");\n\n\nclass GolfCourse {\n    constructor(ctx, img1, img2) {\n        // if (!position) {\n        //     this.position = new Vector();\n        // }\n        // else{\n        //     this.position = position\n        // }\n        // if (!origin) {\n        //     this.origin = new Vector();\n        // }\n        // else{\n        //     this.origin = origin;\n        // }\n\n        this.ctx = ctx;\n        this.canvas = document.getElementById(\"game-canvas\");\n        this.vel = [0, 0];\n        this.initialLoad = true;\n        this.clicked = false;\n        this.gameCanvas = document.getElementById(\"game-canvas\")\n        this.range = {xmin: 300, ymin: 400, xmax: 380, ymax: 440}\n        this.pos = [(this.range.xmin + this.range.xmax)/2, (this.range.ymin + this.range.ymax)/2];\n        this.clubPos = [this.pos[0], this.pos[1]]\n        this.img1 = img1;\n        this.img2 = img2;\n    }\n\n    update() {\n        // this.frameRate = 5;\n        \n        // if (!this.rightKey && !this.leftKey) this.vel[0] = 0;\n\n        // if (this.pos[0] + this.radius <= this.ctx.canvas.width) {\n        //     if (this.rightKey) {\n        //         this.pos[0] += constants.SPEED;\n        //         this.vel[0] = constants.SPEED - 1;\n        //     }\n        // }\n\n        // if (this.leftKey) {\n        //     this.pos[0] -= constants.SPEED;\n        //     this.vel[0] = -(constants.SPEED - 1);\n        // }\n\n        // if (!this.upKey && !this.downKey) this.vel[1] = 0;\n\n        // if (this.pos[1] + this.radius <= this.ctx.canvas.height) {\n        //     if (this.downKey) {\n        //         this.pos[1] += constants.SPEED;\n        //         this.vel[1] = constants.SPEED - 1;\n        //     }\n        // }\n        \n        // if (this.pos[1] - this.radius >= 0) {\n        //     if (this.upKey) {\n        //         this.pos[1] -= constants.SPEED;\n        //         this.vel[1] = -(constants.SPEED - 1);\n        //     }\n        // }\n    }\n\n    draw() {\n        // Testing\n        // this.ctx.beginPath();\n        // this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n        // this.ctx.strokeStyle = \"black\";\n        // this.ctx.stroke();\n        // this.ctx.closePath();\n        // End Testing\n\n\n        // if (this.vel[0] === 0 && this.vel[1] === 0) {\n        //     this.frameCount = 0;\n        //     this.currentLoop = 0;\n        //     this.facingRight ? this.currentRow = 1 : this.currentRow = 0;\n        // }\n\n        // if (this.vel[0] < 0) {\n        //     this.currentRow = 0;\n        // } else if (this.vel[0] > 0) {\n        //     this.currentRow = 1;\n        // }\n\n        // this.frameCount++;\n        // this.drawFrame(this.currentLoop, this.currentRow, this.pos[0] - this.radius, this.pos[1] - this.radius);\n        // if (this.frameCount < this.frameRate) {\n        //     return // don't update animate unless specific # of frames have past\n        // }\n\n        // this.frameCount = 0;\n        // this.currentLoop++;\n        // if (this.currentLoop === this.numCols) {\n        //     this.currentLoop = 0;\n        // }\n        this.ctx.fillStyle = \"rgb(66, 245, 81)\";\n        this.ctx.fillRect(200, 100, 200, 400)\n        this.ctx.strokeStyle = \"rgb(221, 245, 66)\";\n        this.ctx.lineWidth = 10;\n        this.ctx.strokeRect(200,100, 200,400)\n        this.ctx.fillStyle = \"rgb(31, 87, 36)\";\n        this.ctx.fillRect(300, 400, 80, 40);\n        this.ctx.drawImage(\n        this.img1,\n        this.pos[0], this.pos[1],\n        \n        ) \n        if (this.clicked) {\n        // this.ctx.save();\n        // this.ctx.translate(this.position.x, this.position.y)\n        // this.ctx.restore()\n        this.ctx.drawImage(\n            this.img2,\n            this.clubPos[0], this.clubPos[1],\n            )\n        }\n        \n    }\n\n    // drawFrame(frameX, frameY, canvasX, canvasY) {\n    //     this.ctx.drawImage(\n    //       this.img,\n        //   frameX * this.frameWidth,\n        //   frameY * this.frameHeight,\n        //   this.frameWidth,\n        //   this.frameHeight,\n        //   canvasX,\n        //   canvasY,\n        //   this.frameWidth * this.scale,\n        //   this.frameHeight * this.scale\n    //     );\n    // }\n\n    windowToCanvas(canvas, x, y) {\n        var bbox = canvas.getBoundingClientRect();\n\n        return {\n            x: x - bbox.left * (canvas.width / bbox.width),\n            y: y - bbox.top * (canvas.height / bbox.height)\n        };\n    }\n    \n    mouseClickHandler(e) {\n        if (this.initialLoad) {\n            this.initialLoad = false;\n        }\n        else {\n            this.clicked = true;\n            this.gameCanvas.classList.toggle('place-ball');\n            this.gameCanvas.classList.toggle('ball-placed');\n        }\n        console.log('clicked');\n    }\n\n    mouseMoveHandler(e) {\n        let loc = this.windowToCanvas(this.canvas, e.clientX, e.clientY);\n\n        if (this.clicked) {\n            this.pos[0] = this.pos[0]\n            this.pos[1] = this.pos[1]\n        }\n        else{\n            if ((loc.x >= this.range.xmin && loc.x <= this.range.xmax) \n            && (loc.y >= this.range.ymin && loc.y <= this.range.ymax)\n            ) {\n                this.pos[0] = loc.x\n                this.pos[1] = loc.y\n            }\n        }\n        this.clubPos[0] = loc.x\n        this.clubPos[1] = loc.y\n    }\n    // keyDownHandler(e) {\n    //     if (e.keyCode === 39) {\n    //         this.rightKey = true;\n    //         this.facingRight = true;\n    //     } else if (e.keyCode === 37) {\n    //         this.leftKey = true;\n    //         this.facingRight = false;\n    //     }\n\n    //     if (e.keyCode === 40) {\n    //         this.downKey = true;\n    //     } else if (e.keyCode === 38) {\n    //         this.upKey = true;\n    //     }\n    // }\n\n\n    // keyUpHandler(e) {\n    //     if (e.keyCode === 39) {\n    //         this.rightKey = false;\n    //     } else if (e.keyCode === 37) {\n    //         this.leftKey = false;\n    //     }\n\n    //     if (e.keyCode === 40) {\n    //         this.downKey = false;\n    //     } else if (e.keyCode === 38) {\n    //         this.upKey = false;\n    //     }\n    // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GolfCourse);\n\n//# sourceURL=webpack:///./src/golfcourse.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconsole.log('IT WORKS')\n// import PuttPutt from './game';\n\n// const canvas = document.getElementById('golf-course');\n// const canvas2 = document.getElementById('background-hover-canvas');\n\n// new PuttPutt(canvas, canvas2);\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"game-canvas\");\n    canvas.height = 550;\n    canvas.width = 900;\n\n    const ctx = canvas.getContext('2d');\n    // ctx.fillStyle = \"rgb(126, 200, 80)\";\n    // ctx.fillRect(0, 0, canvas.width, canvas.height);\n    let img = new Image();\n    img.src = \"assets/images/grass.png\"\n    ctx.drawImage(img, canvas.width / 2, canvas.height / 2)\n    // ctx.fillStyle = \"rgb(0, 0, 0)\";\n    // ctx.fillRect(20, 20, 20, 20)\n    const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n})\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const canvas = document.getElementById(\"game-canvas\");\n//     canvas.height = 550;\n//     canvas.width = 900;\n\n//     const ctx = canvas.getContext('2d');\n//     ctx.fillStyle = \"rgb(126, 200, 80)\";\n//     ctx.fillRect(0, 0, canvas.width, canvas.height);\n//     const gameView = new GameView(ctx);\n// })\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst levels = {\n    1: {\n        numSheep: 3,\n        sheepSpeed: 0.25,\n        numGoats: 0,\n        goatSpeed: 0.5,\n        timeRemaining: '1:30',\n        numHayBales: 0,\n        menuTitle: 'Great Job!',\n    },\n    2: {\n        numSheep: 8,\n        sheepSpeed: 0.6,\n        numGoats: 0,\n        goatSpeed: 0.25,\n        timeRemaining: '2:00',\n        numHayBales: 0,\n        menuTitle: 'Great Job!',\n        menuText: 'It was good while it lasted, but somehow the sheep are out again! This time even more have escaped.',\n    },\n    3: {\n        numSheep: 8,\n        sheepSpeed: 0.5,\n        numGoats: 0,\n        goatSpeed: 0.25,\n        timeRemaining: '2:00',\n        numHayBales: 8,\n        menuTitle: 'Great Job!',\n        menuText: \"You're becoming an expert! But can you navigate the hay bales to get sheep back in time again?\",\n    },\n    4: {\n        numSheep: 5,\n        sheepSpeed: 0.5,\n        numGoats: 5,\n        goatSpeed: 0.3,\n        timeRemaining: '2:00',\n        numHayBales: 0,\n        menuTitle: 'Great Job!',\n        menuText: 'You seem to have those sheep under control. Unfortunately, this time some goats have gotten out as well! Make sure to herd them into the right pasture...',\n    },\n    5: {\n        menuTitle: 'Congrats!',\n        menuText: \"You did it! You're now an expert herder. Play again using the button below, or click on the links to the side to check out some of my other work.\",\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (levels);\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nclass MovingObject {\n    constructor(ctx, img, radius, speed) {\n        this.ctx = ctx;\n        this.radius = radius;\n        this.speed = speed;\n        this.objectShape = \"circle\";\n\n        this.pos = this.generateRandomPosition();\n        this.vel = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"randomVec\"])(this.speed);\n        this.friction = 0.02;\n\n        this.img = img;\n\n        this.currentLoop = 0;\n        this.currentRow = 0;\n        this.frameCount = 0;\n    }\n\n    generateRandomPosition() {\n        const xPos = Math.random() * (this.ctx.canvas.width - this.radius * 2 - 175) + 175;\n        const yPos = Math.random() * (this.ctx.canvas.height - this.radius * 2) + this.radius;\n        return [xPos, yPos];\n    }\n\n    drawFrame(frameX, frameY, canvasX, canvasY) {\n        this.ctx.drawImage(\n            this.img,\n            frameX * this.frameWidth,\n            frameY * this.frameHeight,\n            this.frameWidth,\n            this.frameHeight,\n            canvasX,\n            canvasY,\n            this.frameWidth * this.scale,\n            this.frameHeight * this.scale\n        );\n    }\n\n    collideWithObstacle(direction) {\n        if (direction.includes(\"left\") || direction.includes(\"right\")) this.vel[0] = -this.vel[0];\n        if (direction.includes(\"top\") || direction.includes(\"bottom\")) this.vel[1] = -this.vel[1];\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/sheep.js":
/*!**********************!*\
  !*** ./src/sheep.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nconst sheepConstants = {\n    RADIUS: 32,\n}\n\nclass Sheep extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(ctx, img, speed) {\n        super(ctx, img, sheepConstants.RADIUS, speed);\n\n        this.scale = 0.3;\n        this.frameWidth = 160;\n        this.frameHeight = 124;\n        this.scaledWidth = this.scale * this.frameWidth;\n        this.scaledHeight = this.scale * this.frameHeight;\n        this.numCols = 3;\n    }\n\n    draw() {\n        // Testing\n        // this.ctx.beginPath();\n        // this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n        // this.ctx.strokeStyle = \"black\";\n        // this.ctx.stroke();\n        // this.ctx.closePath();\n        // End Testing\n\n        if (this.vel[0] === 0 && this.vel[1] === 0) {\n            this.frameCount = 0;\n        }\n\n        this.vel[0] <= 0 ? this.currentRow = 0 : this.currentRow = 1;\n\n        this.frameCount++;\n        this.drawFrame(this.currentLoop, this.currentRow, this.pos[0] - this.radius * 0.8, this.pos[1] - this.radius * 0.6);\n        if (this.frameCount < this.frameRate) {\n            return\n        }\n\n        this.frameCount = 0;\n        this.currentLoop++;\n        if (this.currentLoop === this.numCols) {\n            this.currentLoop = 0;\n        }\n    }\n\n    move() {\n        this.frameRate = 15;\n\n        if (this.pos[0] + this.radius > this.ctx.canvas.width) {\n            this.vel[0] = -this.vel[0];\n        }\n\n        if (this.pos[1] + this.radius > this.ctx.canvas.height || this.pos[1] - this.radius < 0) {\n            this.vel[1] = - this.vel[1];\n        }\n\n        if (Math.abs(this.vel[0]) > this.speed || Math.abs(this.vel[1]) > this.speed) {\n            this.frameRate = 8;\n            if (this.vel[0] > 0) this.vel[0] -= this.friction;\n            if (this.vel[0] < 0) this.vel[0] += this.friction;\n\n            if (this.vel[1] > 0) this.vel[1] -= this.friction;\n            if (this.vel[1] < 0) this.vel[1] += this.friction;\n        }\n\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sheep);\n\n//# sourceURL=webpack:///./src/sheep.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Timer {\n    constructor(ctx, timeRemaining) {\n        this.ctx = ctx;\n        this.height = 80;\n        this.width = 190;\n        this.pos = [710, 0];\n        this.timeRemaining = timeRemaining;\n    }\n\n    draw() {\n        this.ctx.font = \"80px Modak\";\n        this.ctx.fillStyle = \"white\";\n        this.ctx.strokeStyle = \"rgb(90, 90, 90)\";\n        this.ctx.fillText(`${this.timeRemaining}`, 725, 70);\n        this.ctx.strokeText(`${this.timeRemaining}`, 725, 70);\n\n        // Testing\n        // this.ctx.beginPath();\n        // this.ctx.rect(this.pos[0], this.pos[1], this.width, this.height);\n        // this.ctx.strokeStyle = \"black\";\n        // this.ctx.stroke();\n        // this.ctx.closePath();\n        // End Testing\n    }\n\n    countdown() {\n        const timeParts = this.timeRemaining.split(\":\");\n        let minutes = parseInt(timeParts[0]);\n        let seconds = parseInt(timeParts[1]);\n\n        const intervalId = window.setInterval(() => {\n            if (seconds === 0) {\n                minutes -= 1;\n                seconds = 59;\n            } else {\n                seconds -= 1;\n            }\n\n            const displayMinutes = minutes < 10 ? `${minutes}` : minutes;\n            const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;\n            this.timeRemaining = `${displayMinutes}:${displaySeconds}`;\n        }, 1000);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\n//# sourceURL=webpack:///./src/timer.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: randomVec, isCollidedWith, resolveCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomVec\", function() { return randomVec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isCollidedWith\", function() { return isCollidedWith; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolveCollision\", function() { return resolveCollision; });\n/* harmony import */ var _golfcourse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./golfcourse */ \"./src/golfcourse.js\");\n\n\n// Object Initialization functions\n\nconst randomVec = (length) => {\n    const deg = 2 * Math.PI * Math.random();\n    return scale([Math.sin(deg), Math.cos(deg)], length);\n}\n\nconst scale = (vec, m) => {\n    return [vec[0] * m, vec[1] * m];\n}\n\n// Collision detections functions\n\nconst isCollidedWith = (object1, otherObject) => {\n    if (otherObject.objectShape === \"circle\") {\n        return collideCircles(object1, otherObject);\n    } else if (object1.object1 === \"rect\" && otherObject.objectShape === \"rect\") {\n        return collideRectangles(object1, otherObject);\n    } else {\n        return collideCircleRectangle(object1, otherObject);\n    }\n}\n\nconst collideCircles = (object1, otherObject) => {\n    let radiiSum = object1.radius + otherObject.radius;\n    let distanceBtwn = Math.sqrt(\n        (object1.pos[0] - otherObject.pos[0]) ** 2 + (object1.pos[1] - otherObject.pos[1]) ** 2\n    );\n\n    if (otherObject instanceof _golfcourse__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) return distanceBtwn < radiiSum + 30;\n    return distanceBtwn < radiiSum;\n}\n\nconst collideCircleRectangle = (object1, otherObject) => {\n    let testX = object1.pos[0];\n    let testY = object1.pos[1];\n    const rx = otherObject.pos[0]\n    const ry = otherObject.pos[1]\n\n    let collisionDirections = [];\n\n    if (testX < rx) {\n        testX = rx;\n        collisionDirections.push(\"left\");\n    }\n    if (testX > rx + otherObject.width) {\n        testX = rx + otherObject.width;\n        collisionDirections.push(\"right\");\n    }\n\n    if (testY < ry) {\n        testY = ry;\n        collisionDirections.push(\"top\");\n    }\n    if (testY > ry + otherObject.height) {\n        testY = ry + otherObject.height;\n        collisionDirections.push(\"bottom\");\n    }\n\n    const distX = object1.pos[0] - testX;\n    const distY = object1.pos[1] - testY;\n    const distance = Math.sqrt((distX * distX) + (distY * distY));\n\n    return { collided: distance <= object1.radius, direction: collisionDirections }\n}\n\nconst collideRectangles = (object1, otherObject) => {\n    const [x1, y1] = object1.pos;\n    const [x2, y2] = otherObject.pos;\n    const w1 = object1.width;\n    const h1 = object1.height;\n    const w2 = otherObject.width;\n    const h2 = otherObject.height;\n\n    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {\n        return false;\n    }\n    return true;\n}\n\n// Collision resolution functions\n\nconst rotateVelocities = (velocity, angle) => {\n    const rotatedVelocities = {\n        x: velocity[0] * Math.cos(angle) - velocity[1] * Math.sin(angle),\n        y: velocity[0] * Math.sin(angle) + velocity[1] * Math.cos(angle)\n    }\n\n    return rotatedVelocities;\n}\n\nconst resolveCollision = (obj1, obj2) => {\n    const xVelocityDiff = obj1.vel[0] - obj2.vel[0];\n    const yVelocityDiff = obj1.vel[1] - obj2.vel[1];\n\n    const xDist = obj2.pos[0] - obj1.pos[0];\n    const yDist = obj2.pos[1] - obj1.pos[1];\n\n    if ((xVelocityDiff * xDist + yVelocityDiff * yDist) >= 0) {\n        const angle = -Math.atan2(obj2.pos[1] - obj1.pos[1], obj2.pos[0] - obj1.pos[0]);\n\n        const m1 = 1;\n        const m2 = 1;\n\n        const u1 = rotateVelocities(obj1.vel, angle);\n        const u2 = rotateVelocities(obj2.vel, angle);\n\n        const v1 = [(u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2)), u1.y]\n        const v2 = [(u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2)), u2.y]\n\n        const finalV1 = rotateVelocities(v1, -angle);\n        const finalV2 = rotateVelocities(v2, -angle);\n\n        obj1.vel[0] = finalV1.x;\n        obj1.vel[1] = finalV1.y;\n\n        if (!(obj2 instanceof _golfcourse__WEBPACK_IMPORTED_MODULE_1__[\"default\"])) { // Change both ojects velocities, unless the second one is a golfcourse\n            obj2.vel[0] = finalV2.x;\n            obj2.vel[1] = finalV2.y;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ }),

/***/ "./src/vectors.js":
/*!************************!*\
  !*** ./src/vectors.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Vectors {\n    constructor(x, y) {\n        this.x = typeof x !== 'undefined' ? x : 0;\n        this.y = typeof y !== 'undefined' ? y : 0;\n    }\n\n    \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vectors);\n\n//# sourceURL=webpack:///./src/vectors.js?");

/***/ })

/******/ });