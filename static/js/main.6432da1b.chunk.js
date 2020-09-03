(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),i=a(7),s=a(1),m=a(15),o=a.n(m),u=a(29),p=a(10),v=a(11),E=a(13),d=a(12),g=a(30),h=a.n(g);a(55);var _=function(e){var t=e.id,a=e.year,n=e.title,l=e.summary,c=e.poster,s=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(i.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:l,poster:c,genres:s}}},r.a.createElement("img",{src:c,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},l.slice(0,220),"..."))))},f=(a(61),function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(_,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(62);var y=function(e){return r.a.createElement("div",{className:"about__container"},r.a.createElement("img",{src:"https://raw.githubusercontent.com/insight88/clone_movieapp_react/master/src/img/profile.jpg",alt:"insight88"}),r.a.createElement("ul",null,r.a.createElement("li",{class:"title"},"Skills"),r.a.createElement("li",null,"HTML / CSS / SCSS"),r.a.createElement("li",null,"Vanilla JavaScript"),r.a.createElement("li",null,"Node JS"),r.a.createElement("li",null,"Gulp, Webpack"),r.a.createElement("li",null,"Python"),r.a.createElement("li",null,"Django"),r.a.createElement("li",null,"etc. Linux Commands, HTTP")),r.a.createElement("a",{href:"https://github.com/insight88/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"Check my Projects, KPKIM's Github")))},b=(a(63),function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/"),console.log(t.state)}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",{className:"detail__container"},r.a.createElement("img",{src:e.state.poster,alt:e.state.title}),r.a.createElement("div",{className:"contents"},r.a.createElement("div",{className:"detail__title"},e.state.title),r.a.createElement("ul",{className:"movie__genres"},e.state.genres.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("div",null,e.state.summary))):null}}]),a}(r.a.Component));a(64);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/about"},"About Me"))};a(65);var k=function(){return r.a.createElement(i.a,null,r.a.createElement(N,null),r.a.createElement(s.a,{path:"/",exact:!0,component:f}),r.a.createElement(s.a,{path:"/about",component:y}),r.a.createElement(s.a,{path:"/movie/:id",component:b}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.6432da1b.chunk.js.map