(this.webpackJsonpmoviesapp=this.webpackJsonpmoviesapp||[]).push([[0],{173:function(e,c,t){},196:function(e,c,t){},516:function(e,c,t){},517:function(e,c,t){},518:function(e,c,t){},519:function(e,c,t){},520:function(e,c,t){"use strict";t.r(c);var s,n=t(1),i=t.n(n),r=t(21),a=t.n(r),o=(t(173),t(37)),j=t(6),l=t(169),d=t.p+"static/media/user.109eb920.png",b=t(38),O=t(23),u=t(44),h=t.n(u),m=t(77),v=t(43),x=t(164),f=t.n(x).a.create({baseURL:"http://www.omdbapi.com"}),p="53c800d",g=Object(v.b)("movies/fetchAsyncMovies",function(){var e=Object(m.a)(h.a.mark((function e(c){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("?apiKey=".concat(p,"&s=").concat(c,"&type=movie"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()),S=Object(v.b)("movies/fetchAsyncShows",function(){var e=Object(m.a)(h.a.mark((function e(c){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("?apiKey=".concat(p,"&s=").concat(c,"&type=series"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()),N=Object(v.b)("movies/fetchAsyncMovieOrShowDetail",function(){var e=Object(m.a)(h.a.mark((function e(c){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("?apiKey=".concat(p,"&i=").concat(c,"&Plot=full"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()),w=Object(v.c)({name:"movies",initialState:{movies:{},shows:{},selectMovieOrShow:{}},reducers:{removeSelectedMovieOrShow:function(e){e.selectMovieOrShow={}}},extraReducers:(s={},Object(b.a)(s,g.pending,(function(){console.log("Pending")})),Object(b.a)(s,g.fulfilled,(function(e,c){var t=c.payload;return console.log("Fetched Successfully!"),Object(O.a)(Object(O.a)({},e),{},{movies:t})})),Object(b.a)(s,g.rejected,(function(){console.log("Rejected!")})),Object(b.a)(s,S.fulfilled,(function(e,c){var t=c.payload;return console.log("Fetched Successfully!"),Object(O.a)(Object(O.a)({},e),{},{shows:t})})),Object(b.a)(s,N.fulfilled,(function(e,c){var t=c.payload;return console.log("Fetched Successfully!"),Object(O.a)(Object(O.a)({},e),{},{selectMovieOrShow:t})})),s)}),y=w.actions.removeSelectedMovieOrShow,T=function(e){return e.movies.movies},k=function(e){return e.movies.shows},M=function(e){return e.movies.selectMovieOrShow},A=w.reducer,P=t(22),D=(t(196),t(2)),R=function(){var e=Object(P.b)(),c=Object(n.useState)(""),t=Object(l.a)(c,2),s=t[0],i=t[1];return Object(D.jsxs)("div",{className:"header",children:[Object(D.jsx)("div",{className:"logo",children:Object(D.jsx)(o.b,{to:"/",children:"Amazon Prime"})}),Object(D.jsx)("div",{className:"search-bar",children:Object(D.jsxs)("form",{onSubmit:function(c){c.preventDefault(),""!==s?(e(g(s)),e(S(s)),i("")):alert("Please enter a valid name")},children:[Object(D.jsx)("input",{type:"text",value:s,placeholder:"Search here",onChange:function(e){return i(e.target.value)}}),Object(D.jsx)("button",{type:"submit",children:Object(D.jsx)("i",{className:"fa fa-search"})})]})}),Object(D.jsx)("div",{className:"user-image",children:Object(D.jsx)("img",{src:d,alt:"user"})})]})},F=(t(199),t(76)),I=t.n(F),E={dots:!1,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:3,responsive:[{breakpoint:1500,settings:{slidesToShow:5,slidesToScroll:4,infinite:!0,dots:!1}},{breakpoint:1300,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},L=(t(516),function(e){var c=e.data;return Object(D.jsx)("div",{className:"card-item",children:Object(D.jsx)(o.b,{to:"/movie/".concat(c.imdbID),children:Object(D.jsxs)("div",{className:"card-inner",children:[Object(D.jsx)("div",{className:"card-top",children:Object(D.jsx)("img",{src:c.Poster,alt:c.title})}),Object(D.jsx)("div",{className:"card-bottom",children:Object(D.jsxs)("div",{className:"card-info",children:[Object(D.jsx)("h4",{children:c.Title}),Object(D.jsx)("p",{children:c.Year})]})})]})})})}),z=(t(517),function(){var e=Object(P.c)(T),c=Object(P.c)(k);console.log(e,"hi");var t,s;return t="True"===e.Response?e.Search.map((function(e,c){return Object(D.jsx)(L,{data:e},c)})):Object(D.jsx)("div",{className:"movies-error",children:Object(D.jsx)("h3",{children:e.Error})}),s="True"===c.Response?c.Search.map((function(e,c){return Object(D.jsx)(L,{data:e},c)})):Object(D.jsx)("div",{className:"movies-error",children:Object(D.jsx)("h3",{children:e.Error})}),console.log(t,"movies"),Object(D.jsxs)("div",{className:"movie-wrapper",children:[Object(D.jsxs)("div",{className:"movie-list",children:[Object(D.jsx)("h2",{children:"Movies"}),Object(D.jsx)("div",{className:"movie-container",children:Object(D.jsx)(I.a,Object(O.a)(Object(O.a)({},E),{},{children:t}))})]}),Object(D.jsxs)("div",{className:"movie-list",children:[Object(D.jsx)("h2",{children:"Shows"}),Object(D.jsx)("div",{className:"movie-container",children:Object(D.jsx)(I.a,Object(O.a)(Object(O.a)({},E),{},{children:s}))})]})]})}),B=function(){var e=Object(P.b)();return Object(n.useEffect)((function(){e(g("Harry")),e(S("Friends"))}),[e]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{className:"banner-img"}),Object(D.jsx)(z,{})]})},K=(t(518),function(){var e=Object(j.f)().imdbID,c=Object(P.b)(),t=Object(P.c)(M);return console.log(t),Object(n.useEffect)((function(){return c(N(e)),function(){c(y())}}),[c,e]),Object(D.jsx)("div",{className:"movie-section",children:0===Object.keys(t).length?Object(D.jsx)("div",{children:"....Loading"}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"section-left",children:[Object(D.jsx)("div",{className:"movie-title",children:t.Title}),Object(D.jsxs)("div",{className:"movie-rating",children:[Object(D.jsxs)("span",{children:["IMDB Rating ",Object(D.jsx)("i",{className:"fa fa-star"}),": ",t.imdbRating]}),Object(D.jsxs)("span",{children:["IMDB Votes ",Object(D.jsx)("i",{className:"fa fa-thumbs-up"}),": ",t.imdbVotes]}),Object(D.jsxs)("span",{children:["Runtime ",Object(D.jsx)("i",{className:"fa fa-film"}),": ",t.Runtime]}),Object(D.jsxs)("span",{children:["Year ",Object(D.jsx)("i",{className:"fa fa-calendar"}),": ",t.Year]})]}),Object(D.jsx)("div",{className:"movie-plot",children:t.Plot}),Object(D.jsxs)("div",{className:"movie-info",children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Director"}),Object(D.jsx)("span",{children:t.Director})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Stars"}),Object(D.jsx)("span",{children:t.Actors})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Genres"}),Object(D.jsx)("span",{children:t.Genre})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Languages"}),Object(D.jsx)("span",{children:t.Language})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Awards"}),Object(D.jsx)("span",{children:t.Awards})]})]})]}),Object(D.jsx)("div",{className:"section-right",children:Object(D.jsx)("img",{src:t.Poster,alt:t.Title})})]})})}),Y=(t(519),function(){return Object(D.jsxs)("div",{className:"footer",children:[Object(D.jsx)("div",{children:"Amazon Prime"}),Object(D.jsx)("div",{children:"Terms and Privacy Notice Send us feedbackHelp\xa9 1996-2021, Amazon.com, Inc. or its affiliates"})]})}),G=function(){return Object(D.jsx)("div",{children:"PageNotFound"})};var H=function(){return Object(D.jsx)("div",{className:"App",children:Object(D.jsxs)(o.a,{children:[Object(D.jsx)(R,{}),Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)(j.c,{children:[Object(D.jsx)(j.a,{exact:!0,path:"/",component:B}),Object(D.jsx)(j.a,{exact:!0,path:"/movie/:imdbID",component:K}),Object(D.jsx)(j.a,{component:G})]})}),Object(D.jsx)(Y,{})]})})},J=Object(v.a)({reducer:{movies:A}});a.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(P.a,{store:J,children:Object(D.jsx)(H,{})})}),document.getElementById("root"))}},[[520,1,2]]]);
//# sourceMappingURL=main.f6d39122.chunk.js.map