(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),c=n.n(l),o=(n(16),n(2)),i=n(3),s=n(5),u=n(4),h=n(6),d=n(9),f=n(10),m=n(1),b=(n(18),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return this.props.isDisabled?r.a.createElement("td",{className:e}):r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),p=(n(20),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={hasWon:!1,board:n.createBoard()},n.createBoard=n.createBoard.bind(Object(m.a)(Object(m.a)(n))),n.clickHandler=n.clickHandler.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"clickHandler",value:function(){this.setState({hasWon:!1,board:this.createBoard()})}},{key:"createBoard",value:function(){var e,t=this,n=this.props,a=n.ncols,r=n.nrows;do{e=[];for(var l=0;l<r;l++)e.push(Array(a).fill("").map(function(e){return Math.floor(100*Math.random())<t.props.chanceLightStartsOn}))}while(!this.isSolvable(e));return e}},{key:"flipCellsAround",value:function(e){console.log(e);var t=this.props,n=t.ncols,a=t.nrows,r=this.state.board,l=e.split("-").map(Number),c=Object(f.a)(l,2);function o(e,t){t>=0&&t<n&&e>=0&&e<a&&(r[e][t]=!r[e][t])}!function(e,t){o(e,t),o(e-1,t),o(e,t+1),o(e+1,t),o(e,t-1)}(c[0],c[1]);var i=this.state.board.flat().every(function(e){return!e});this.setState({board:r,hasWon:i})}},{key:"isSolvable",value:function(e){e=e.map(function(e){return Object(d.a)(e)});for(var t=function(t){for(var n=0;n<e[t].length;n++)if(e[t][n]){var a=function(n,a){a>=0&&a<e[t].length&&n>=0&&n<e.length&&(e[n][a]=!e[n][a])};a(t+1,n),a(t,n),a(t+1,n+1),a(t+2,n),a(t+1,n-1)}},n=0;n<=e.length-2;n++)t(n);return e[e.length-1].every(function(e){return!1===e})}},{key:"render",value:function(){var e=this;if(this.state.hasWon){var t=r.a.createElement("tr",null,Array(this.props.ncols).fill("").map(function(e){return r.a.createElement(b,{isDisabled:!0})}));return r.a.createElement("div",{className:"Board"},r.a.createElement("h1",null,"You Won!"),r.a.createElement("table",null,r.a.createElement("tbody",null,t,t,r.a.createElement("tr",null,Array(this.props.ncols).fill("").map(function(t,n){return 2===n?r.a.createElement("button",{onClick:e.clickHandler},"Play Again"):r.a.createElement(b,{isDisabled:!0})})),t,t)))}return r.a.createElement("div",{className:"Board"},r.a.createElement("h1",null,"Lights Out!"),r.a.createElement("table",null,r.a.createElement("tbody",null,this.state.board.map(function(t,n){return r.a.createElement("tr",{key:n,className:"Row"},t.map(function(t,a){var l="".concat(n,"-").concat(a);return r.a.createElement(b,{key:l,flipCellsAroundMe:function(){return e.flipCellsAround(l)},isLit:t})}))}))),r.a.createElement("h3",null,"Turn off all the lights to win the game."))}}]),t}(a.Component));p.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:30};var v=p,O=(n(22),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.2d13638e.chunk.js.map