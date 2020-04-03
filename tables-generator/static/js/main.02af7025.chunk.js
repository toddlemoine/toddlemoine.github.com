(this.webpackJsonp1_tables=this.webpackJsonp1_tables||[]).push([[0],{15:function(e,t,n){e.exports=n(31)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),u=n.n(c),i=n(6),l=n(3),o=n(1),s=n(7),f="RTL",m={start:1,end:10,step:1,switchAfter:5,direction:"LTR"};function d(e){return e%2===0}function E(e,t,n){for(var a=[],r=0;r<e.length;){var c=r+t,u=e.slice(r,c);a.push(u),r=c}return a.map((function(e,r){return r===a.length-1&&function(e,t){for(;e.length<t;)e.push(null)}(e,t),function(e){return e===f}(n)?d(r)?e.reverse():e:d(r)?e:e.reverse()})).reverse()}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=e.start,n=e.end,a=e.step,r=e.switchAfter,c=e.direction,u=[];a=a||m.step;for(var i=t;i<=n;i+=a)u.push(i);return E(u,r,c)}function h(e,t){if(window.localStorage)try{window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error(n)}}var v={red:{start:8,end:29,step:1,switchAfter:5,width:20,direction:"LTR"},green:{start:231,end:247,step:1,switchAfter:5,width:30,direction:"LTR"},blue:{start:47,end:81,step:2,switchAfter:5,width:40,direction:"RTL"}},b={sequenceDefinitions:v,sequences:Object.entries(v).reduce((function(e,t){var n=Object(s.a)(t,2),a=n[0],r=n[1];return e[a]=p(r),e}),{}),activeSequence:null};function S(){return function(e){if(window.localStorage)try{return JSON.parse(window.localStorage.getItem(e))}catch(t){console.error(t)}}("SEQTABLE")||b}function q(e){return e.lastModified=Date.now(),e}var w=Object(l.b)((function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S(),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONFIGURE_SEQUENCE":e=Object(o.a)({},t,{activeSequence:n.sequenceId});break;case"SAVE_SEQUENCE_DEFINITION":var a=n.sequenceId,r=n.sequenceDefinition;(e=Object(o.a)({},t,{activeSequence:null})).sequenceDefinitions[a]=r,e.sequences[a]=p(r),e=q(e);break;case"CANCEL_SAVE_SEQUENCE_DEFINITION":e=Object(o.a)({},t,{activeSequence:null});break;default:e=t}return h("SEQTABLE",e),e})),y=(n(26),n(27),n(4)),N=n(5),C=n(8),I=n(9),O=(n(28),function(e){Object(I.a)(n,e);var t=Object(C.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){var e=this.props.rows;return r.a.createElement("table",{className:"sequence-table"},r.a.createElement("tbody",null,e.map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,t){return r.a.createElement("td",{key:t,disabled:null===e},e)})))}))))}}]),n}(r.a.Component));n(29);function g(e){var t=e.rows,n=e.sequenceId,a=e.width,c=e.onConfigureClick,u="".concat(a,"%"),i={width:u};return r.a.createElement("div",{className:"configurable-sequence-table",style:i,"data-sequence-id":n},r.a.createElement(O,{key:n,rows:t}),r.a.createElement("footer",null,r.a.createElement("button",{onClick:c},"Configure"),r.a.createElement("div",{className:"width-text"},u)))}n(30);function k(e){var t=e.color,n={color:t};return r.a.createElement("span",{className:"table-key",style:n},t)}function D(e){var t=e.children;return r.a.createElement("div",{className:"form-row"},t)}var j=function(e){Object(I.a)(n,e);var t=Object(C.a)(n);function n(){var e;return Object(y.a)(this,n),(e=t.call(this)).handleCancel=function(t){t.preventDefault(),e.props.onCancel()},e.handleSubmit=function(t){t.preventDefault();var n=e.props,a=n.sequenceId,r=n.sequenceDef;(0,n.onSubmit)(a,Object.keys(r).reduce((function(t,n){var a,r=e.form.current;return r[n]&&(t[n]="int"===r[n].getAttribute("data-type")?(a=r[n].value,parseInt(a,10)):r[n].value),t}),Object(o.a)({},r)))},e.form=r.a.createRef(),e}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.restoreFocusTo=document.activeElement,this.form.current.querySelector("input").focus()}},{key:"componentWillUnmount",value:function(){this.restoreFocusTo.focus()}},{key:"render",value:function(){var e=this.props,t=e.sequenceId,n=e.sequenceDef;return r.a.createElement("div",{className:"configure-form"},r.a.createElement("h2",null,"Table: ",r.a.createElement(k,{color:t},t)),r.a.createElement("form",{ref:this.form,onSubmit:this.handleSubmit},r.a.createElement(D,null,r.a.createElement("label",{htmlFor:"start"},"N ="),r.a.createElement("input",{type:"text",name:"start",defaultValue:n.start,"data-type":"int"})),r.a.createElement(D,null,r.a.createElement("label",{htmlFor:"step"},"X ="),r.a.createElement("input",{type:"text",name:"step",defaultValue:n.step,"data-type":"int"})),r.a.createElement(D,null,r.a.createElement("label",{htmlFor:"end"},"M ="),r.a.createElement("input",{type:"text",name:"end",defaultValue:n.end,"data-type":"int"})),r.a.createElement(D,null,r.a.createElement("label",{htmlFor:"width"},"W ="),r.a.createElement("input",{type:"text",name:"width",defaultValue:n.width,"data-type":"int"}),"%"),r.a.createElement(D,null,r.a.createElement("label",{htmlFor:"w"},"W ="),r.a.createElement("select",{name:"direction",defaultValue:n.direction},r.a.createElement("option",{value:"LTR"},"LTR"),r.a.createElement("option",{value:"RTL"},"RTL"))),r.a.createElement(D,null,r.a.createElement("button",{onClick:this.handleSubmit},"Save"),r.a.createElement("button",{onClick:this.handleCancel},"Cancel"))))}}]),n}(r.a.Component);var T={configureSequence:function(e){return{type:"CONFIGURE_SEQUENCE",sequenceId:e}},saveSequenceDefinition:function(e,t){return{type:"SAVE_SEQUENCE_DEFINITION",sequenceId:e,sequenceDefinition:t}},cancelSaveSequenceDefinition:function(){return{type:"CANCEL_SAVE_SEQUENCE_DEFINITION"}}},A=Object(i.b)((function(e){return e}),T)((function(e){var t=e.sequenceDefinitions,n=e.sequences,a=e.activeSequence,c=e.configureSequence,u=e.saveSequenceDefinition,i=e.cancelSaveSequenceDefinition,l=Boolean(a);return r.a.createElement("div",{className:"app"},r.a.createElement("section",{className:"tables"},Object.entries(n).map((function(e){var n=Object(s.a)(e,2),a=n[0],u=n[1];return r.a.createElement(g,{key:a,sequenceId:a,rows:u,width:t[a].width,onConfigureClick:function(){return c(a)}})}))),l&&r.a.createElement(j,{key:a,sequenceId:a,sequenceDef:t[a],onSubmit:u,onCancel:i}))}));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:w},r.a.createElement(A,null))),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.02af7025.chunk.js.map