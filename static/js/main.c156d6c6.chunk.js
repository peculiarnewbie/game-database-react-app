(this["webpackJsonpreact-tut"]=this["webpackJsonpreact-tut"]||[]).push([[0],{33:function(e,n,t){"use strict";t.r(n);var a,r,c,i,s=t(0),o=t.n(s),d=t(16),u=t.n(d),p=t(11),b=t(2),m=t.p+"static/media/react-movie-logo.35f4d399.svg",h=t.p+"static/media/tmdb_logo.e7029961.svg",j=t(3),f=t(4),x=f.b.div(a||(a=Object(j.a)(["\n    position: -webkit-sticky; /* Safari */\n    position: sticky;\n    top: 0;\n    background: var(--darkGrey);\n    padding: 0 20px;\n    z-index:200;\n"]))),l=f.b.div(r||(r=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: var(--maxWidth);\n    padding: 20px 0;\n    margin: 0 auto;\n"]))),g=f.b.img(c||(c=Object(j.a)(["\n    width: 200px;\n\n    @media screen and (max-width: 500px){\n        width: 150px\n    }\n"]))),O=f.b.img(i||(i=Object(j.a)(["\n    width: 100px;\n\n    @media screen and (max-width: 500px){\n        width: 80px\n    }\n"]))),v=t(1);var _,w,y,k,S,T,G,E,C,I,P,R,A,D=function(){return Object(v.jsx)(x,{children:Object(v.jsxs)(l,{children:[Object(v.jsx)(p.b,{to:"/",children:Object(v.jsx)(g,{src:m,alt:"site-logo"})}),Object(v.jsx)(O,{src:h,alt:"tmdb-logo"})]})})},z="https://api.themoviedb.org/3/",W=Object({NODE_ENV:"production",PUBLIC_URL:"/game-database-react-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,H="".concat(z,"search/movie?api_key=").concat(W,"&language=en-US&query="),N="".concat(z,"movie/popular?api_key=").concat(W,"&language=en-US"),B="".concat(z,"authentication/token/new?api_key=").concat(W),F="".concat(z,"authentication/token/validate_with_login?api_key=").concat(W),K="".concat(z,"authentication/session/new?api_key=").concat(W),L=f.b.div(_||(_=Object(j.a)(["\n    background: linear-gradient(\n        to bottom, \n        rgba(0, 0, 0, 0) 41%, \n        rgba(0, 0, 0, 0.65) 100%\n    ),\n        url(","), var(--darkGrey);\n    background-size: 100%, cover;\n    background-position: center;\n    height: 600px;\n    position: relative;\n    animation: animateHeroImage 1s;\n\n    @keyframes animateHeroImage {\n        from {\n            opacity: 0;\n        }\n        to{\n            opacity: 1;\n        }\n    }\n\n    ","\n"])),(function(e){return e.image}),(function(e){return e.isSearch&&"\n    height: 300px\n  "})),U=f.b.div(w||(w=Object(j.a)(["\n    padding: 20px;\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n"]))),q=f.b.div(y||(y=Object(j.a)(["\n    z-index: 100;\n    max-width: 700px;\n    position: absolute;\n    bottom: 40px;\n    margin-right: 20px;\n    min-height: 100px;\n    color: var(--white);\n\n    h1{\n        font-size: var(--fontVeryBig);\n\n        @media screen and (max-width: 720px){\n            font-size: var(--fontBig);\n        }\n    }\n\n    p {\n        font-size: var(--fontMed);\n\n        @media screen and (max-width: 720px){\n            font-size: var(--fontSmall);\n        }\n    }\n\n    @media screen and (max-width: 720px){\n        max-width: 100%;\n    }\n"]))),J=function(e){var n=e.isSearch,t=e.image,a=e.title,r=e.text;return Object(v.jsx)(L,{image:t,isSearch:n,children:Object(v.jsx)(U,{children:Object(v.jsxs)(q,{children:[Object(v.jsx)("h1",{children:a}),Object(v.jsx)("p",{children:r})]})})})},M=f.b.div(k||(k=Object(j.a)(["\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n    padding: 0 20px;\n\n    h1 {\n        color: var(--medGrey);\n\n        @media screen and (max-width: 768px) {\n            font-size: car(--fontBig);\n        }\n    }\n"]))),V=f.b.div(S||(S=Object(j.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-row-gap: 0.1rem;\n    grid-column-gap: 1.5rem;\n    align-items: flex-start;\n"]))),Y=function(e){var n=e.header,t=e.children;return Object(v.jsxs)(M,{children:[Object(v.jsx)("h1",{children:n}),Object(v.jsx)(V,{children:t})]})},Q=f.b.div(T||(T=Object(j.a)(["\n    //background: var(--darkGrey);    \n    padding: 10px 0px;\n    overflow: hidden;\n    max-height: 100%;\n"]))),X=f.b.div(G||(G=Object(j.a)(["\n    //background: var(--medGrey); \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 10px;\n"]))),Z=f.b.img(E||(E=Object(j.a)(["\n    max-width: 720px;\n    transition: all 0.3s;\n    border-radius: 5px;\n    object-fit: cover;\n    animation: animateThumb 0.5s;\n    width:100%;\n    margin:auto;\n\n    :hover {\n        width: 105%;\n        opacity:  0.8;\n    }\n\n    @keyframes animateThumb{\n        from{\n            opacity:  0;\n        }\n        to{\n            opacity: 1;\n        }\n    }\n"]))),$=f.b.div(C||(C=Object(j.a)(["\n    position:relative;\n    top:0px;\n    color: var(--black);\n    margin: 0 10px;\n"]))),ee=(f.b.div(I||(I=Object(j.a)(["\n    height:10px;\n"]))),function(e){var n=e.image,t=e.title,a=e.gameId,r=e.clickable;return Object(v.jsx)(Q,{children:r?Object(v.jsxs)(p.b,{to:"/".concat(a),children:[Object(v.jsx)(X,{children:Object(v.jsx)(Z,{src:n,alt:"movie-thumb"})}),Object(v.jsx)($,{children:t})]}):Object(v.jsx)(X,{children:Object(v.jsx)(Z,{src:n,alt:"movie-thumb"})})})}),ne=f.b.div(P||(P=Object(j.a)(["\n    border: 5px solid var(--lightGrey);\n    border-top: 5px solid var(--medGrey);\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    animation: spin 0.8s linear infinite;\n    margin: 20px auto;\n\n    @keyframes spin{\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n"]))),te=t(6),ae=t.p+"static/media/search-icon.bb4c697f.svg",re=f.b.div(R||(R=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    height: 100px;\n    background: var(--darkGrey);\n    padding: 0 20px;\n"]))),ce=f.b.div(A||(A=Object(j.a)(["\n    position: relative;\n    max-width: var(--maxWidth);\n    width: 100%;\n    height: 55px;\n    background: var(--medGrey);\n    margin: 0 auto;\n    border-radius: 40px;\n    color: var(--white);\n\n    img {\n        position: absolute;\n        left: 15px;\n        top: 14px;\n        width: 30px;\n    }\n\n    input {\n        font-size: 28px;\n        position: absolute;\n        left: 0;\n        margin: 8px 0;\n        padding: 0 0 0 60px;\n        border: 0;\n        width: 95%;\n        background: transparent;\n        height: 40px;\n        color: var(--white);\n\n        :focus{\n            outline: none;\n        }\n    }\n"]))),ie=function(e){var n=e.setSearchTerm,t=Object(s.useState)(""),a=Object(te.a)(t,2),r=a[0],c=a[1],i=Object(s.useRef)(!0);return Object(s.useEffect)((function(){if(!i.current){var e=setTimeout((function(){n(r)}),500);return function(){return clearTimeout(e)}}i.current=!1}),[n,r]),Object(v.jsx)(re,{children:Object(v.jsxs)(ce,{children:[Object(v.jsx)("img",{src:ae,alt:"search-icon"}),Object(v.jsx)("input",{type:"text",placeholder:"Search Movie",onChange:function(e){return c(e.currentTarget.value)},value:r})]})})},se=t(5),oe=t.n(se),de=t(10),ue=t(8),pe=t(7),be={method:"POST",headers:{"Content-Type":"application/json"}},me=(function(){var e=Object(pe.a)(oe.a.mark((function e(n,t){var a;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n?"".concat(H).concat(n,"&page=").concat(t):"".concat(N,"&page=").concat(t),e.next=3,fetch(a);case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))}(),function(){var e=Object(pe.a)(oe.a.mark((function e(n){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(z,"movie/").concat(n,"?api_key=").concat(W),e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))}(),function(){var e=Object(pe.a)(oe.a.mark((function e(n){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(z,"movie/").concat(n,"/credits?api_key=").concat(W),e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))}(),function(){var e=Object(pe.a)(oe.a.mark((function e(){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(B);case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,e.abrupt("return",n.request_token);case 6:case"end":return e.stop()}}),e)})))}(),function(){var e=Object(pe.a)(oe.a.mark((function e(n,t,a){var r,c;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={username:t,password:a,request_token:n},e.next=3,fetch(F,Object(ue.a)(Object(ue.a)({},be),{},{body:JSON.stringify(r)}));case 3:return e.next=5,e.sent.json();case 5:if(!e.sent.success){e.next=13;break}return e.next=9,fetch(K,Object(ue.a)(Object(ue.a)({},be),{},{body:JSON.stringify({request_token:n})}));case 9:return e.next=11,e.sent.json();case 11:return c=e.sent,e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})))}(),function(){var e=Object(pe.a)(oe.a.mark((function e(n,t,a){var r,c;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(z,"movie/").concat(t,"/rating?api_key=").concat(W,"&session_id=").concat(n),e.next=3,fetch(r,Object(ue.a)(Object(ue.a)({},be),{},{body:JSON.stringify({value:a})}));case 3:return e.next=5,e.sent.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))}(),t.p+"static/media/no_image.22d2aa4d.jpg");var he,je="https://fierce-ocean-46816.herokuapp.com/https://api.igdb.com/v4/games/",fe=(Object({NODE_ENV:"production",PUBLIC_URL:"/game-database-react-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_IGDB_CLIENT_ID,Object({NODE_ENV:"production",PUBLIC_URL:"/game-database-react-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_IGDB_ACCESS_TOKEN,"https://images.igdb.com/igdb/image/upload/t_720p/"),xe=f.b.div(he||(he=Object(j.a)(["\n\n"]))),le=function(e){var n=e.text,t=e.callback;return Object(v.jsx)(xe,{type:"button",onClick:t,children:n})},ge=(t(30),new Headers);ge.append("Client-ID","x0muvk9gdif8w2reu3bkf5y0k1xrsu"),ge.append("Authorization","Bearer s7qvf5pffac1nsuy9tioqc4ef5u224"),ge.append("Content-Type","text/plain");var Oe={method:"POST",headers:ge,body:"fields name, cover.image_id; sort rating desc",redirect:"follow"},ve={fetchGames:function(){var e=Object(pe.a)(oe.a.mark((function e(n){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n?'search "'.concat(n,'"; fields name, cover.image_id; where category = 0 & rating_count > 5; limit 200;'):"fields name, cover.image_id; sort aggregated_rating desc; where first_release_date > 1609434000 & rating_count > 1 & aggregated_rating_count > 2; limit 200;",Oe.body=t,e.next=4,fetch(je,Oe);case 4:return e.next=6,e.sent.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),fetchFirstGame:function(){var e=Object(pe.a)(oe.a.mark((function e(n){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="fields name, summary, cover.image_id, artworks.image_id, screenshots.image_id; where id = ".concat(n,";"),Oe.body=t,e.next=4,fetch(je,Oe);case 4:return e.next=6,e.sent.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},_e=ve,we={page:0,results:[],firstGame:[],firstGameId:0,firstGameName:"",firstGameSummary:"",heroImage:"",total_pages:0,total_results:0};var ye,ke=function(){var e=function(){var e=Object(s.useState)(""),n=Object(te.a)(e,2),t=n[0],a=n[1],r=Object(s.useState)(we),c=Object(te.a)(r,2),i=c[0],o=c[1],d=Object(s.useState)(!1),u=Object(te.a)(d,2),p=u[0],b=u[1],m=Object(s.useState)(!1),h=Object(te.a)(m,2),j=h[0],f=h[1],x=function(){var e=Object(pe.a)(oe.a.mark((function e(n){var t,a,r,c=arguments;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:"",e.prev=1,f(!1),b(!0),e.next=6,_e.fetchGames(t);case 6:return a=e.sent,e.next=9,_e.fetchFirstGame(a[0].id);case 9:r=e.sent,o((function(e){return Object(ue.a)(Object(ue.a)({},a),{},{results:n>1?[].concat(Object(de.a)(e.results),Object(de.a)(a)):Object(de.a)(a),firstGame:Object(de.a)(r)})})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),f(!0);case 16:b(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){o(we),x(1,t)}),[t]),{state:i,loading:p,error:j,searchTerm:t,setSearchTerm:a}}(),n=e.state,t=e.loading,a=(e.error,e.searchTerm),r=e.setSearchTerm;return console.log(n),Object(v.jsxs)(v.Fragment,{children:[n.firstGame[0]?Object(v.jsx)(J,{isSearch:!!a,image:n.firstGame[0].artworks?fe+n.firstGame[0].artworks[0].image_id+".jpg":n.firstGame[0].screenshots?fe+n.firstGame[0].screenshots[0].image_id+".jpg":me,title:n.firstGame[0].name,text:n.firstGame[0].summary}):null,Object(v.jsx)(ie,{setSearchTerm:r}),Object(v.jsx)(Y,{header:a?"Search Result":"Highest Rated 2021 Games",children:n.results.map((function(e){return Object(v.jsx)(ee,{clickable:!0,image:e.cover?fe+e.cover.image_id+".jpg":me,gameId:e.id,title:e.name},e.id)}))}),t&&Object(v.jsx)(ne,{}),n.page<n.total_pages&&!t&&Object(v.jsx)(le,{text:"Load More"})]})},Se=function(){var e=function(e){var n=Object(s.useState)({}),t=Object(te.a)(n,2),a=t[0],r=t[1],c=Object(s.useState)(!0),i=Object(te.a)(c,2),o=i[0],d=i[1],u=Object(s.useState)(!1),p=Object(te.a)(u,2),b=p[0],m=p[1];return Object(s.useEffect)((function(){var n=function(){var n=Object(pe.a)(oe.a.mark((function n(){var t;return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),m(!1),n.next=5,_e.fetchFirstGame(e);case 5:t=n.sent,r(Object(ue.a)({},t)),d(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),m(!0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),{state:a,loading:o,error:b}}(Object(b.h)().gameId),n=e.state;e.loading,e.error;return console.log(n),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{children:"Game"})})},Te=function(){return Object(v.jsx)("div",{children:"NotFound"})},Ge=Object(f.a)(ye||(ye=Object(j.a)(["\n :root { \n     --maxWidth: 1280px;\n     --white: #fff;\n     --black: #000;\n     --lightGrey: #eee;\n     --medGrey: #353535;\n     --darkGrey: #1c1c1c;\n     --fontVeryBig: 2.5rem;\n     --fontBig: 1.5rem;\n     --fontMed: 1.2rem;\n     --fontSmall: 1rem;\n }\n\n *{\n     box-sizing: border-box;\n     font-family: 'Abel', sans-serif;\n }\n\n body {\n     margin: 0;\n     padding: 0;\n\n     h1 {\n         font-size: 2rem;\n         font-weight: 600;\n         color: var(--white);\n     }\n\n     h3 {\n         font-size: 1.1rem;\n         font-weight: 600;\n     }\n\n     p {\n         font-size: 1rem;\n         color: var(--white);\n     }\n }\n\n"]))),Ee=function(){return Object(v.jsxs)(p.a,{children:[Object(v.jsx)(D,{}),Object(v.jsxs)(b.c,{children:[Object(v.jsx)(b.a,{path:"/",element:Object(v.jsx)(ke,{})}),Object(v.jsx)(b.a,{path:"/:gameId",element:Object(v.jsx)(Se,{})}),Object(v.jsx)(b.a,{path:"/*",element:Object(v.jsx)(Te,{})})]}),Object(v.jsx)(Ge,{})]})};u.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(Ee,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c156d6c6.chunk.js.map