!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.todoReactComponents=e()}}(function(){var e;return function e(t,n,o){function a(r,s){if(!n[r]){if(!t[r]){var u="function"==typeof require&&require;if(!s&&u)return u(r,!0);if(l)return l(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var i=n[r]={exports:{}};t[r][0].call(i.exports,function(e){var n=t[r][1][e];return a(n?n:e)},i,i.exports,e,t,n,o)}return n[r].exports}for(var l="function"==typeof require&&require,r=0;r<o.length;r++)a(o[r]);return a}({1:[function(t,n){!function(){"use strict";function t(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a))e.push(t.apply(null,a));else if("object"===l)for(var r in a)o.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof n&&n.exports?n.exports=t:"function"==typeof e&&"object"==typeof e.amd&&e.amd?e("classnames",[],function(){return t}):window.classNames=t}()},{}],2:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,l=o(a),r=e("classnames"),s=o(r),u=e("../site/site-header"),c=o(u),i=function(e){return l.default.createElement("div",null,l.default.createElement(c.default,e.siteHeader),l.default.createElement("main",{className:s.default("page",e.className)},l.default.createElement("p",null,"Read the article for more details: ",l.default.createElement("a",{href:"http://www.thinkloop.com/article/extreme-decoupling-react-redux-selectors",target:"_blank"},"Extreme Decoupling React Redux Selectors")),l.default.createElement("p",null,"See the code on github:"),l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("a",{href:"https://github.com/thinkloop/todo-app"},l.default.createElement("strong",null,"integration"),": selectors")),l.default.createElement("li",null,l.default.createElement("a",{href:"https://github.com/thinkloop/todo-react-components"},l.default.createElement("strong",null,"view"),": react components")),l.default.createElement("li",null,l.default.createElement("a",{href:"https://github.com/thinkloop/todo-redux-state"},l.default.createElement("strong",null,"state"),": redux container")))))};i.propTypes={className:l.default.PropTypes.string,siteHeader:l.default.PropTypes.object},n.default=i},{"../site/site-header":6,classnames:1}],3:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,i=o(c),d=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=function(e){n.props.target||n.props.href&&0===n.props.href.indexOf("mailto:")||0===!e.button||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),n.props.onClick&&n.props.onClick(n.props.href))},n.handleClick=n.handleClick.bind(n),n}return r(t,e),u(t,[{key:"render",value:function(){return i.default.createElement("a",s({},this.props,{href:this.props.href,className:"link "+this.props.className,onClick:this.handleClick}))}}]),t}(c.Component);d.propTypes={className:c.PropTypes.string,href:c.PropTypes.string,target:c.PropTypes.string,onClick:c.PropTypes.func},n.default=d},{}],4:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};n.default=function(e,t){var n=void 0;switch(e.url!==window.location.pathname&&window.history.pushState(null,null,e.url),e.selectedPage){case u.ABOUT:n=r.default.createElement(f.default,{className:"about-page",siteHeader:e.siteHeader});break;default:n=r.default.createElement(i.default,a({className:"todos-page"},e.todos,{siteHeader:e.siteHeader}))}s.render(n,t)};var l="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,r=o(l),s="undefined"!=typeof window?window.ReactDOM:"undefined"!=typeof global?global.ReactDOM:null,u=e("./site/constants/pages"),c=e("./todos/todos-page"),i=o(c),d=e("./about/about-page"),f=o(d)},{"./about/about-page":2,"./site/constants/pages":5,"./todos/todos-page":12}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.HOME="HOME",n.ABOUT="ABOUT"},{}],6:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,l=o(a),r=e("classnames"),s=o(r),u=e("../site/constants/pages"),c=e("../common/link"),i=o(c),d=function(e){return l.default.createElement("header",{className:s.default("site-header",e.className)},l.default.createElement("nav",null,l.default.createElement(i.default,{className:s.default({selected:e.selectedPage===u.HOME}),href:e.hrefHome,onClick:e.onClickHome},e.labelHome),l.default.createElement(i.default,{className:s.default({selected:e.selectedPage===u.ABOUT}),href:e.hrefAbout,onClick:e.onClickAbout},e.labelAbout)))};d.propTypes={className:l.default.PropTypes.string,selectedPage:l.default.PropTypes.string,labelHome:l.default.PropTypes.string,labelAbout:l.default.PropTypes.string,hrefHome:l.default.PropTypes.string,hrefAbout:l.default.PropTypes.string,onClickHome:l.default.PropTypes.func,onClickAbout:l.default.PropTypes.func},n.default=d},{"../common/link":3,"../site/constants/pages":5,classnames:1}],7:[function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.constants=n.render=void 0;var l=e("./render"),r=a(l),s=e("./site/constants/pages"),u=o(s),c=e("./todos/constants/statuses"),i=o(c),d={PAGES:u,TODO_STATUSES:i};n.default={render:r.default,constants:d},n.render=r.default,n.constants=d},{"./render":4,"./site/constants/pages":5,"./todos/constants/statuses":8}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.PENDING="PENDING",n.COMPLETE="COMPLETE",n.TOTAL="TOTAL"},{}],9:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,l=o(a),r=e("classnames"),s=o(r),u=function(e){return l.default.createElement("article",{className:s.default("list-item",{checked:e.isComplete},e.className)},l.default.createElement("label",{className:"description"},l.default.createElement("input",{className:"checkbox",type:"checkbox",checked:e.isComplete,onChange:e.onCheckboxToggled}),e.description),l.default.createElement("button",{className:"button",onClick:e.onButtonClicked},e.buttonLabel))};u.propTypes={className:l.default.PropTypes.string,description:l.default.PropTypes.string,isComplete:l.default.PropTypes.bool,buttonLabel:l.default.PropTypes.string,onButtonClicked:l.default.PropTypes.func,onCheckboxToggled:l.default.PropTypes.func},n.default=u},{classnames:1}],10:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,r=o(l),s=e("classnames"),u=o(s),c=e("../todos/todo-item"),i=o(c),d=function(e){return r.default.createElement("section",{className:u.default("list",e.className)},!!e.todos&&e.todos.map(function(e){return r.default.createElement(i.default,a({key:e.id},e))}))};d.propTypes={className:r.default.PropTypes.string,todos:r.default.PropTypes.array},n.default=d},{"../todos/todo-item":9,classnames:1}],11:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,c=o(u),i=e("classnames"),d=o(i),f=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleOnChange=function(e){n.setState({value:e.target.value})},n.handleOnSubmit=function(e){e.preventDefault(),n.setState({value:""}),n.props.onSubmit(n.state.value)},n.state={value:n.props.value||""},n.handleOnChange=n.handleOnChange.bind(n),n.handleOnSubmit=n.handleOnSubmit.bind(n),n}return r(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=this.state;return c.default.createElement("form",{className:d.default(e.className),onSubmit:this.handleOnSubmit},c.default.createElement("input",{className:"todos-new-form-input",value:t.value,placeholder:e.placeholder,onChange:this.handleOnChange}))}}]),t}(u.Component);f.propTypes={className:c.default.PropTypes.string,placeholder:c.default.PropTypes.string,onSubmit:c.default.PropTypes.func},n.default=f},{classnames:1}],12:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,r=o(l),s=e("classnames"),u=o(s),c=e("../site/site-header"),i=o(c),d=e("../todos/todos-new-form"),f=o(d),p=e("../todos/todos-list"),m=o(p),y=e("../todos/todos-summary"),b=o(y),g=function(e){return r.default.createElement("div",null,r.default.createElement(i.default,e.siteHeader),r.default.createElement("main",{className:u.default("page",e.className)},!!e.newForm&&r.default.createElement(f.default,a({className:"todos-new-form"},e.newForm)),!!e.list&&r.default.createElement(m.default,{className:"todos-list",todos:e.list}),!!e.summary&&r.default.createElement(b.default,a({className:"todos-summary"},e.summary))))};g.propTypes={className:r.default.PropTypes.string,siteHeader:r.default.PropTypes.object,newForm:r.default.PropTypes.object,list:r.default.PropTypes.array,summary:r.default.PropTypes.object},n.default=g},{"../site/site-header":6,"../todos/todos-list":10,"../todos/todos-new-form":11,"../todos/todos-summary":13,classnames:1}],13:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,l=o(a),r=e("classnames"),s=o(r),u=e("../todos/constants/statuses"),c=function(e){return l.default.createElement("section",{className:s.default("todo-summary",e.className)},l.default.createElement("span",{className:s.default("todo-summary-pending",{"is-selected":e.selectedSummaryStatus===u.PENDING}),onClick:e.onClickPending},e.countIncomplete),l.default.createElement("span",{className:s.default("todo-summary-complete",{"is-selected":e.selectedSummaryStatus===u.COMPLETE}),onClick:e.onClickComplete},e.countComplete),l.default.createElement("span",{className:s.default("todo-summary-total",{"is-selected":e.selectedSummaryStatus===u.TOTAL}),onClick:e.onClickTotal},e.countTotal))};c.propTypes={className:l.default.PropTypes.string,countIncomplete:l.default.PropTypes.string,countComplete:l.default.PropTypes.string,countTotal:l.default.PropTypes.string,selectedSummaryStatus:l.default.PropTypes.oneOf([u.PENDING,u.COMPLETE,u.TOTAL]),onClickPending:l.default.PropTypes.func,onClickComplete:l.default.PropTypes.func,onClickTotal:l.default.PropTypes.func},n.default=c},{"../todos/constants/statuses":8,classnames:1}]},{},[7])(7)});