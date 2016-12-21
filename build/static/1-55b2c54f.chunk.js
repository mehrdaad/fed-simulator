webpackJsonp([1],{375:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(35),o=r(a),i=n(61),s=r(i),l=n(62),c=r(l),u=n(66),p=r(u),d=n(113),f=r(d),h=n(1),m=r(h),g=n(121),v=n(219),y=r(v),_=n(176),b=n(376),w=r(b);n(388);var E=function(e){function t(){var e,n,r,a;(0,s["default"])(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=r=(0,p["default"])(this,(e=t.__proto__||(0,o["default"])(t)).call.apply(e,[this].concat(l))),r.displayName="LandingPage",a=n,(0,p["default"])(r,a)}return(0,f["default"])(t,e),(0,c["default"])(t,[{key:"render",value:function(){return m["default"].createElement("div",{className:"page landing"},m["default"].createElement(y["default"],{title:"Wrestling SIM"}),m["default"].createElement("div",{className:"inpage-content"},m["default"].createElement("div",{className:"row introduction"},m["default"].createElement("div",{className:"col-xs-12 introduction__container introduction__container--primary"},m["default"].createElement("h2",null,"Welcome to the WWE Universe Simulation"))),m["default"].createElement("div",{className:"row introduction"},m["default"].createElement("div",{className:"col-xs-12 introduction__container introduction__container--secondary"},m["default"].createElement("div",{className:"row introduction__boxes"},m["default"].createElement(g.Link,{to:"draft"},m["default"].createElement("div",{className:"col-lg-3 col-xs-12 introduction__box draft zoom"},m["default"].createElement("h2",null,"Draft wrestlers"),m["default"].createElement("br",null),m["default"].createElement("br",null),m["default"].createElement("span",{className:"icon icon-raw"}),", ",m["default"].createElement("span",{className:"icon icon-smackdown-live"})," and ",m["default"].createElement("span",{className:"icon icon-nxt"}))),m["default"].createElement(g.Link,{to:"champions"},m["default"].createElement("div",{className:"col-lg-3 col-xs-12 introduction__box authority zoom"},m["default"].createElement("h2",null,"Be the authority"),m["default"].createElement("br",null),"Award and strip championships!",m["default"].createElement("br",null),m["default"].createElement(w["default"],{championships:this.props.championships.slice(0,5).sort(function(){return.5-Math.random()}),canDragAndDrop:!1}))),m["default"].createElement(g.Link,{to:"show"},m["default"].createElement("div",{className:"col-lg-3 col-xs-12 introduction__box shows zoom"},m["default"].createElement("h2",null,"Put on Shows!"),m["default"].createElement("br",null),m["default"].createElement("br",null),"With match simulations and a win and loss count that matters")),m["default"].createElement(g.Link,{to:"ranking"},m["default"].createElement("div",{className:"col-lg-3 col-xs-12 introduction__box ranking zoom"},m["default"].createElement("h2",null,"WWE Power ranking"),m["default"].createElement("br",null),m["default"].createElement("br",null),"View rankings across brands to see whos winning")))))))}}]),t}(m["default"].Component);E.propTypes={dispatch:m["default"].PropTypes.func.isRequired,championships:m["default"].PropTypes.array.isRequired},t["default"]=(0,_.connect)(function(e){return{championships:e.championships}})(E)},376:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(35),i=a(o),s=n(61),l=a(s),c=n(62),u=a(c),p=n(66),d=a(p),f=n(113),h=a(f),m=n(1),g=a(m),v=n(377),y=a(v),_=n(380),b=r(_),w=n(176),E=n(381),x=a(E),D=n(382);n(386);var O=function(e){function t(){var e,n,r,a;(0,l["default"])(this,t);for(var o=arguments.length,s=Array(o),c=0;c<o;c++)s[c]=arguments[c];return n=r=(0,d["default"])(this,(e=t.__proto__||(0,i["default"])(t)).call.apply(e,[this].concat(s))),r.onDrop=function(e,t){if(r.props.canDragAndDrop){var n=t.wrestler,a=r.props.wrestlers.filter(function(e){return e.id===n})[0];a.male===e.male?r.props.dispatch(b.awardChampionship(e,a)):alert("Gender conflict")}},r.displayName="Championships",a=n,(0,d["default"])(r,a)}return(0,h["default"])(t,e),(0,u["default"])(t,[{key:"render",value:function(){var e=this,t=function(){return g["default"].createElement("span",null,"Vacant")};return g["default"].createElement("div",{className:"championships"},this.props.championships.sort(function(e,t){return e.sequence>t.sequence?1:-1}).map(function(n,r){var a=n.wrestlers.length>0?"active":"vacant";return g["default"].createElement("div",{key:r,className:"championship "+a},g["default"].createElement(D.Droppable,{types:["wrestler"],onDrop:e.onDrop.bind(e,n)},e.props.showBadge?g["default"].createElement("span",{className:"badge"},n.changes):null,g["default"].createElement("span",{className:"hvr-push"},g["default"].createElement(y["default"],{name:n.name})),g["default"].createElement("div",{className:(0,x["default"])(["championship__holdername","championship__holdername--"+e.context.toSlug(n.name)])},n.wrestlers.length>0?n.wrestlers.map(function(e,t){return g["default"].createElement("span",{key:t,className:"truncate"},e.name)}):g["default"].createElement(t,null),n.tag&&n.wrestlers.length<2?g["default"].createElement(t,null):null)))}))}}]),t}(g["default"].Component);O.propTypes={dispatch:g["default"].PropTypes.func.isRequired,championships:g["default"].PropTypes.array.isRequired,canDragAndDrop:g["default"].PropTypes.bool,showBadge:g["default"].PropTypes.bool},O.contextTypes={toSlug:g["default"].PropTypes.func.isRequired},O.defaultProps={canDragAndDrop:!0,showBadge:!1},t["default"]=(0,w.connect)(function(e){return{wrestlers:e.wrestlers}})(O)},377:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(35),o=r(a),i=n(61),s=r(i),l=n(62),c=r(l),u=n(66),p=r(u),d=n(113),f=r(d),h=n(1),m=r(h),g=n(213);n(378);var v=function(e){function t(){return(0,s["default"])(this,t),(0,p["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,f["default"])(t,e),(0,c["default"])(t,[{key:"render",value:function(){var e=this,t=(0,g.toSlug)(this.props.name),n=this.props.active?"active":"inactive";return m["default"].createElement("span",{onClick:function(){return e.props.onClick(e.props.name)},className:"icon icon-"+t+" "+n,alt:name,title:name})}}]),t}(m["default"].Component);v.propTypes={onClick:m["default"].PropTypes.func,name:m["default"].PropTypes.string.isRequired,active:m["default"].PropTypes.bool},v.defaultProps={onClick:function(){},active:!1,name:""},t["default"]=v},378:function(e,t,n){var r=n(379);"string"==typeof r&&(r=[[e.id,r,""]]);n(374)(r,{});r.locals&&(e.exports=r.locals)},379:function(e,t,n){t=e.exports=n(373)(),t.push([e.id,".icon.active{border:5px solid gray}.wrestler--smackdown-live .icon.active{border-color:#b3afff}.wrestler--raw .icon.active{border-color:#f58d94}.wrestler--nxt .icon.active{border-color:#ffe69c}",""])},380:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e,t){return{type:c.MOVE_CHAMPIONSHIP,championship:e,wrestler:t}}function o(){return{type:c.RESET_CHAMPIONS}}function i(){return{type:c.CLEAR_CHAMPIONS}}function s(e){var t=e.winner,n=e.loser,r=e.losers;return{type:c.SHOULD_MOVE_CHAMPIONSHIP,winner:t,loser:n,losers:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.awardChampionship=a,t.reset=o,t.clear=i,t.shouldTheChampionshipMove=s;var l=n(368),c=r(l)},381:function(e,t,n){var r,a;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===a)for(var i in r)o.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],a=function(){return n}.apply(t,r),!(void 0!==a&&(e.exports=a)))}()},382:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(383)),o=r(n(384));t.Draggable=a,t.Droppable=o},383:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},a=function(){function e(e,t){for(var n in t){var r=t[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=r(n(1)),l=function(e){function t(){i(this,t),null!=e&&e.apply(this,arguments)}return o(t,e),a(t,{render:{value:function(){var e=Object.assign({},this.props);return this.props.enabled&&(e.draggable="true",e.onDragEnd=this.onDragEnd.bind(this),e.onDragStart=this.onDragStart.bind(this)),delete e.enabled,s.createElement("div",e,this.props.children)}},onDragStart:{value:function(e){"function"==typeof this.props.onDragStart&&this.props.onDragStart(e),e.dataTransfer.setData(this.props.type,this.props.data)}},onDragEnd:{value:function(e){"function"==typeof this.props.onDragEnd&&this.props.onDragEnd(e)}}}),t}(s.Component);e.exports=l,l.defaultProps={enabled:!0}},384:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},a=function(){function e(e,t){for(var n in t){var r=t[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function d(e,t,n){var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:d(a,t,n)}if("value"in r&&r.writable)return r.value;var o=r.get;if(void 0!==o)return o.call(n)},i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=r(n(1)),u=r(n(385)),p=function(e){function t(e){s(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={over:!1}}return i(t,e),a(t,{render:{value:function(){var e="Droppable";return this.state.over&&(e+=" over"),c.createElement("div",l({ref:"droppable",className:e},this.filterProps(),{onDrop:this.onDrop.bind(this),onDragOver:this.onDragOver.bind(this),onDragEnter:this.onDragEnter.bind(this),onDragLeave:this.onDragLeave.bind(this),onDragExit:this.onDragLeave.bind(this)}),this.props.children)}},filterProps:{value:function(){var e=this,t=["types"];return Object.keys(this.props).reduce(function(n,r){return t.includes(r)||(n[r]=e.props[r]),n},{})}},onDragOver:{value:function(e){e.preventDefault(),this.allowed(e.dataTransfer.types)&&"function"==typeof this.props.onDragOver&&this.props.onDragOver(e)}},onDragEnter:{value:function(e){e.preventDefault(),this.state.over||this.allowed(e.dataTransfer.types)&&("function"==typeof this.props.onDragEnter&&this.props.onDragEnter(e),this.setState({over:!0}))}},onDragLeave:{value:function(e){if(e.preventDefault(),this.allowed(e.dataTransfer.types)){var t=!0;(e.clientX<=this.position.left||e.clientX>=this.position.right)&&(t=!1),(e.clientY<=this.position.top||e.clientY>=this.position.bottom)&&(t=!1),t||(this.setState({over:!1}),"function"==typeof this.props.onDragLeave&&this.props.onDragLeave(e))}}},onDrop:{value:function(e){if(e.preventDefault(),this.allowed(e.dataTransfer.types)){this.setState({over:!1});var t=this.props.types?[].concat(this.props.types).reduce(function(t,n){return t[n]=e.dataTransfer.getData(n),t},{}):null;"function"==typeof this.props.onDrop&&this.props.onDrop(t,e)}}},allowed:{value:function(e){var t=u.toArray(e);return!this.props.types||[].concat(this.props.types).reduce(function(e,n){return t.indexOf(n)>=0||e},!1)}},componentDidMount:{value:function(){var e=this.refs.droppable;this.position={top:e.offsetTop+5,left:e.offsetLeft+5,right:e.offsetLeft+e.offsetWidth-5,bottom:e.offsetTop+e.offsetHeight-5}}}}),t}(c.Component);e.exports=p},385:function(e,t){"use strict";function n(e){for(var t=[],n=e.length>>>0;n--;)t[n]=e[n];return t}e.exports={toArray:n}},386:function(e,t,n){var r=n(387);"string"==typeof r&&(r=[[e.id,r,""]]);n(374)(r,{});r.locals&&(e.exports=r.locals)},387:function(e,t,n){t=e.exports=n(373)(),t.push([e.id,".championships{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center}.championships .championship{vertical-align:top;position:relative;padding:1em 0;margin:0 1rem}.championships .championship .badge{background-color:#f0efef;color:#000;border-radius:50%;position:absolute;top:0;right:40%}.championships .championship__holdername{position:relative}.championships .championship__holdername span{display:block}.championships .championship.vacant{color:#ccc}@media (max-width:767px){.championships .championship{padding:0;zoom:.7}.championships .championship .badge{display:none}}",""])},388:function(e,t,n){var r=n(389);"string"==typeof r&&(r=[[e.id,r,""]]);n(374)(r,{});r.locals&&(e.exports=r.locals)},389:function(e,t,n){t=e.exports=n(373)(),t.push([e.id,".page.landing .introduction,.page.landing .introduction a{color:#fff}.page.landing .introduction__container{padding:50px;background-color:#003250}.page.landing .introduction__boxes{background-color:#00263d}.page.landing .introduction__box{background-color:#00263d;padding:1.8rem;font-size:2.5rem;height:275px}.page.landing .introduction__box h2{font-size:2rem;font-weight:700;text-transform:uppercase}.page.landing .introduction__container--primary{padding:10px 50px}.page.landing .introduction__container--secondary{text-shadow:0 1px 0 #000}.page.landing .introduction__container--secondary .introduction__box{background-size:cover;background-repeat:no-repeat}.page.landing .introduction__container--secondary.introduction__container{padding:0 1rem}.page.landing .introduction__container--secondary .ranking{background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url("+n(390)+")}.page.landing .introduction__container--secondary .authority{background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url("+n(391)+")}.page.landing .introduction__container--secondary .authority .championships{overflow:hidden;height:65px;margin:0 -40px}.page.landing .introduction__container--secondary .authority .championships .championship__holdername{display:none}.page.landing .introduction__container--secondary .draft{background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url("+n(392)+")}.page.landing .introduction__container--secondary .draft .icon{zoom:.3}.page.landing .introduction__container--secondary .shows{background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url("+n(393)+")}",""])},390:function(e,t,n){e.exports=n.p+"static/ranking.jpg"},391:function(e,t,n){e.exports=n.p+"static/championship.jpg"},392:function(e,t,n){e.exports=n.p+"static/draft.jpg"},393:function(e,t,n){e.exports=n.p+"static/shows.jpg"}});