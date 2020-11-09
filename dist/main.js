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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _golfcourse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./golfcourse */ \"./src/golfcourse.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\n\nclass Game {\n    constructor(ctx, levelData) {\n        this.currentLevel = levelData;\n        this.par = this.currentLevel.par\n        this.courseDims = this.currentLevel.courseDims\n        this.holePos = this.currentLevel.holePos\n        this.range = this.currentLevel.range,\n        this.bounds = this.currentLevel.bounds,\n        this.zones = this.currentLevel.zones,\n        // this.intercepts = this.currentLevel.intercepts,\n        this.stationaryObjects = [];\n        this.ctx = ctx;\n        this.ballStatus = 0;\n        this.addGolfCourse();\n        this.roundOver = false;\n        this.levels\n    }\n\n    \n    addGolfCourse() {\n        // let img1 = new Image();\n        // img1.src = \"assets/images/golfball.png\";\n        \n        let club = new Image();\n        club.src = \"assets/images/golfclub.png\";\n        let hole = new Image();\n        hole.src = \"assets/images/hole.png\";\n        // this.ctx.drawImage(holeImg, 250, 150);\n        let golfcourse = new _golfcourse__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, club, hole, this.courseDims, this.holePos, this.range, this.bounds, this.zones);\n        this.golfcourse = golfcourse;\n    }\n\n    shotHandler(e) {\n        if ((this.ballStatus < 1) && this.golfcourse.clicked) {\n            this.ballStatus += 1;\n        }\n        else if (this.ballStatus >= 1 && this.golfcourse.clicked) {\n            this.golfcourse.ballisMoving = true;\n            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n            this.moveBall();\n        }\n    }\n    \n    moveBall() {                \n        this.golfcourse.move();\n        setTimeout(()=>{this.golfcourse.ballisMoving = false;\n        }, 1500);\n    }\n\n    won() {\n        return (\n            (\n                (Math.abs(this.golfcourse.pos[0]-this.golfcourse.holePos[0]) >= 0) &&\n                (Math.abs(this.golfcourse.pos[0] - this.golfcourse.holePos[0]) <= 8)\n            ) &&\n            (\n                (Math.abs(this.golfcourse.pos[1] - this.golfcourse.holePos[1]) >= 0) &&\n                (Math.abs(this.golfcourse.pos[1] - this.golfcourse.holePos[1]) <= 8)\n            )\n        )\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n        // this.ctx.fillStyle = \"rgb(126, 200, 80)\";\n        // this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n        // let img = new Image();\n        // img.src = \"assets/images/grass.png\"\n        // this.ctx.drawImage(img, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2, this.ctx.canvas.width, this.ctx.canvas.height)\n        // Add objects to canvas\n        // let holeImg = new Image();\n        // holeImg.src = \"assets/images/hole.png\";\n        // this.ctx.drawImage(holeImg, 250, 150);\n        this.golfcourse.draw();\n        // let clubImg = new Image();\n        // clubImg.src = \"assets/images/golfclub.png\";\n        // this.ctx.drawImage(clubImg, 224, 200);\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\n\nclass GameView {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.hole = 1;\n        this.gameMenu = document.getElementById('start-menu');\n        this.startButton = document.querySelector('.start-button');\n        this.menuTitle = document.querySelector('.menu-title');\n        this.menuText = document.querySelector('.menu-text');\n        this.inProgress = false;\n        this.bindMenuHandlers();\n    }\n\n    start() {\n        this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.hole]);\n        this.menuTitle.dataset.hole = this.hole;\n        this.inProgress = true;\n        this.bindGameHandlers();\n        this.game.draw(this.ctx);\n        this.gameLoop();\n    }\n\n    gameLoop() {\n        this.game.draw(this.ctx);\n        if (this.holeOver()) {\n            this.gameMenu.classList.toggle('hide');\n            this.inProgress = false;\n        } else {\n            this.animationRequestId = window.requestAnimationFrame(this.gameLoop.bind(this));\n        }\n    }\n\n    holeOver() {\n        if (this.game.won()) {\n            // console.log(\"won\")\n            window.cancelAnimationFrame(this.animationRequestId);\n            // if (levels[this.hole]) {\n                // this.menuTitle.innerHTML = levels[this.hole].menuTitle;\n                this.menuText.innerHTML = _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.hole].menuText;\n            // }\n            this.hole += 1;\n\n            if (this.hole < 1) {\n                this.startButton.innerHTML = 'Start';\n            } else {\n                this.startButton.innerHTML = 'Play Again';\n                this.hole = 1;\n            }\n\n            return true;\n        } \n        return false;\n    }\n\n    bindMenuHandlers() {\n        const startGame = () => {\n            this.gameMenu.classList.toggle('hide');\n            this.start();\n        };\n\n        this.startButton.addEventListener('click', () => {\n            if (!this.inProgress) startGame();\n        });\n\n        window.addEventListener('keydown', (e) => {\n            if (e.keyCode === 13 && !this.inProgress) startGame();\n        });\n    }\n\n    bindGameHandlers() {\n        const golfcourse = this.game.golfcourse;\n        const mouseMoveHandler = golfcourse.mouseMoveHandler.bind(golfcourse);\n        const mouseClickHandler = golfcourse.mouseClickHandler.bind(golfcourse);\n        const shotHandler = this.game.shotHandler.bind(this.game)\n        // document.addEventListener('mousemove', event => {\n        //     mouse.x = event.clientX\n        //     mouse.y = event.clientY\n        // });\n        // document.addEventListener('click', (event) => {\n        //     console.log('clicked');\n        // });\n        document.addEventListener('click', mouseClickHandler);\n        document.addEventListener('click', shotHandler);\n        document.addEventListener('mousemove', mouseMoveHandler);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/golfcourse.js":
/*!***************************!*\
  !*** ./src/golfcourse.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vectors */ \"./src/vectors.js\");\n\n\nclass GolfCourse {\n    constructor(ctx, club, hole, courseDims, holePos, range, bounds, zones) {\n        this.courseDims = courseDims;\n        this.holePos = holePos;\n        this.ctx = ctx;\n        this.canvas = document.getElementById(\"game-canvas\");\n        this.vel = {x: 0, y:0};\n        this.initialLoad = true;\n        this.clicked = false;\n        this.ballisMoving = false;\n        this.gameCanvas = document.getElementById(\"game-canvas\");\n        this.range = range;\n        this.bounds = bounds;\n        this.zones = zones;\n        // this.intercepts = intercepts;\n        this.pos = [(this.range.xmin + this.range.xmax)/2, (this.range.ymin + this.range.ymax)/2];\n        this.clubPos = [this.pos[0], this.pos[1]];\n        this.trajPos = [this.pos[0], this.pos[1]];\n        this.dir = {x:1,y:1};\n        const a = (this.pos[0] - this.clubPos[0]);\n        const b = (this.pos[1] - this.clubPos[1]);\n        this.angle = Math.atan2(b, a);\n        this.c = Math.sqrt(a * a + b * b);\n        this.step = 0;\n        this.traj = {x:Math.cos(this.angle) * this.c, y:Math.sin(this.angle) * this.c}\n        // var a = (this.clubPos[0] - this.pos[0]);\n        // var b = (this.clubPos[1] - this.pos[1]);\n        // this.trajDist = Math.sqrt(a * a + b * b);\n        // this.xDist = (this.pos[0] - this.clubPos[0])\n        // this.yDist = (this.pos[1] - this.clubPos[1])\n        // this.img1 = img1;\n        this.club = club;\n        this.hole = hole;\n    }\n\n    holeInCheck(startPos, endPos) {\n        // distance and angle between startpos and endpos\n        let a1 = (startPos[0] - endPos[0]);\n        let b1 = (startPos[1] - endPos[1]);\n        let c1 = Math.sqrt(a1 * a1 + b1 * b1);\n        let angle1 = Math.atan2(b1, a1);\n\n        // distance and angle between startpos and hole\n        let a2 = (startPos[0] - this.holePos[0]);\n        let b2 = (startPos[1] - this.holePos[1]);\n        let c2 = Math.sqrt(a2 * a2 + b2 * b2);\n        let angle2 = Math.atan2(b2, a2);\n        // ((this.traj.x * mag.x < (Math.cos(angle2) * c2))) && (this.traj.y * mag.y < (Math.sin(angle2) * c2))\n        if ((Math.abs(angle1-angle2)<=0.20) && (c2<=c1) && ((c2)<200)) {\n            return true;\n        }\n        return false;\n    }\n\n    outOfBounds(start,end){\n        // if midpoint in grass boundaries,\n        // results in illegal path and returns true so ball will bounce instead\n        // shift the y coordinate for that y-int boundaries are y-axis\n        // debugger\n        let mid={};\n        let x = (start[0] + end[0]) * 0.50;\n        let y = (start[1] + end[1]) * 0.50;\n\n        for (let i = 0; i < this.zones.length; i++) {\n            if (this.zones[i](mid.x, mid.y)) {\n                return true;\n            }\n        }\n        return false;\n    }\n\n    changePos(trajx, trajy,mag) {\n        return [this.pos[0] + (this.dir.x * trajx) * mag, this.pos[1] + (this.dir.y * trajy) * mag]\n    }\n    \n    move() {      \n        // let inBounds=true;\n        let angle = this.clubPos[1] < this.pos[1] ? \n        Math.acos(this.traj.x / this.c) : -1 * Math.acos(this.traj.x / this.c)\n        let trajx = Math.cos(angle);\n        let trajy = Math.sin(angle);\n        let mag = 5;\n        let newPos = this.changePos(trajx, trajy, mag);\n        // let newPos = [this.pos[0]+(this.dir.x*trajx)*mag, this.pos[1]+(this.dir.y*trajy)*mag]\n        // debugger\n        //magnitude will be mutliplied by traj to displace ball\n        //if ball out of bounds, will decrease by 0.1 till in bounds\n        for (let i=0; i<this.bounds.length; i++) {\n            if (this.bounds[i](newPos[0],newPos[1]))\n            //  ||\n            // this.outOfBounds([this.pos[0], this.pos[1]],\n            // [this.pos[0] + mag * dir.x * this.traj.x, this.pos[1] + mag * dir.y * this.traj.y])) \n            {\n                // inBounds=false;\n                // while ((this.bounds[i](newPos) && mag>0 ))\n                // ||\n                // this.outOfBounds([this.pos[0], this.pos[1]],\n                // [this.pos[0] + mag * dir.x * this.traj.x, this.pos[1] + mag * dir.y * this.traj.y]))\n                // && mag>0) \n                // {\n                //     mag -= 0.1;\n                // }\n                // this stops ball right at point where it hits wall\n                mag = 1;\n                this.step += (1*mag);\n                newPos = this.changePos(trajx, trajy, mag)\n                this.pos = newPos\n                // this.pos[0] += mag * dir.x * trajx;\n                // this.pos[1] += mag * dir.y * trajy;\n                // need to determine which direction ball will deflect in\n                //if deflection in one direction leads to out of bounds, will deflect in the other\n                if (this.bounds[i](this.pos[0] + (-1 * trajx), this.pos[1] + (trajy))) {\n                // ||\n                // this.outOfBounds([this.pos[0], this.pos[1]],\n                // [this.pos[0] + mag * -1 * this.traj.x, this.pos[1] + mag * this.traj.y])) \n                // {\n                    this.dir = { x: 1, y: -1 };\n                    // setTimeout(() => this.move(), 100) \n                    // this.move()\n                    // this.move(mag, {x: 1, y: -1})\n                }\n                else if (this.bounds[i](this.pos[0] + (trajx), this.pos[1] + (-1 * trajy))) {\n                // ||\n                this.dir = { x: -1, y: 1 }\n                // this.outOfBounds([this.pos[0], this.pos[1]],\n                // [this.pos[0] + mag * this.traj.x, this.pos[1] + mag * -1 * this.traj.y])) {\n                    // setTimeout(() => this.move(), 100)\n                    // this.move()\n                    // this.move(mag, { x: -1, y: 1 })\n                }\n                break;\n            }\n        }\n  \n        newPos = this.changePos(trajx, trajy, mag)\n\n        //check if ball is in hole\n        if (newPos[0] === this.holePos) {\n            this.step+=(1*mag)\n            this.pos = this.holePos\n        }\n        else{\n            this.step += (1*mag)\n            this.pos = newPos\n        }\n        // }\n        if (this.step < this.c * 3) {\n            window.requestAnimationFrame(this.move.bind(this));\n        }\n        else if (this.step >= this.c * 3) {\n            this.step = 0;\n            this.dir = {x:1, y:1};\n        }   \n    }   \n\n    draw() {\n        if (this.courseDims[7]) {\n            //outer yellow border\n            this.ctx.beginPath();\n            this.ctx.moveTo(this.courseDims[1][0], this.courseDims[1][1]);\n            this.ctx.lineTo(this.courseDims[2][0], this.courseDims[2][1]);\n            this.ctx.lineTo(this.courseDims[3][0], this.courseDims[3][1]);\n            this.ctx.lineTo(this.courseDims[4][0], this.courseDims[4][1]);\n            this.ctx.lineTo(this.courseDims[5][0], this.courseDims[5][1]);\n            this.ctx.lineTo(this.courseDims[6][0], this.courseDims[6][1]);\n            this.ctx.lineTo(this.courseDims[7][0], this.courseDims[7][1]);\n            this.ctx.lineTo(this.courseDims[8][0], this.courseDims[8][1]);\n            this.ctx.lineTo(this.courseDims[9][0], this.courseDims[9][1]);\n            this.ctx.lineTo(this.courseDims[10][0], this.courseDims[10][1]);\n            this.ctx.lineTo(this.courseDims[11][0], this.courseDims[11][1]);\n            this.ctx.lineTo(this.courseDims[12][0], this.courseDims[12][1]);\n            this.ctx.fillStyle = \"rgb(221, 245, 66)\";\n            this.ctx.fill();\n            this.ctx.closePath();\n\n            //grass\n            this.ctx.beginPath();\n            this.ctx.moveTo(this.courseDims[1][0] + 5, this.courseDims[1][1] + 5);\n            this.ctx.lineTo(this.courseDims[2][0] + 5, this.courseDims[2][1] - 5);\n            this.ctx.lineTo(this.courseDims[3][0] + 5, this.courseDims[3][1] - 5);\n            this.ctx.lineTo(this.courseDims[4][0] + 5, this.courseDims[4][1] + 5);\n            this.ctx.lineTo(this.courseDims[5][0] + 5, this.courseDims[5][1] + 5);\n            this.ctx.lineTo(this.courseDims[6][0] + 5, this.courseDims[6][1] - 5);\n            this.ctx.lineTo(this.courseDims[7][0] - 5, this.courseDims[7][1] - 5);\n            this.ctx.lineTo(this.courseDims[8][0] - 5, this.courseDims[8][1] + 5);\n            this.ctx.lineTo(this.courseDims[9][0] - 5, this.courseDims[9][1] + 5);\n            this.ctx.lineTo(this.courseDims[10][0] - 5, this.courseDims[10][1] - 5);\n            this.ctx.lineTo(this.courseDims[11][0] - 5, this.courseDims[11][1] - 5);\n            this.ctx.lineTo(this.courseDims[12][0] - 5, this.courseDims[12][1] + 5);\n            this.ctx.fillStyle = \"rgb(66, 245, 81)\";\n            this.ctx.fill();\n            this.ctx.closePath();\n\n            // this.ctx.drawImage(\n            //     this.hole,\n            //     this.holePos[0], this.holePos[1],\n            // ) \n\n            //golf hole\n            this.ctx.beginPath()\n            this.ctx.arc(this.holePos[0], this.holePos[1], 8, 0, Math.PI * 2, true)\n            this.ctx.fillStyle = \"rgb(18, 17, 17)\"\n            this.ctx.fill()\n            this.ctx.closePath()\n            this.ctx.beginPath()\n            this.ctx.arc(this.holePos[0], this.holePos[1], 6, 0, Math.PI, true)\n            this.ctx.fillStyle = \"rgb(69, 68, 68)\"\n            this.ctx.fill()\n            this.ctx.closePath()\n        }\n\n        //green mat\n        this.ctx.fillStyle = \"rgb(31, 87, 36)\";\n        this.ctx.fillRect(this.range.xmin, this.range.ymin, this.range.xmax-this.range.xmin, this.range.ymax-this.range.ymin);\n        \n        //draw ball\n        this.ctx.beginPath()\n        this.ctx.arc(this.pos[0], this.pos[1], 5, 0, Math.PI * 2, false)\n        this.ctx.fillStyle = \"rgb(255, 255, 255)\"\n        this.ctx.fill()\n        this.ctx.closePath()\n\n        //render club and aim if ball is placed\n        if (this.clicked && !this.ballisMoving) {\n            this.ctx.drawImage(\n                this.club,\n                this.clubPos[0], this.clubPos[1],\n            )\n\n            for (let i=0; i<6; i++) {\n                this.ctx.beginPath()\n                this.ctx.arc((this.pos[0]+2)+(i*((this.traj.x)/6)), (this.pos[1]+1.5)+(i*((this.traj.y)/6)), 2, 0, Math.PI * 2, false)\n                this.ctx.fillStyle = \"rgb(226, 255, 59)\"\n                this.ctx.fill()\n                this.ctx.closePath()\n            }\n        }\n    }\n    \n    windowToCanvas(canvas, x, y) {\n        var bbox = canvas.getBoundingClientRect();\n\n        return {\n            x: x - bbox.left * (canvas.width / bbox.width),\n            y: y - bbox.top * (canvas.height / bbox.height)\n        };\n    }\n    \n    mouseClickHandler(e) {\n        if (this.initialLoad) {\n            this.initialLoad = false;\n        }\n        else if (!this.clicked) {\n            this.clicked = true;\n            this.gameCanvas.classList.toggle('place-ball');\n            this.gameCanvas.classList.toggle('ball-placed');\n        }\n    }\n\n    mouseMoveHandler(e) {\n        \n        let loc = this.windowToCanvas(this.canvas, e.clientX, e.clientY);\n\n        if (this.clicked) {\n            this.pos[0] = this.pos[0]\n            this.pos[1] = this.pos[1]\n        }\n        else{\n            if ((loc.x >= this.range.xmin && loc.x <= this.range.xmax) \n            && (loc.y >= this.range.ymin && loc.y <= this.range.ymax)\n            ) {\n                this.pos[0] = loc.x\n                this.pos[1] = loc.y\n            }\n        }\n\n        this.clubPos[0] = loc.x;\n        this.clubPos[1] = loc.y;\n\n        let a = (this.pos[0] - loc.x);\n        let b = (this.pos[1] - loc.y);\n        this.c = Math.sqrt(a * a + b * b);\n        let angle = Math.atan2(b, a)\n        this.traj = {\n            x: Math.cos(angle) * this.c,\n            y: Math.sin(angle) * this.c\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GolfCourse);\n\n//# sourceURL=webpack:///./src/golfcourse.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n// import PuttPutt from './game';\n\n// const canvas = document.getElementById('golf-course');\n// const canvas2 = document.getElementById('background-hover-canvas');\n\n// new PuttPutt(canvas, canvas2);\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"game-canvas\");\n    canvas.height = 550;\n    canvas.width = 900;\n\n    const ctx = canvas.getContext('2d');\n    // ctx.fillStyle = \"rgb(126, 200, 80)\";\n    // ctx.fillRect(0, 0, canvas.width, canvas.height);\n    let img = new Image();\n    img.src = \"assets/images/grass.png\"\n    ctx.drawImage(img, canvas.width / 2, canvas.height / 2)\n    // ctx.fillStyle = \"rgb(0, 0, 0)\";\n    // ctx.fillRect(20, 20, 20, 20)\n    const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n})\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const canvas = document.getElementById(\"game-canvas\");\n//     canvas.height = 550;\n//     canvas.width = 900;\n\n//     const ctx = canvas.getContext('2d');\n//     ctx.fillStyle = \"rgb(126, 200, 80)\";\n//     ctx.fillRect(0, 0, canvas.width, canvas.height);\n//     const gameView = new GameView(ctx);\n// })\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst levels = {\n    1: {\n        par: 3,\n        courseDims: {\n            1: [200,100],\n            2: [200,200],\n            3: [280,200],\n            4: [280,400],\n            5: [200,400],\n            6: [200,500],\n            7: [400, 500],\n            8: [400, 400],\n            9: [320, 400],\n            10: [320, 200],\n            11: [400, 200],\n            12: [400, 100],\n        },\n        bounds:[(x,y)=>x<=200-2 || x>=400-2 || y <= 100-2 || y>=500-2,\n            (x,y)=>((y>=200-2 && y<=400-2)&&(x>=200-2 && x<=280-2)),\n            (x, y) => ((y >= 200-2 && y <= 400-2) && (x >= 320-2 && x <= 400-2))],\n        zones: [(x, y) => ((y >= 200 && y <= 400) && (x >= 200 && x <= 280)),\n            (x, y) => ((y >= 200 && y <= 400) && (x >= 320 && x <= 400))],\n        holePos: [230,145],\n        range: { xmin: 260, ymin: 440, xmax: 340, ymax: 480 },\n        menuTitle: '',\n        menuText: \"Thanks for Playing!\",\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (levels);\n\n//# sourceURL=webpack:///./src/levels.js?");

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