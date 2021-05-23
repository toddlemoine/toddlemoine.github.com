(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{187:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var r,c,a=n(0),i=n.n(a),o=n(20),s=n.n(o),u=n(38),l=n(64),p=n.n(l),h=n(192),d=n(234),j=n(230),f=n(227),m=n(34),b=n(26),v=n(190),x=n(235),O=n(25),k=n(16),y=n.n(k),g=n(24),w=n(42),S=n(92),_=n(47),C=n.n(_);var P,A={appId:"pokedex",pokeapiHostName:null!==(r="pokeapi.co")?r:"",pokedexSize:null!==(c=Number("75"))&&void 0!==c?c:10},I="".concat(A.appId),T=function(){var e=Object(g.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.getItem(I);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(g.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.setItem(I,t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Error saving pokemon to cache",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),B=n(70),L=n(73),N=n(74),R=function(e){Object(B.a)(n,e);var t=Object(L.a)(n);function n(e,r){var c;return Object(w.a)(this,n),(c=t.call(this,e)).status=void 0,c.status=r,c}return n}(Object(N.a)(Error)),E=function(e){Object(B.a)(n,e);var t=Object(L.a)(n);function n(e,r){var c;return Object(w.a)(this,n),(c=t.call(this,"Error fetching Pokemon ".concat(e," (").concat(r,")"))).name=e,c.url=r,c}return n}(Object(N.a)(Error)),F=function(){var e=Object(g.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(A.pokedexSize));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),new R("Error fetching list of Pokemon.",e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(g.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.url,{headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),new E(t.name,t.url);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),H=n(7),z=function(e){var t,n,r=e.sprites.other&&e.sprites.other["official-artwork"];return null!==(t=null!==(n=null===r||void 0===r?void 0:r.front_default)&&void 0!==n?n:e.sprites.front_default)&&void 0!==t?t:""},U=function(e){var t=e.reduce((function(e,t){var n;return null===(n=t.types)||void 0===n||n.forEach((function(t){return e.add(t.type.name)})),e}),new Set);return Array.from(t).sort().map((function(e){return{name:e}}))},M=function(e){var t=e.map((function(e){var t;return null===(t=e.species)||void 0===t?void 0:t.name})).filter(Boolean),n=new Set(t);return Array.from(n).sort().map((function(e){return{name:e}}))},W=function(e){return e.stats.reduce((function(e,t){return e[t.stat.name]={base:t.base_stat,effort:t.effort},e}),{})},G={name:function(e){return e.name},type:function(e){return e.types[0].type.name},species:function(e){return e.name},exp:function(e){return e.base_experience},hp:function(e){var t,n;return null!==(t=null===(n=e.stats.find((function(e){return"hp"===e.stat.name})))||void 0===n?void 0:n.base_stat)&&void 0!==t?t:0},height:function(e){return e.height},weight:function(e){return e.weight},ability_count:function(e){return e.abilities.length},order:function(e){return e.order}},Y=function(e){var t;return null!==(t={name:"Name",type:"Type",species:"Species",hp:"Hit Points",exp:"Base Experience",height:"Height",weight:"Weight",ability_count:"Ability Count",order:"Order"}[e])&&void 0!==t?t:"Unknown"},J=function(e){return e[0].toUpperCase()+e.split("").slice(1).join("")};!function(e){e[e.INITIAL=0]="INITIAL",e[e.LOADING=1]="LOADING",e[e.FULFILLED=2]="FULFILLED",e[e.ERROR=3]="ERROR"}(P||(P={}));var V=function(){function e(t,n){Object(w.a)(this,e),this.storage=void 0,this.state=P.INITIAL,this.pokemon=[],this.pokemonTypes=[],this.pokemonSpecies=[],this.query={name:"",species:"",types:"",sort:"order.asc"},this.activePokemon=null,n?this.storage=n:(C.a.config({driver:C.a.INDEXEDDB,name:"pokedex",storeName:A.appId}),this.storage={getCachedPokemon:T,setCachedPokemon:q}),t&&(this.query=function(e){var t=["name","sort","types","species"];return Array.from(e.entries()).reduce((function(e,n){var r=Object(O.a)(n,2),c=r[0],a=r[1];return t.includes(c)&&(e[c]=a),e}),{name:"",types:"",species:"",sort:"order.asc"})}(t)),Object(H.o)(this,{state:H.p,loading:H.h,ready:H.h,error:H.h,pokemon:H.p,fetchAllPokemon:H.f,initializePokemon:H.f,total:H.h,filterByName:H.f,filterByType:H.f,filterBySpecies:H.f,query:H.p,queryResults:H.h,activeTypes:H.h,activeSpecies:H.h,activePokemon:H.p,selectPokemon:H.f,sortBy:H.f,sortField:H.h,sortedAscending:H.h}),this.initializePokemon(),this.keepLocationBarInSyncWithAppState()}return Object(S.a)(e,[{key:"keepLocationBarInSyncWithAppState",value:function(){var e=this;Object(H.g)((function(){var t=new URLSearchParams(e.query);window.history.replaceState(null,"","?"+t)}))}},{key:"initializePokemon",value:function(){var e=Object(g.a)(y.a.mark((function e(){var t,n=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.storage.getCachedPokemon();case 3:null!==(t=e.sent)?Object(H.q)((function(){n.pokemon=t,n.pokemonTypes=U(t),n.pokemonSpecies=M(t),n.state=P.FULFILLED})):this.fetchAllPokemon(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.fetchAllPokemon();case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchAllPokemon",value:function(){var e=Object(g.a)(y.a.mark((function e(){var t,n,r,c,a,i=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.state=P.LOADING,e.prev=1,e.next=4,F();case 4:for(t=e.sent,n=t.results,r=[];n.length;)r.push(n.splice(0,5));c=r.length,a=y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r[c],e.next=3,Promise.allSettled(t.map((function(e){return D(e)})));case 3:n=e.sent,Object(H.q)((function(){var e=n.reduce((function(e,t){return"fulfilled"===t.status&&e.push(t.value),e}),[]);i.pokemon=i.pokemon.concat(e)}));case 5:case"end":return e.stop()}}),e)}));case 10:if(!c--){e.next=14;break}return e.delegateYield(a(),"t0",12);case 12:e.next=10;break;case 14:e.next=19;break;case 16:e.prev=16,e.t1=e.catch(1),Object(H.q)((function(){i.state=P.ERROR}));case 19:return e.prev=19,this.error||Object(H.q)((function(){i.pokemonTypes=U(i.pokemon),i.pokemonSpecies=M(i.pokemon),i.storage.setCachedPokemon(Object(H.r)(i.pokemon)),i.state=P.FULFILLED})),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[1,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"loading",get:function(){return this.state===P.LOADING}},{key:"ready",get:function(){return this.state===P.FULFILLED}},{key:"error",get:function(){return this.state===P.ERROR}},{key:"total",get:function(){return this.pokemon.length}},{key:"activeTypes",get:function(){var e;return(null===(e=this.query.types)||void 0===e?void 0:e.length)>0?this.query.types.split(","):[]}},{key:"activeSpecies",get:function(){var e;return(null===(e=this.query.species)||void 0===e?void 0:e.length)>0?this.query.species.split(","):[]}},{key:"queryResults",get:function(){if(this.loading)return[];var e=this.pokemon;if(this.query.name){var t=this.query.name,n=new RegExp(t,"gi");e=e.filter((function(e){return e.name.match(n)}))}if(this.query.types){var r=this.activeTypes;e=e.filter((function(e){return function(e){return e.types.map((function(e){return e.type.name})).sort()}(e).some((function(e){return r.includes(e)}))}))}if(this.query.species){var c=this.activeSpecies;e=e.filter((function(e){return c.includes(e.species.name)}))}return this.sortResults(e)}},{key:"sortField",get:function(){var e=this.query.sort.split(".");return Object(O.a)(e,1)[0]}},{key:"sortedAscending",get:function(){var e;return"asc"===(e=this.query.sort.split("."))[e.length-1]}},{key:"filterByName",value:function(e){this.query.name=e}},{key:"filterByType",value:function(e){this.query.types=e.toString()}},{key:"filterBySpecies",value:function(e){this.query.species=e.toString()}},{key:"selectPokemon",value:function(e){this.activePokemon=e}},{key:"sortBy",value:function(e){var t=this.query.sort.split("."),n=Object(O.a)(t,2),r=n[0],c=n[1],a=e===r?"asc"===c?"desc":"asc":"asc";this.query.sort=[e,a].join(".")}},{key:"sortResults",value:function(e){var t,n=(this.query.sort||"order.asc").split("."),r=Object(O.a)(n,2),c=r[0],a=r[1],i=null!==(t=G[c])&&void 0!==t?t:G.name,o=e.slice().sort((function(e,t){var n=i(e),r=i(t);return n<r?-1:n>r?1:0}));return"desc"===a?o.reverse():o}}]),e}(),X=Object(a.createContext)(void 0),K=function(){var e=Object(a.useContext)(X);if(!e)throw Error("Unable to initialize app store without AppStoreProvider");return e},Q=X.Provider,Z=n(75),$=n(102),ee=n(103),te=n(211),ne=n(93),re=n.n(ne),ce=n(4),ae=function(e){var t=e.pokemon;return Object(ce.jsx)("img",{className:re.a.root,src:z(t),alt:"".concat(t.name," artwork"),loading:"lazy"})},ie=n(94),oe=n.n(ie),se=function(e){var t=e.pokemon,n=e.onClick,r=Object($.a)(e,["pokemon","onClick"]),c=W(t);return Object(ce.jsx)("button",Object(Z.a)(Object(Z.a)({className:oe.a.root},r),{},{onClick:function(){return n(t)},children:Object(ce.jsxs)(b.a,{padding:8,children:[Object(ce.jsx)(ae,{pokemon:t}),Object(ce.jsx)(ee.a,{children:J(t.name)}),Object(ce.jsxs)(b.a,{display:"flex",flexDirection:"row",justifyContent:"center",children:[Object(ce.jsxs)(b.a,{marginRight:8,children:[Object(ce.jsx)(te.a,{color:"purple",children:"EXP"})," ",t.base_experience]}),Object(ce.jsxs)(b.a,{children:[Object(ce.jsx)(te.a,{color:"red",children:"HP"})," ",c.hp.base]})]})]})}))},ue=n(97),le=n.n(ue),pe=function(e){var t=e.items,n=e.onItemClick;return Object(ce.jsxs)(b.a,{className:le.a.root,children:[0===t.length&&Object(ce.jsx)(v.a,{children:"No Pokemon found."}),t.map((function(e){return Object(ce.jsx)(se,{onClick:n,pokemon:e,"data-testid":"pokedex-entry-card-".concat(e.id)},e.id)}))]})},he=n(213),de=Object(u.a)((function(e){var t=e.onChange,n=e.checked,r=K(),c=function(e){console.log("change",e.target.value,e.target.checked);var r=e.target.checked?n.concat(e.target.value):n.filter((function(t){return t!==e.target.value}));t(r)};return Object(ce.jsx)(j.a,{label:"Types",children:r.pokemonTypes.map((function(e){return Object(ce.jsx)(he.a,{name:"types",label:e.name,onChange:c,value:e.name,checked:n.includes(e.name)},e.name)}))})})),je=n(220),fe=n(221),me=n(218),be=n(226),ve=n(233),xe=function(e){var t=e.pokemon;return Object(ce.jsxs)(be.a,{children:[Object(ce.jsxs)(be.a.Head,{children:[Object(ce.jsx)(be.a.TextHeaderCell,{children:"Name"}),Object(ce.jsx)(be.a.TextHeaderCell,{children:"Hidden?"}),Object(ce.jsx)(be.a.TextHeaderCell,{children:"Slot"})]}),Object(ce.jsx)(be.a.Body,{height:240,children:t.abilities.map((function(e){return Object(ce.jsxs)(be.a.Row,{children:[Object(ce.jsx)(be.a.TextCell,{children:e.ability.name}),Object(ce.jsx)(be.a.TextCell,{children:Object(ce.jsx)(ve.a,{color:e.is_hidden?"success":void 0,children:e.is_hidden?"Yes":"No"})}),Object(ce.jsx)(be.a.TextCell,{isNumber:!0,children:e.slot})]},e.ability.name)}))})]})},Oe=function(e){var t=e.pokemon.moves.map((function(e){return e.move.name})).sort();return Object(ce.jsx)(v.a,{children:t.join(", ")})},ke=n(72),ye=n.n(ke),ge=function(e){var t=e.name,n=e.value;return Object(ce.jsxs)("span",{className:ye.a.coreAttribute,children:[Object(ce.jsx)(te.a,{color:"neutral",children:t}),Object(ce.jsx)("span",{className:ye.a.coreAttributeValue,children:n})]})},we=function(e){var t=e.pokemon,n=Object(a.useState)(0),r=Object(O.a)(n,2),c=r[0],i=r[1],o=t,s=W(o);return Object(ce.jsx)("article",{children:Object(ce.jsxs)(b.a,{children:[Object(ce.jsxs)(b.a,{padding:16,borderBottom:"muted",children:[Object(ce.jsx)(h.a,{size:800,children:J(o.name)}),Object(ce.jsxs)(b.a,{flexDirection:"row",children:[Object(ce.jsx)(ge,{name:"Height",value:o.height}),Object(ce.jsx)(ge,{name:"Weight",value:o.weight}),Object(ce.jsx)(ge,{name:"Exp",value:o.base_experience}),Object(ce.jsx)(ge,{name:"HP",value:s.hp.base})]})]}),Object(ce.jsx)(b.a,{display:"flex",padding:8,children:Object(ce.jsx)(je.a,{children:["Traits","Moves"].map((function(e,t){return Object(ce.jsx)(fe.a,{isSelected:c===t,onSelect:function(){return i(t)},"aria-controls":"panel-".concat(e.toLowerCase()),children:e},e)}))})}),Object(ce.jsxs)(b.a,{id:"panel-traits",role:"tabpanel","aria-labelledby":"Traits","aria-hidden":0!==c,display:0===c?"block":"none",flex:"1",overflowY:"scroll",background:"tint1",padding:16,children:[Object(ce.jsx)(me.a,{backgroundColor:"white",elevation:0,height:240,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16,children:Object(ce.jsx)(ae,{pokemon:o})}),Object(ce.jsxs)(b.a,{flex:1,children:[Object(ce.jsx)(h.a,{is:"h3",marginBottom:8,children:"Abilities"}),Object(ce.jsx)(xe,{pokemon:t})]})]}),Object(ce.jsx)(b.a,{id:"panel-moves",role:"tabpanel","aria-labelledby":"Moves","aria-hidden":1!==c,display:1===c?"block":"none",padding:16,children:Object(ce.jsx)(Oe,{pokemon:o})})]})})},Se=n(222),_e=n(223),Ce=n(228),Pe=n(216),Ae=n(229),Ie=n(32),Te=n(224),qe=function(e){var t=e.onSelect,n=e.activeField,r=e.activeDirection,c=function(e){return function(){return t(e)}},a="order name type species hp exp ability_count height weight".split(" "),i="asc"===r?Se.a:_e.a;return Object(ce.jsx)(Ce.a,{position:Pe.a.BOTTOM_LEFT,content:Object(ce.jsx)(Ae.a,{children:Object(ce.jsx)(Ae.a.Group,{children:a.map((function(e){return Object(ce.jsx)(Ae.a.Item,{secondaryText:n===e?Object(ce.jsx)(i,{}):void 0,onSelect:c(e),children:n===e?Object(ce.jsx)(ee.a,{children:Y(e)}):Object(ce.jsx)(Ie.a,{children:Y(e)})},e)}))})}),children:Object(ce.jsx)(m.a,{marginRight:16,children:Object(ce.jsx)(Te.a,{})})})},Be=Object(u.a)((function(){var e=K(),t=e.pokemonSpecies.map((function(e){return{label:e.name,value:e.name}})),n=e.activeSpecies.length>0?e.activeSpecies.join(", "):"Select...",r=void 0!==e.activePokemon,c=e.activePokemon,a=0===e.queryResults.length?"No Pokemon found":"".concat(e.queryResults.length," of ").concat(e.pokemon.length," Pokemon shown");return Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsxs)("div",{className:p.a.root,children:[Object(ce.jsxs)("aside",{className:p.a.filterpane,children:[Object(ce.jsx)(h.a,{is:"h1",size:900,marginBottom:16,children:"Pokedex"}),Object(ce.jsxs)("form",{id:"filter-form","aria-label":"Filter the Pokedex by name, type, or species",onSubmit:function(e){return e.preventDefault()},children:[Object(ce.jsx)(d.a,{value:e.query.name,onChange:function(t){e.filterByName(t.target.value)},label:"Character name"}),Object(ce.jsx)(j.a,{label:"Species",marginBottom:16,children:Object(ce.jsx)(f.a,{isMultiSelect:!0,title:"Species",options:t,selected:e.activeSpecies,onSelect:function(t){var n=e.activeSpecies.concat(t.value.toString());e.filterBySpecies(n)},onDeselect:function(t){var n=t.value,r=e.activeSpecies.filter((function(e){return e!==n}));e.filterBySpecies(r)},children:Object(ce.jsx)(m.a,{children:n})})}),Object(ce.jsx)(de,{options:e.pokemonTypes,onChange:function(t){e.filterByType(t)},checked:e.activeTypes})]})]}),Object(ce.jsxs)("div",{className:p.a.contentpane,children:[Object(ce.jsxs)(b.a,{display:"flex",flexDirection:"row",marginBottom:16,children:[Object(ce.jsxs)(b.a,{flex:1,children:[Object(ce.jsx)(h.a,{children:a}),Object(ce.jsxs)(v.a,{children:["Sorted by ",Y(e.sortField),","," ",e.sortedAscending?"lowest to highest":"highest to lowest"]})]}),Object(ce.jsx)(b.a,{children:Object(ce.jsx)(qe,{activeField:e.sortField,activeDirection:e.sortedAscending?"asc":"desc",onSelect:function(t){return e.sortBy(t)}})})]}),Object(ce.jsx)(pe,{items:e.queryResults,onItemClick:function(t){e.selectPokemon(t)}})]})]}),c&&Object(ce.jsx)(x.a,{isShown:r,onCloseComplete:function(){e.selectPokemon(null)},children:Object(ce.jsx)(we,{pokemon:c})})]})})),Le=(n(187),n(225)),Ne=n(194),Re=function(e){var t=e.text,n=Object(a.useState)(!0),r=Object(O.a)(n,2),c=r[0],i=r[1];return Object(ce.jsxs)(Le.a,{isShown:c,title:"Loading Pokemon",onCloseComplete:function(){return i(!1)},hasCancel:!1,hasFooter:!1,shouldCloseOnOverlayClick:!1,children:[Object(ce.jsx)(v.a,{children:"This only happens this one time, and then you'll have all your Pokemon saved for quick use."}),Object(ce.jsxs)(b.a,{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",children:[Object(ce.jsx)(Ne.a,{size:16,marginRight:8}),Object(ce.jsx)(Ie.a,{children:t})]})]})},Ee=Object(u.a)((function(e){var t=e.children,n=K();return n.loading?Object(ce.jsx)(Re,{text:"".concat(n.pokemon.length," of ").concat(A.pokedexSize," loaded.")}):n.ready?Object(ce.jsx)(ce.Fragment,{children:t}):Object(ce.jsx)(ce.Fragment,{})})),Fe=new V(new URLSearchParams(window.location.search));s.a.render(Object(ce.jsx)(i.a.StrictMode,{children:Object(ce.jsx)(Q,{value:Fe,children:Object(ce.jsx)(Ee,{children:Object(ce.jsx)(Be,{})})})}),document.getElementById("root"))},64:function(e,t,n){e.exports={root:"App_root__1Ylx4",filterpane:"App_filterpane__1KMqB",contentpane:"App_contentpane__jBJTJ",header:"App_header__14Wxn"}},72:function(e,t,n){e.exports={coreAttribute:"pokemon_detail_coreAttribute__2FahW",coreAttributeValue:"pokemon_detail_coreAttributeValue__x4Hpr"}},93:function(e,t,n){e.exports={root:"poke_pic_root__1YtHo"}},94:function(e,t,n){e.exports={root:"poke_card_root__3jm3I"}},97:function(e,t,n){e.exports={root:"poke_grid_root__3AETM"}}},[[188,1,2]]]);
//# sourceMappingURL=main.7fcdceed.chunk.js.map