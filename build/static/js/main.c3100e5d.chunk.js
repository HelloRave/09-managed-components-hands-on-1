(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(2),l=a.n(u),c=a(3),m=a(4),o=a(5),i=a(7),d=a(6);function s(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",name:"number1",value:e.number1,onChange:e.updateField}),r.a.createElement("input",{type:"text",name:"number2",value:e.number2,onChange:e.updateField}),r.a.createElement("button",{onClick:e.add},"Add"))}var b=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).state={number1:0,number2:0,total:0},e.updateFormField=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.addNumber=function(){e.setState({total:parseFloat(e.state.number1)+parseFloat(e.state.number2)})},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,{number1:this.state.number1,number2:this.state.number2,updateField:this.updateFormField,add:this.addNumber}))}}]),a}(r.a.Component),p=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),p)},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.c3100e5d.chunk.js.map