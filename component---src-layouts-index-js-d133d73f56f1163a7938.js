webpackJsonp([0x67ef26645b2a,60335399758886],{110:function(e,t){e.exports={layoutContext:{}}},205:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o=n(2),r=l(o),u=n(210),c=l(u),i=n(110),f=l(i);t.default=function(e){return r.default.createElement(c.default,a({},e,f.default))},e.exports=t.default},331:function(e,t){},208:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=l(u),i=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return c.default.createElement("section",{id:"footer"},c.default.createElement("ul",{className:"icons"},c.default.createElement("li",null,c.default.createElement("a",{href:"http://linkedin.com/in/kellycolht/",className:"icon alt fa-linkedin"},c.default.createElement("span",{className:"label"},"LinkedIn"))),c.default.createElement("li",null,c.default.createElement("a",{href:"http://github.com/kelcol",className:"icon alt fa-github"},c.default.createElement("span",{className:"label"},"GitHub"))),c.default.createElement("li",null,c.default.createElement("a",{href:"https://stackoverflow.com/users/8072136/kelly",className:"icon alt fa-stack-overflow"},c.default.createElement("span",{className:"label"},"Stack Overflow"))),c.default.createElement("li",null,c.default.createElement("a",{href:"mailto:kelly@justemail.net?subject=Hello!",className:"icon alt fa-envelope"},c.default.createElement("span",{className:"label"},"Email")))),c.default.createElement("ul",{className:"copyright"},c.default.createElement("li",null,"© Kelly Colht")))},t}(c.default.Component);t.default=i,e.exports=t.default},209:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=l(u),i=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return c.default.createElement("section",{id:"header"},c.default.createElement("div",{className:"inner"},c.default.createElement("span",{className:"icon major fa-cloud"}),c.default.createElement("h1",null,"Hi, I'm ",c.default.createElement("strong",null,"Kelly Colht"),", a librarian",c.default.createElement("br",null),"and web developer based in the Seattle area."),c.default.createElement("p",null,"Heads up! This site is under construction and has not entered final form."),c.default.createElement("ul",{className:"actions"},c.default.createElement("li",null,c.default.createElement("a",{href:"#one",className:"button scrolly"},"Learn More")))))},t}(c.default.Component);t.default=i,e.exports=t.default},210:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=l(u),i=n(107);l(i);n(331);var f=n(209),s=l(f),p=n(208),d=l(p),m=function(e){function t(n){a(this,t);var l=o(this,e.call(this,n));return l.state={loading:"is-loading"},l}return r(t,e),t.prototype.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.prototype.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.prototype.render=function(){var e=this.props.children;return c.default.createElement("div",{className:"body "+this.state.loading},c.default.createElement(s.default,null),e(),c.default.createElement(d.default,null))},t}(c.default.Component);m.propTypes={children:c.default.PropTypes.func},t.default=m,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-d133d73f56f1163a7938.js.map