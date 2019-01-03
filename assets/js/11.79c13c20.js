(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{178:function(t,e,n){"use strict";n.r(e);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"javascript-中的数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript-中的数据","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript 中的数据")]),t._v(" "),n("h3",{attrs:{id:"javascript-基础数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript-基础数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript 基础数据类型")]),t._v(" "),n("p",[t._v("值类型")]),t._v(" "),n("ul",[n("li",[t._v("boolean")]),t._v(" "),n("li",[t._v("null")]),t._v(" "),n("li",[t._v("undefined")]),t._v(" "),n("li",[t._v("number")]),t._v(" "),n("li",[t._v("string")]),t._v(" "),n("li",[t._v("symbol")])]),t._v(" "),n("p",[t._v("值类型存储的都是值，是没有函数可以调用的，但是 JS 做了特殊处理，在调用方法的时候会转化为其相符的引用类型再进行操作,")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var a = 'abc';\nconsole.log(a.indexOf('1'))\n// 等价于\nvar a = 'abc';\n// a -> var a = new String('abc')\nconsole.log(a.indexOf('1'))\n")])])]),n("p",[t._v("引用类型")]),t._v(" "),n("ul",[n("li",[t._v("object")]),t._v(" "),n("li",[t._v("function")]),t._v(" "),n("li",[t._v("array")])]),t._v(" "),n("p",[t._v("在 JS 中，除了值类型其他的都是对象类型。对象类型和值类型不同的是，值存储的是值，对象类型存储的是地址。当你创建了一个对象类型的时候，计算机会在内存中帮我们开辟一个空间来存放值，但是我们需要找到这个空间，这个空间会拥有一个地址。")]),t._v(" "),n("h1",{attrs:{id:"判断类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#判断类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 判断类型")]),t._v(" "),n("p",[t._v("typeof 对于值类型而言，除了 null 都可以显示正确的类型")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("typeof 1 // 'number'\ntypeof '1' // 'string'\ntypeof undefined // 'undefined'\ntypeof true // 'boolean'\ntypeof Symbol() // 'symbol'\n")])])]),n("p",[t._v("typeof 对于对象类型来说，除了函数都会显示 object，所以说 typeof 并不能准确判断变量到底是什么类型")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("typeof [] // 'object'\ntypeof {} // 'object'\ntypeof console.log // 'function'\n")])])]),n("p",[t._v("想要判断一个对象类型的正确类型可以使用 instanceof")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const Person = function() {}\nconst p1 = new Person()\np1 instanceof Person // true\n\nvar str = 'hello world'\nstr instanceof String // false\n\nvar str1 = new String('hello world')\nstr1 instanceof String // true\n")])])]),n("p",[t._v("使用 Object.toString()方法可以判断正确的类型信息")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Object.prototype.toString.call('') ;   // [object String]\nObject.prototype.toString.call(1) ;    // [object Number]\nObject.prototype.toString.call(true) ; // [object Boolean]\nObject.prototype.toString.call(Symbol()); //[object Symbol]\nObject.prototype.toString.call(undefined) ; // [object Undefined]\nObject.prototype.toString.call(null) ; // [object Null]\nObject.prototype.toString.call(new Function()) ; // [object Function]\nObject.prototype.toString.call(new Date()) ; // [object Date]\nObject.prototype.toString.call([]) ; // [object Array]\nObject.prototype.toString.call(new RegExp()) ; // [object RegExp]\nObject.prototype.toString.call(new Error()) ; // [object Error]\nObject.prototype.toString.call(document) ; // [object HTMLDocument]\nObject.prototype.toString.call(window) ; //[object global] window 是全局对象 global 的引用\n")])])])])}],!1,null,null,null);o.options.__file="DataInJavaScript.md";e.default=o.exports}}]);