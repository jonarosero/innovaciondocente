webpackJsonp([24],{"5CcW":function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("header",[e("h1",[a._v("\n      "+a._s(a.data.title)+"\n    ")])]),e("section",{staticClass:"container"},[e("p",[a._v("\n      "+a._s(a.data.description)+"\n    ")]),a._l(a.data.resources,function(t,i){return e("div",{key:i},[e("h2",[a._v(a._s(t.title))]),e("div",{staticClass:"card-container"},a._l(t.cards,function(t,i){return e("div",{key:i,staticClass:"item"},[t.img?e("img",{attrs:{src:t.img,alt:"img"}}):a._e(),e("h3",[a._v(a._s(t.title))]),e("p",[a._v(a._s(t.description))])])}))])}),e("button",{staticClass:"btn btn-outline-primary btn-large btn-sm",on:{click:function(t){a.$router.go(-1)}}},[a._v("Regresar")])],2)])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};t.a=n},F6Qp:function(a,t,e){"use strict";var i=e("Xxa5"),n=e.n(i),r=e("exGp"),o=e.n(r),d=e("mtWM"),s=e.n(d);t.a={asyncData:function(){var a=o()(n.a.mark(function a(){var t,e;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.get("https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/recursos-digitales.json");case 2:return t=a.sent,e=t.data,a.abrupt("return",{data:e});case 5:case"end":return a.stop()}},a,this)}));return function(){return a.apply(this,arguments)}}(),head:function(){return{title:this.data.title,meta:[{hid:"description",name:"description",content:this.data.description}]}}}},WSPl:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("F6Qp"),n=e("5CcW"),r=!1;var o=function(a){r||e("uxjE")},d=e("VU/8")(i.a,n.a,!1,o,"data-v-1896a5ae",null);d.options.__file="pages/formacion-docente/desarrollo-asignatura/recursos.vue",t.default=d.exports},sXRq:function(a,t,e){(a.exports=e("FZ+f")(!1)).push([a.i,"header[data-v-1896a5ae]{background:#0d47a1}header h1[data-v-1896a5ae]{font-weight:700;height:200px;line-height:200px;text-align:center;color:#fefefe;font-size:28px;margin:0}h2[data-v-1896a5ae]{color:#0d47a1}.html[data-v-1896a5ae] blockquote,.html[data-v-1896a5ae] img{width:100%;display:block;margin-left:auto;margin-right:auto;padding-top:20px;padding-bottom:20px}.html[data-v-1896a5ae] blockquote{text-align:center}.html[data-v-1896a5ae] .embed-container{position:relative;margin:20px auto;width:100%;padding-bottom:56.25%;height:0;overflow:hidden}.html[data-v-1896a5ae] .embed-container iframe{position:absolute;top:0;left:0;width:100%;height:100%}.html[data-v-1896a5ae] [class^=col]{padding:0;margin:0}@media (min-width:768px){.html[data-v-1896a5ae] blockquote,.html[data-v-1896a5ae] img{width:80%}.html[data-v-1896a5ae] .embed-container{width:80%;padding-bottom:45%}}.html[data-v-1896a5ae] table{border-collapse:collapse;width:100%;border:2px solid #0d47a1;border-radius:5px;margin-bottom:25px}.html[data-v-1896a5ae] table td,.html[data-v-1896a5ae] table th{text-align:center;border:1px solid #0d47a1;padding:8px}.html[data-v-1896a5ae] table tr:nth-child(odd){background-color:#ccdefb}.html[data-v-1896a5ae] table th{background-color:#0d47a1;color:#fefefe}.card-container[data-v-1896a5ae]{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}.item[data-v-1896a5ae]{border-radius:5px;padding:10px;grid-row-end:span 6;border:1px solid #0d47a1}",""])},uxjE:function(a,t,e){var i=e("sXRq");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e("rjj0")("5ed170fd",i,!1,{sourceMap:!1})}});