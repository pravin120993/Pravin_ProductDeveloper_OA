(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,a){e.exports=a(92)},61:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),c=(a(61),a(24)),l=a(43),s=a(21),f=a(51),u=a(44),h=a(50),d=a(45),p=a.n(d),v=a(46),y=a.n(v),m=(a(79),a(94)),g=a(120),w=a(122),b=a(123),E=a(124),k=a(125),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={filterType:"day",dates:[],handValues:[]},a.handleChange=function(e){a.setState({filterType:e.target.value},function(){a.getInventory()})},a.getInventory=function(){var e=a.state.filterType;p.a.get("http://localhost:9090/api/inventory/".concat(e)).then(function(t){var n=[],o=[];t.data.forEach(function(t){"day"===e?n.push(t.date):n.push("week - "+t.weekly),o.push(parseFloat(t.on_hand_value))}),a.setState({dates:n,handValues:o},function(){a.renderChart()})})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getInventory()}},{key:"renderChart",value:function(){var e=this.state,t=e.dates,a=e.handValues;y.a.generate({bindto:"#chart1",size:{height:550},data:{x:"x",columns:[["x"].concat(Object(c.a)(t)),["On Hand values"].concat(Object(c.a)(a))],type:"bar"},axis:{x:{type:"category",categories:t,tick:{rotate:75,multiline:!1},height:80}}})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.filterType;return o.a.createElement("div",{className:e.root},o.a.createElement(g.a,{position:"static"},o.a.createElement(w.a,null,o.a.createElement(b.a,{variant:"h6",className:e.title},"Daily Inventory"),o.a.createElement("span",null,"Filter By : \xa0"),o.a.createElement(E.a,{value:t,onChange:this.handleChange,inputProps:{name:"filter-type",id:"filter-type",classes:{icon:e.icon}},className:e.select},o.a.createElement(k.a,{value:"day"},"Day"),o.a.createElement(k.a,{value:"week"},"Week")))),o.a.createElement("br",null),o.a.createElement("div",{id:"chart1"}))}}]),t}(o.a.Component),j=Object(m.a)({root:{flexGrow:1},menuButton:{marginRight:8},title:{flexGrow:1},select:{width:130,color:"#ffffff","&:before":{borderColor:"#ffffff"},"&:after":{borderColor:"#ffffff"}},icon:{fill:"#ffffff"}})(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[56,1,2]]]);
//# sourceMappingURL=main.1f121872.chunk.js.map