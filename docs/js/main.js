/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Objects.js":
/*!***********************!*\
  !*** ./js/Objects.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameObject: () => (/* binding */ GameObject),\n/* harmony export */   PhysicalObject: () => (/* binding */ PhysicalObject)\n/* harmony export */ });\n/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector.js */ \"./js/vector.js\");\n\r\n\r\nconst G = 9.8;\r\n\r\nclass GameObject {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n\r\n    set name(value) {\r\n        if (typeof(value) !== \"string\") throw new Error(\"name должен быть типа String!\");\r\n\r\n        this.Name = value;\r\n    }\r\n\r\n    get name() {\r\n        return this.Name;\r\n    }\r\n}\r\n\r\nclass PhysicalObject extends GameObject {\r\n    baseCharactersName = [\r\n        \"position\",\r\n        \"speed\",\r\n        \"weight\",\r\n        \"attraction\",\r\n        \"size\"\r\n    ];\r\n\r\n    constructor(name, characters) {\r\n        super(name);\r\n\r\n        \r\n        for (let character in characters) {\r\n            for (let i = 0; i < this.baseCharactersName.length; i++) {\r\n                if (character.toString() === this.baseCharactersName[i]) {\r\n                    this[this.baseCharactersName[i]] = characters[character];\r\n                }\r\n            }\r\n        }\r\n        \r\n        this.gravity = G * this.weight;\r\n        this.leftExtremePoint = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(this.position.x - this.size.x / 2, this.position.y - this.size.y / 2);\r\n        this.rightExtremePoint = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2);\r\n\r\n        if (this.speed && this.gravity) this.speed.y += this.gravity;\r\n    }\r\n    \r\n    set speed(value) {\r\n        if (!(value instanceof _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector)) throw new Error(\"speed должен быть типа Vector!\");\r\n        \r\n        this.Speed = value;\r\n    }\r\n\r\n    get speed() {\r\n        return this.Speed;\r\n    }\r\n\r\n    set position(value) {\r\n        if (!(value instanceof _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector)) throw new Error(\"position должен быть типа Vector!\");\r\n\r\n        this.Position = value;\r\n    }\r\n\r\n    get position() {\r\n        return this.Position;\r\n    }\r\n    \r\n    set weight(value) {\r\n        if (typeof(value) !== \"number\") throw new Error(\"weight доолежн быть типа number!\");\r\n        \r\n        this.Weight = value;\r\n    }\r\n    \r\n    get weight() {\r\n        return this.Weight;\r\n    }\r\n    \r\n    set attraction(value) {\r\n        if (typeof(value) !== \"boolean\") throw new Error(\"attraction доолежн быть типа boolean!\");\r\n        \r\n        this.Attraction = value;\r\n    }\r\n    \r\n    get attraction() {\r\n        return this.Attraction;\r\n    }\r\n    \r\n    set gravity(value) {\r\n        if (typeof(value) !== \"number\") throw new Error(\"gravity доолежн быть типа number!\");\r\n        \r\n        this.Gravity = value;\r\n    }\r\n\r\n    get gravity() {\r\n        return this.Gravity;\r\n    }\r\n    \r\n    set size(value) {\r\n        if (!(value instanceof _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector)) throw new Error(\"size должен быть типа Vector!\");\r\n\r\n        this.Size = value;\r\n    }\r\n\r\n    get size() {\r\n        return this.Size;\r\n    }\r\n\r\n    collision(object) {\r\n        if (\r\n            ((this.rightExtremePoint.x >= object.leftExtremePoint.x) && (this.leftExtremePoint.y <= object.rightExtremePoint.y))\r\n            &&\r\n            ((this.rightExtremePoint.y >= object.leftExtremePoint.y) && (this.leftExtremePoint.y <= object.rightExtremePoint.y))\r\n            ) return true;\r\n        return false;\r\n    }\r\n\r\n    rectConclusion(context, color = \"#f00\") {\r\n        context.fillStyle = color;\r\n        context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);\r\n    }\r\n\r\n    move(vector) {\r\n        if (!(vector instanceof _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector)) throw new Error(\"vector должен быть типа Vector!\")\r\n\r\n        this.position = this.position.summage(vector);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/Objects.js?");

/***/ }),

/***/ "./js/Table.js":
/*!*********************!*\
  !*** ./js/Table.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Table: () => (/* binding */ Table)\n/* harmony export */ });\n/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector.js */ \"./js/vector.js\");\n/* harmony import */ var _Objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Objects.js */ \"./js/Objects.js\");\n\r\n\r\n\r\nclass Table extends _Objects_js__WEBPACK_IMPORTED_MODULE_1__.PhysicalObject {\r\n    baseNumber = 2;\r\n    \r\n    constructor(name, characters, number = 2) {\r\n        super(name, characters);\r\n\r\n        this.number = number;\r\n        let percent = 240 * (this.number / this.baseNumber / 10);\r\n        \r\n        if (this.number < 128) {\r\n            this.red = 240;\r\n            this.blue = 240 - percent;\r\n            this.green = 240 - percent;\r\n            this.textColor = \"#000\";\r\n        } else if (this.number < 4096) {\r\n            this.blue = 240;\r\n            this.red = 240 - percent / 100;\r\n            this.green = 240 - percent / 100;\r\n            this.textColor = \"#fff\";\r\n        } else if (number >= 4096) {\r\n            this.blue = 240 - percent / 1000; \r\n            this.red = 240 - percent / 1000;\r\n            this.green = 240;\r\n        }\r\n\r\n        this.color = `rgb(${this.red}, ${this.green}, ${this.blue})`;\r\n    }\r\n\r\n    set number(value) {\r\n        if (typeof(value) !== \"number\") throw new Error(\"number должен быть типа Number!\");\r\n\r\n        this.Number = value;\r\n    }\r\n\r\n    get number() {\r\n        return this.Number;\r\n    }\r\n\r\n    set textColor(value) {\r\n        if (typeof(value) !== \"string\") throw new Error(\"textColor долежн быть типа String!\");\r\n\r\n        this.TextColor = value;\r\n    }\r\n\r\n    get textColor() {\r\n        return this.TextColor;\r\n    }\r\n\r\n    set color(value) {\r\n        if (typeof(value) !== \"string\") throw new Error(\"color долежн быть типа String!\");\r\n\r\n        this.Color = value;\r\n    }\r\n\r\n    get color() {\r\n        return this.Color;\r\n    }\r\n\r\n    draw(context, fontSize = 24) {\r\n        this.rectConclusion(context, this.color);\r\n        context.fillStyle = this.textColor;\r\n        context.font = `normal ${fontSize}px arial`;\r\n        context.fillText(`${this.Number}`, this.position.x + (this.size.x / 2) - context.measureText(this.number).width / 2, this.position.y + this.size.y / 2 + fontSize / 3, 100);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/Table.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector.js */ \"./js/vector.js\");\n/* harmony import */ var _Table_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.js */ \"./js/Table.js\");\n/* harmony import */ var _gameLoop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameLoop.js */ \"./js/gameLoop.js\");\n\r\n\r\n\r\n\r\nlet canvas = document.querySelector(\"canvas\");\r\nlet context = canvas.getContext(\"2d\");\r\n\r\ndocument.body.style.margin = \"0\";\r\ndocument.body.style.overflow = \"hidden\";\r\n\r\nfunction turnBasicCanvas() {\r\n    canvas.setAttribute(\"width\", innerWidth);\r\n    canvas.setAttribute(\"height\", innerHeight);\r\n}\r\n\r\nturnBasicCanvas();\r\n\r\naddEventListener(\"resize\", turnBasicCanvas)\r\n\r\nlet table = new _Table_js__WEBPACK_IMPORTED_MODULE_1__.Table(\"Табличка\", {\r\n    position: new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(60, 58),\r\n    size: new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(50, 50)\r\n});\r\nlet table2 = new _Table_js__WEBPACK_IMPORTED_MODULE_1__.Table(\"Табличка\", {\r\n    position: new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(160, 58),\r\n    size: new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(50, 50)\r\n}, 8);\r\nlet table3 = new _Table_js__WEBPACK_IMPORTED_MODULE_1__.Table(\"Табличка\", {\r\n    position: new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(60, 208),\r\n    size: new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(50, 50)\r\n}, 2048);\r\nlet table4 = new _Table_js__WEBPACK_IMPORTED_MODULE_1__.Table(\"Табличка\", {\r\n    position: new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(60, 158),\r\n    size: new _vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(50, 50)\r\n}, 128);\r\n\r\nfunction display() {\r\n    table.draw(context);\r\n    table2.draw(context);\r\n    table3.draw(context);\r\n    table4.draw(context);\r\n}\r\n\r\nfunction update(correction) {\r\n    context.clearRect(0, 0, canvas.width, canvas.height);\r\n}\r\n\r\nnew _gameLoop_js__WEBPACK_IMPORTED_MODULE_2__.GameLoop(display, update);\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/gameLoop.js":
/*!************************!*\
  !*** ./js/gameLoop.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameLoop: () => (/* binding */ GameLoop)\n/* harmony export */ });\nclass GameLoop {\r\n    constructor(_display, _update) {\r\n        this.display = _display;\r\n        this.update = _update;\r\n\r\n        this.deltaTime = 0;\r\n        this.lastUpdate = 0;\r\n        this.maxInterval = 40;\r\n\r\n        this.animate = this.animate.bind(this);\r\n        this.animate();\r\n    }\r\n\r\n    animate(currentTime = 0) {\r\n        requestAnimationFrame(this.animate);\r\n\r\n        this.deltaTime = currentTime - this.lastUpdate;\r\n\r\n        this.update(this.deltaTime / 1000);\r\n        this.display();\r\n\r\n        this.lastUpdate = currentTime;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/gameLoop.js?");

/***/ }),

/***/ "./js/vector.js":
/*!**********************!*\
  !*** ./js/vector.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Vector: () => (/* binding */ Vector)\n/* harmony export */ });\nclass Vector {\r\n    constructor(x = 0, y = 0) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n\r\n    set x(value) {        \r\n        if (typeof(value) !== \"number\") throw new Error(\"x должен быть типа number!\")\r\n\r\n        this.X = value;\r\n    }\r\n\r\n    get x() {\r\n        return this.X;\r\n    }\r\n\r\n    set y(value) {        \r\n        if (typeof(value) !== \"number\") throw new Error(\"y должен быть типа number!\")\r\n\r\n        this.Y = value;\r\n    }\r\n\r\n    get y() {\r\n        return this.Y;\r\n    }\r\n\r\n    get length() {\r\n        if (this.x <= 0 || this.y <= 0) return 0;\r\n\r\n        return Math.sqrt(this.x ** 2 + this.y ** 2);\r\n    }\r\n\r\n    summage(vector) {\r\n        if (!(vector instanceof Vector)) throw new Error(\"vector должен быть типа Vector!\");\r\n\r\n        return new Vector(this.x + vector.x, this.y + vector.y);\r\n    }\r\n\r\n    subtract(vector) {\r\n        if (!(vector instanceof Vector)) throw new Error(\"vector должен быть типа Vector!\");\r\n\r\n        return new Vector(this.x - vector.x, this.y - vector.y);\r\n    }\r\n\r\n    multiplicationToScalar(sclar) {\r\n        if (typeof(sclar) !== \"number\") throw new Error(\"sclar должен быть типа number!\");\r\n\r\n        this.x *= sclar;\r\n        this.y *= sclar;\r\n    }\r\n\r\n    multiplicationScalarVector(vector) {\r\n        if (!(vector instanceof Vector)) throw new Error(\"vector должен быть типа Vector!\");\r\n\r\n        return this.x * vector.x + this.y * vector.y;\r\n    }\r\n\r\n    normalize() {\r\n        if (this.length <= 0) return;\r\n\r\n        this.x /= this.length;\r\n        this.y /= this.length;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/vector.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;