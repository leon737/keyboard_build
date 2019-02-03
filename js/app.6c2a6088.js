(function(e){function t(t){for(var o,r,u=t[0],c=t[1],a=t[2],f=0,l=[];f<u.length;f++)r=u[f],i[r]&&l.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(l.length)l.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==i[c]&&(o=!1)}o&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={app:0},s=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/keyboard_build/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12c8":function(e,t,n){},"19e8":function(e,t,n){"use strict";var o=n("12c8"),i=n.n(o);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"keyboard-container"},[n("Keyboard")],1),n("div",{staticClass:"lists-container"},[n("div",[n("Keys")],1),n("div",[n("Chords")],1)])])},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.lockKeys,expression:"lockKeys"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.lockKeys)?e._i(e.lockKeys,null)>-1:e.lockKeys},on:{change:[function(t){var n=e.lockKeys,o=t.target,i=!!o.checked;if(Array.isArray(n)){var s=null,r=e._i(n,s);o.checked?r<0&&(e.lockKeys=n.concat([s])):r>-1&&(e.lockKeys=n.slice(0,r).concat(n.slice(r+1)))}else e.lockKeys=i},e.lockKeysChanged]}}),e._v("Lock keys\n        "),n("input",{attrs:{type:"button",value:"Reset"},on:{click:e.reset}})]),n("div",{staticClass:"piano-keyboard"},e._l(e.keys,function(t){return n("div",{key:t.index,staticClass:"key",class:e.getWhiteOrBlackKeyClass(t.index),style:{left:e.getLeft(t.index)+"px"},on:{mousedown:function(n){e.keyDown(t.index)},mouseup:function(n){e.keyUp(t.index)}}},[n("div",{staticClass:"note-name"},[e._v(e._s(e.getNoteName(t.index)))])])}),0)])},u=[],c=(n("ac6a"),n("2ef0")),a=n.n(c),d=n("cf69"),f=n.n(d),l=(n("9733"),new o["a"]),h=l,y=f.a.hubConnection("http://127.0.0.1:8088"),v=y.createHubProxy("MyHub"),m=4,g=a.a.range(12*m).map(function(e,t){return{index:t,down:!1}}),p=function(e){var t=e%12;switch(t){case 1:case 3:case 6:case 8:case 10:return!0;default:return!1}};v.on("addMessage",function(e,t){h.$emit(e,t)}),y.start({jsonp:!0}).done(function(){console.log("Now connected, connection ID="+y.id)}).fail(function(){console.log("Could not connect")});var K={data:function(){return{keys:g,lockKeys:!0}},computed:{demoKeys:function(){return this.$store.state.demoKeys},demoKey:function(){return this.$store.state.demoKey},demoChordMode:function(){return this.$store.state.demoChordMode}},methods:{getLeft:function(e){for(var t=0,n=0;n<e;++n)p(n)||(t+=50);return t},getWhiteOrBlackKeyClass:function(e){var t=p(e)?"black":"white",n=this.keys[e].down?"down":"up",o=a.a.indexOf(this.demoKeys,this.demoChordMode?e:e%12)>=0;return[t,o?"".concat(t,"-demo"):"".concat(t,"-").concat(n)]},keyDown:function(e){this.lockKeys?this.keys[e].down=!this.keys[e].down:this.keys[e].down=!0,this.emitKeyChangedEvent()},keyUp:function(e){this.lockKeys||(this.keys[e].down=!1,this.emitKeyChangedEvent())},lockKeysChanged:function(e){this.lockKeys||(a.a.each(this.keys,function(e){e.down=!1}),this.emitKeyChangedEvent())},emitKeyChangedEvent:function(){this.$store.dispatch("changePressedKeys",{keys:this.keys.filter(function(e){return!!e.down})})},reset:function(){a.a.each(this.keys,function(e){e.down=!1}),this.emitKeyChangedEvent(),this.$store.dispatch("reset")},getNoteName:function(e){return this.demoKey&&this.demoKey.getNoteName?(e%=12,a.a.some(this.demoKey.notes,function(t){return t==e})?this.demoKey.getNodeNameByLinearIndex(e):""):""}},mounted:function(){var e=this;h.$on("note on",function(t){t<36||t>83||(e.keys[t-36].down=!0,e.emitKeyChangedEvent())}),h.$on("note off",function(t){t<36||t>83||e.keyUp(t-36)})}},C=K,k=(n("da73"),n("2877")),x=Object(k["a"])(C,r,u,!1,null,"e6f63f76",null);x.options.__file="Keyboard.vue";var b=x.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("span",[e._v("Group by ")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.groupBy,expression:"groupBy"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.groupBy=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"root"}},[e._v("Root note")]),n("option",{attrs:{value:"kind"}},[e._v("Kind")])]),n("ul",e._l(e.orderedKeys,function(t){return n("li",{key:t.root+":"+t.type,class:e.getKeyClass(t),on:{mouseenter:function(n){e.mouseEnter(t)},mouseleave:function(n){e.mouseLeave(t)},click:function(n){e.click(t)}}},[e._v("\n            "+e._s(t.rootName)+e._s(t.type)+"                     \n            "),t.definition.signCount>0&&e.highlightedKey==t?n("span",[e._v("\n                "+e._s(t.definition.signCount)+e._s("sharp"==t.definition.sign?"♯":"♭")+"\n            ")]):e._e()])}),0)])},N=[],j=(n("7514"),{data:function(){return{highlightedKey:void 0,groupBy:"kind"}},computed:{keys:function(){return this.$store.getters.keys},selectedParallelKey:function(){var e=this;if(this.highlightedKey)return a.a.find(this.$store.getters.allKeys,function(t){return t.containsAllNotes(e.highlightedKey.notes)&&t!=e.highlightedKey})},notes:function(){return this.$store.state.notes.map(function(e){return e.index})},orderedKeys:function(){var e=this;return a.a.orderBy(this.keys,function(t){return"root"==e.groupBy?t.root:t.type})},selectedKey:function(){return this.$store.state.selectedKey},selectedChord:function(){return this.$store.state.selectedChord}},methods:{emitKeySelectedEvent:function(e){this.$store.dispatch("changeDemoKeys",{key:e})},mouseEnter:function(e){this.highlightedKey=e,this.emitKeySelectedEvent(e)},mouseLeave:function(e){this.highlightedKey=void 0,this.emitKeySelectedEvent(void 0)},click:function(e){this.$store.dispatch("setSelectedKey",e)},getKeyClass:function(e){var t=e==this.selectedKey?"selected-key":"",n=e==this.selectedParallelKey?"parallel-key":"";return"".concat(t," ").concat(n)}}}),O=j,S=(n("84a0"),Object(k["a"])(O,w,N,!1,null,"e3061dc8",null));S.options.__file="Keys.vue";var E=S.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("span",[e._v("Group by ")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.groupBy,expression:"groupBy"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.groupBy=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"root"}},[e._v("Root note")]),n("option",{attrs:{value:"kind"}},[e._v("Kind")])]),n("div",{staticClass:"list"},[n("ul",e._l(e.orderedChords,function(t){return n("li",{key:t.root+":"+t.suffix+":"+t.subSuffix,class:e.getChordClass(t),on:{click:function(n){e.click(t)}}},[n("div",{staticClass:"chord-line"},[n("div",{on:{mouseenter:function(n){e.mouseEnter(t)},mouseleave:function(n){e.mouseLeave(t)}}},[e._v("\n                        "+e._s(e.getChordRootName(t))+e._s(t.suffix)),n("span",{staticClass:"sub"},[e._v(e._s(t.subSuffix))])]),e._l(t.inversions,function(o){return n("div",{key:o.index,staticClass:"inversion",on:{mouseenter:function(n){e.mouseEnter(t,o.index)},mouseleave:function(n){e.mouseLeave(t)}}},[e._v("\n                            "+e._s(o.index)+"\n                    ")])})],2)])}),0)])])},B=[],A={data:function(){return{highlightedChord:void 0,groupBy:"root"}},computed:{chords:function(){return this.$store.getters.chords},orderedChords:function(){var e=this;return _.orderBy(this.chords,function(t){return"root"==e.groupBy?t.root:t.suffix+t.subSuffix})},selectedChord:function(){return this.$store.state.selectedChord},selectedKey:function(){return this.$store.state.selectedKey}},methods:{emitKeySelectedEvent:function(e,t){this.$store.dispatch("changeChordDemoKeys",{chord:e,inversionIndex:t})},mouseEnter:function(e,t){this.highlightedChord=e,this.emitKeySelectedEvent(e,t)},mouseLeave:function(e){this.highlightedChord=void 0,this.emitKeySelectedEvent(void 0)},click:function(e){this.$store.dispatch("setSelectedChord",e)},getChordClass:function(e){var t=this.selectedChord==e?"selected-chord":"";return"".concat(t)},getChordRootName:function(e){return this.selectedKey?e.getRootName(this.selectedKey):e.rootName}}},D=A,M=(n("19e8"),Object(k["a"])(D,$,B,!1,null,"c97dd69a",null));M.options.__file="Chords.vue";var P=M.exports,L={name:"app",components:{Keyboard:b,Keys:E,Chords:P}},W=L,F=(n("5c0b"),Object(k["a"])(W,i,s,!1,null,null,null));F.options.__file="App.vue";var G=F.exports,I=n("2f62"),R=n("d225"),T=n("b0b4"),U=(n("aef6"),["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]),H=function(e){for(var t=[],n=1;n<=e.length-1;++n){for(var o=e.slice(),i=0;i<n;++i)o[i]+=12;t.push({index:n,notes:o})}return t},J=function(){function e(t,n,o){Object(R["a"])(this,e),this.root=t,this.suffix=n,this.subSuffix="",(a.a.endsWith(this.suffix,"2")||a.a.endsWith(this.suffix,"4")||a.a.endsWith(this.suffix,"7")||a.a.endsWith(n,"9"))&&(this.suffix=this.suffix.substring(0,this.suffix.length-1),this.subSuffix=n[n.length-1]),a.a.endsWith(this.suffix,"11")&&(this.suffix=this.suffix.substring(0,this.suffix.length-2),this.subSuffix="11"),this.notes=o,this.inversions=H(this.notes)}return Object(T["a"])(e,[{key:"getRootName",value:function(e){return e.getNodeNameByLinearIndex(this.root)}},{key:"containsAllNotes",value:function(e){var t=this;return a.a.every(e,function(e){return a.a.indexOf(t.notes.map(function(e){return e%12}),e%12)>=0})}},{key:"rootName",get:function(){var e=U[this.root];return e.endsWith("#")&&(e=e[0]+"♯"),e}}]),e}(),q=[{suffix:"",notes:[0,4,7]},{suffix:"m",notes:[0,3,7]},{suffix:"dim",notes:[0,3,6]},{suffix:"M7",notes:[0,4,7,11]},{suffix:"m7",notes:[0,3,7,10]},{suffix:"7",notes:[0,4,7,10]},{suffix:"sus2",notes:[0,2,7]},{suffix:"sus4",notes:[0,5,7]},{suffix:"aug",notes:[0,4,8]},{suffix:"9",notes:[0,4,7,10,14]},{suffix:"M11",notes:[0,4,7,11,14,17]}],z=function(e){return new J(e.root,e.type.suffix,e.type.notes.map(function(t){return e.root+t}))},Q=function(){function e(){Object(R["a"])(this,e),this.chords=a.a.flatten(a.a.map(q,function(e){return a.a.range(12).map(function(t){return z({root:t,type:e})})}))}return Object(T["a"])(e,[{key:"getChords",value:function(e,t){var n=this.chords.filter(function(t){return t.containsAllNotes(e)});if(!t)return n;var o=this.chords.filter(function(e){return t.containsAllNotes(e.notes)});return e&&e.length?a.a.intersection(n,o):o}}]),e}(),V=(n("20d6"),n("f0ee")),X=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C"],Y=function(e,t){var n=e;return n+="major"==t?6:3,n>11&&(n-=12),X[n]},Z=function(e,t){var n="major"==t?X[e]:Y(e,t),o=a.a.find(V,function(e){return e.root==n});return o},ee=function(){function e(t,n,o){Object(R["a"])(this,e),this.root=t,this.definition=Z(t,n),this.type="major"==n?"":"m",this.notes=o}return Object(T["a"])(e,[{key:"getNoteName",value:function(e){e=this.notes[e],e>11&&(e-=12);var t=X[e];return"sharp"==this.definition.sign&&(6==this.definition.signCount&&"F"==t&&(t="E#"),7==this.definition.signCount&&"C"==t&&(t="B#")),t.endsWith("#")&&"flat"==this.definition.sign?t=X[e+1]+"♭":t.endsWith("#")&&(t=t[0]+"♯"),t}},{key:"getNodeNameByLinearIndex",value:function(e){var t=a.a.findIndex(this.notes,function(t){return t==e});return t>=0?this.getNoteName(t):""}},{key:"containsAllNotes",value:function(e){var t=this;return a.a.every(e,function(e){return a.a.indexOf(t.notes,e%12)>=0})}},{key:"rootName",get:function(){return this.getNoteName(0)}}]),e}(),te=function(e){return e.map(function(t,n){for(var o=0,i=0;i<=n;++i)o+=e[i];return o})},ne=te([0,2,2,1,2,2,2,1]),oe=te([0,2,1,2,2,1,2,2]),ie=function(e){var t="major"==e.type?ne:oe;return new ee(e.root,e.type,t.map(function(t){return(e.root+t)%12}))},se=function(){function e(){Object(R["a"])(this,e),this.keys=a.a.range(12).map(function(e){return ie({root:e,type:"major"})}).concat(a.a.range(12).map(function(e){return ie({root:e,type:"minor"})}))}return Object(T["a"])(e,[{key:"getKeys",value:function(e,t){var n=this.keys.filter(function(t){return t.containsAllNotes(e)});if(!t)return n;var o=this.keys.filter(function(e){return e.containsAllNotes(t.notes)});return e&&e.length?a.a.intersection(n,o):o}}]),e}();o["a"].use(I["a"]);var re=new Q,ue=new se,ce=new I["a"].Store({state:{notes:[],demoKeys:[],demoChordMode:!1,selectedKey:void 0,selectedChord:void 0,demoKey:void 0},mutations:{changePressedKeys:function(e,t){e.notes=t.keys},changeDemoKeys:function(e,t){t.key?(e.demoKeys=t.key.notes,e.demoKey=t.key):(e.demoKeys=[],e.demoKey=void 0)},changeDemoChordMode:function(e,t){e.demoChordMode=t},setSelectedKey:function(e,t){e.selectedKey==t&&(t=void 0),e.selectedKey=t},setSelectedChord:function(e,t){e.selectedChord==t&&(t=void 0),e.selectedChord=t},reset:function(e){e.selectedChord=void 0,e.selectedKey=void 0}},actions:{changePressedKeys:function(e,t){e.commit("changePressedKeys",t)},changeDemoKeys:function(e,t){e.commit("changeDemoKeys",t),e.commit("changeDemoChordMode",!1)},changeChordDemoKeys:function(e,t){t.key=t.chord?{notes:t.inversionIndex?a.a.find(t.chord.inversions,function(e){return e.index==t.inversionIndex}).notes:t.chord.notes}:void 0,e.commit("changeDemoKeys",t),e.commit("changeDemoChordMode",!0)},setSelectedKey:function(e,t){e.commit("setSelectedKey",t)},setSelectedChord:function(e,t){e.commit("setSelectedChord",t)},reset:function(e){e.commit("reset")}},getters:{chords:function(e){return re.getChords(e.notes.filter(function(e){return!!e.down}).map(function(e){return e.index}),e.selectedKey)},keys:function(e){return ue.getKeys(e.notes.filter(function(e){return!!e.down}).map(function(e){return e.index}),e.selectedChord)},allKeys:function(e){return ue.keys}}});o["a"].config.productionTip=!1,new o["a"]({store:ce,render:function(e){return e(G)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),i=n.n(o);i.a},"5e27":function(e,t,n){},"7b5d":function(e,t,n){},"84a0":function(e,t,n){"use strict";var o=n("7b5d"),i=n.n(o);i.a},da4a:function(e,t,n){},da73:function(e,t,n){"use strict";var o=n("da4a"),i=n.n(o);i.a},f0ee:function(e){e.exports=[{root:"C",sign:"sharp",signCount:0},{root:"G",sign:"sharp",signCount:1},{root:"D",sign:"sharp",signCount:2},{root:"A",sign:"sharp",signCount:3},{root:"E",sign:"sharp",signCount:4},{root:"B",sign:"sharp",signCount:5},{root:"F#",sign:"sharp",signCount:6},{root:"F",sign:"flat",signCount:1},{root:"A#",sign:"flat",signCount:2},{root:"D#",sign:"flat",signCount:3},{root:"G#",sign:"flat",signCount:4},{root:"C#",sign:"flat",signCount:5},{root:"F#",sign:"flat",signCount:6},{root:"B#",sign:"flat",signCount:7}]}});
//# sourceMappingURL=app.6c2a6088.js.map