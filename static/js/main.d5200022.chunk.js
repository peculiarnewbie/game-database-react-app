(this.webpackJsonpgamz=this.webpackJsonpgamz||[]).push([[0],{33:function(e,n,t){"use strict";t.r(n);var a,r,c,i,s=t(0),o=t.n(s),u=t(16),d=t.n(u),b=t(12),p=t(2),m=t.p+"static/media/gamz-white.b6196241.png",h=t.p+"static/media/Logo-white.58ec3dfb.png",j=t(3),f=t(4),l=f.b.div(a||(a=Object(j.a)(["\n    position: -webkit-sticky; /* Safari */\n    position: sticky;\n    top: 0;\n    background: var(--darkGrey);\n    padding: 0 20px;\n    z-index:200;\n"]))),x=f.b.div(r||(r=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: var(--maxWidth);\n    padding: 20px 0;\n    margin: 0 auto;\n"]))),g=f.b.img(c||(c=Object(j.a)(["\n    width: 150px;\n\n    @media screen and (max-width: 500px){\n        width: 100px\n    }\n"]))),v=f.b.img(i||(i=Object(j.a)(["\n    width: 80px;\n\n    @media screen and (max-width: 500px){\n        width: 50px\n    }\n"]))),O=t(1);var w,k,y,_,S,G,T,z,E,I,A,C,P,R=function(){return Object(O.jsx)(l,{children:Object(O.jsxs)(x,{children:[Object(O.jsx)("a",{href:"",children:Object(O.jsx)(g,{src:m,alt:"site-logo"})}),Object(O.jsx)("a",{href:"https://peculiarnewbie.github.io/",target:"_blank",children:Object(O.jsx)(v,{src:h,alt:"tmdb-logo"})})]})})},N="https://api.themoviedb.org/3/",q=Object({NODE_ENV:"production",PUBLIC_URL:"/game-database-react-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTHORIZATION:"43s2jbkqb2x4qhnnrudleu5ndiaug5",REACT_APP_CLIENT_ID:"x0muvk9gdif8w2reu3bkf5y0k1xrsu"}).REACT_APP_API_KEY,B="".concat(N,"search/movie?api_key=").concat(q,"&language=en-US&query="),F="".concat(N,"movie/popular?api_key=").concat(q,"&language=en-US"),H="".concat(N,"authentication/token/new?api_key=").concat(q),W="".concat(N,"authentication/token/validate_with_login?api_key=").concat(q),L="".concat(N,"authentication/session/new?api_key=").concat(q),D=f.b.div(w||(w=Object(j.a)(["\n    background: linear-gradient(\n        to bottom, \n        rgba(0, 0, 0, 0) 41%, \n        rgba(0, 0, 0, 0.65) 100%\n    ),\n        url(","), var(--darkGrey);\n    background-size: 100%, cover;\n    background-position: center;\n    height: 600px;\n    position: relative;\n    animation: animateHeroImage 1s;\n\n    @keyframes animateHeroImage {\n        from {\n            opacity: 0;\n        }\n        to{\n            opacity: 1;\n        }\n    }\n\n    ","\n"])),(function(e){return e.image}),(function(e){return e.isSearch&&"\n    height: 300px\n  "})),J=f.b.div(k||(k=Object(j.a)(["\n    padding: 20px;\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n"]))),U=f.b.div(y||(y=Object(j.a)(["\n    z-index: 100;\n    max-width: 700px;\n    position: absolute;\n    bottom: 40px;\n    margin-right: 20px;\n    min-height: 100px;\n    color: var(--white);\n\n    h1{\n        font-size: var(--fontVeryBig);\n\n        @media screen and (max-width: 720px){\n            font-size: var(--fontBig);\n        }\n    }\n\n    p {\n        font-size: var(--fontMed);\n\n        @media screen and (max-width: 720px){\n            font-size: var(--fontSmall);\n        }\n    }\n\n    @media screen and (max-width: 720px){\n        max-width: 100%;\n    }\n"]))),K=function(e){var n=e.isSearch,t=e.image,a=e.title,r=e.text;return Object(O.jsx)(D,{image:t,isSearch:n,children:Object(O.jsx)(J,{children:Object(O.jsxs)(U,{children:[Object(O.jsx)("h1",{children:a}),Object(O.jsx)("p",{children:r})]})})})},M=f.b.div(_||(_=Object(j.a)(["\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n    padding: 0 20px;\n\n    h1 {\n        color: var(--medGrey);\n\n        @media screen and (max-width: 768px) {\n            font-size: car(--fontBig);\n        }\n    }\n"]))),V=f.b.div(S||(S=Object(j.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-row-gap: 0.1rem;\n    grid-column-gap: 1.5rem;\n    align-items: flex-start;\n"]))),Y=function(e){var n=e.header,t=e.children;return Object(O.jsxs)(M,{children:[Object(O.jsx)("h1",{children:n}),Object(O.jsx)(V,{children:t})]})},Z=f.b.div(G||(G=Object(j.a)(["\n    //background: var(--darkGrey);    \n    padding: 10px 0px;\n    overflow: hidden;\n    max-height: 100%;\n"]))),Q=f.b.div(T||(T=Object(j.a)(["\n    //background: var(--medGrey); \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 10px;\n"]))),X=f.b.img(z||(z=Object(j.a)(["\n    max-width: 720px;\n    transition: all 0.3s;\n    border-radius: 5px;\n    object-fit: cover;\n    animation: animateThumb 0.5s;\n    width:100%;\n    margin:auto;\n\n    :hover {\n        width: 105%;\n        opacity:  0.8;\n    }\n\n    @keyframes animateThumb{\n        from{\n            opacity:  0;\n        }\n        to{\n            opacity: 1;\n        }\n    }\n"]))),$=f.b.div(E||(E=Object(j.a)(["\n    position:relative;\n    top:0px;\n    color: var(--black);\n    margin: 0 10px;\n"]))),ee=(f.b.div(I||(I=Object(j.a)(["\n    height:10px;\n"]))),function(e){var n=e.image,t=e.title,a=(e.gameId,e.gameLink),r=e.clickable;return Object(O.jsx)(Z,{children:r?Object(O.jsxs)("a",{href:null===a||void 0===a?void 0:a.url,target:"_blank",children:[Object(O.jsx)(Q,{children:Object(O.jsx)(X,{src:n,alt:"movie-thumb"})}),Object(O.jsx)($,{children:t})]}):Object(O.jsx)(Q,{children:Object(O.jsx)(X,{src:n,alt:"movie-thumb"})})})}),ne=f.b.div(A||(A=Object(j.a)(["\n    border: 5px solid var(--lightGrey);\n    border-top: 5px solid var(--medGrey);\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    animation: spin 0.8s linear infinite;\n    margin: 20px auto;\n\n    @keyframes spin{\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n"]))),te=t(6),ae=t.p+"static/media/search-icon.bb4c697f.svg",re=f.b.div(C||(C=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    height: 100px;\n    background: var(--darkGrey);\n    padding: 0 20px;\n"]))),ce=f.b.div(P||(P=Object(j.a)(["\n    position: relative;\n    max-width: var(--maxWidth);\n    width: 100%;\n    height: 55px;\n    background: var(--medGrey);\n    margin: 0 auto;\n    border-radius: 40px;\n    color: var(--white);\n\n    img {\n        position: absolute;\n        left: 15px;\n        top: 14px;\n        width: 30px;\n    }\n\n    input {\n        font-size: 28px;\n        position: absolute;\n        left: 0;\n        margin: 8px 0;\n        padding: 0 0 0 60px;\n        border: 0;\n        width: 95%;\n        background: transparent;\n        height: 40px;\n        color: var(--white);\n\n        :focus{\n            outline: none;\n        }\n    }\n"]))),ie=function(e){var n=e.setSearchTerm,t=Object(s.useState)(""),a=Object(te.a)(t,2),r=a[0],c=a[1],i=Object(s.useRef)(!0);return Object(s.useEffect)((function(){if(!i.current){var e=setTimeout((function(){n(r)}),500);return function(){return clearTimeout(e)}}i.current=!1}),[n,r]),Object(O.jsx)(re,{children:Object(O.jsxs)(ce,{children:[Object(O.jsx)("img",{src:ae,alt:"search-icon"}),Object(O.jsx)("input",{type:"text",placeholder:"Search Game",onChange:function(e){return c(e.currentTarget.value)},value:r})]})})},se=t(5),oe=t.n(se),ue=t(10),de=t(8),be=t(7),pe={method:"POST",headers:{"Content-Type":"application/json"}},me=(function(){var e=Object(be.a)(oe.a.mark((function e(n,t){var a;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n?"".concat(B).concat(n,"&page=").concat(t):"".concat(F,"&page=").concat(t),e.next=3,fetch(a);case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))}(),function(){var e=Object(be.a)(oe.a.mark((function e(n){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(N,"movie/").concat(n,"?api_key=").concat(q),e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))}(),function(){var e=Object(be.a)(oe.a.mark((function e(n){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(N,"movie/").concat(n,"/credits?api_key=").concat(q),e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))}(),function(){var e=Object(be.a)(oe.a.mark((function e(){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(H);case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,e.abrupt("return",n.request_token);case 6:case"end":return e.stop()}}),e)})))}(),function(){var e=Object(be.a)(oe.a.mark((function e(n,t,a){var r,c;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={username:t,password:a,request_token:n},e.next=3,fetch(W,Object(de.a)(Object(de.a)({},pe),{},{body:JSON.stringify(r)}));case 3:return e.next=5,e.sent.json();case 5:if(!e.sent.success){e.next=13;break}return e.next=9,fetch(L,Object(de.a)(Object(de.a)({},pe),{},{body:JSON.stringify({request_token:n})}));case 9:return e.next=11,e.sent.json();case 11:return c=e.sent,e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})))}(),function(){var e=Object(be.a)(oe.a.mark((function e(n,t,a){var r,c;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(N,"movie/").concat(t,"/rating?api_key=").concat(q,"&session_id=").concat(n),e.next=3,fetch(r,Object(de.a)(Object(de.a)({},pe),{},{body:JSON.stringify({value:a})}));case 3:return e.next=5,e.sent.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))}(),t.p+"static/media/no_image.22d2aa4d.jpg");var he,je="https://fierce-ocean-46816.herokuapp.com/https://api.igdb.com/v4/games/",fe="https://images.igdb.com/igdb/image/upload/t_720p/",le=f.b.div(he||(he=Object(j.a)(["\n\n"]))),xe=function(e){var n=e.text,t=e.callback;return Object(O.jsx)(le,{type:"button",onClick:t,children:n})},ge=(t(30),new Headers);ge.append("Client-ID","".concat("x0muvk9gdif8w2reu3bkf5y0k1xrsu")),ge.append("Authorization","Bearer ".concat("43s2jbkqb2x4qhnnrudleu5ndiaug5")),ge.append("Content-Type","text/plain");var ve={method:"POST",headers:ge,body:"fields name, cover.image_id; sort rating desc",redirect:"follow"},Oe={fetchGames:function(){var e=Object(be.a)(oe.a.mark((function e(n){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n?'search "'.concat(n,'"; fields name, cover.image_id, websites.url, websites.category; where category = 0 & rating_count > 5; limit 200;'):"fields name, cover.image_id, websites.url, websites.category; sort aggregated_rating desc; where first_release_date > 1640970000 & aggregated_rating_count > 1; limit 50;",ve.body=t,e.next=4,fetch(je,ve);case 4:return e.next=6,e.sent.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),fetchFirstGame:function(){var e=Object(be.a)(oe.a.mark((function e(n){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="fields name, summary, cover.image_id, artworks.image_id, screenshots.image_id; where id = ".concat(n,";"),ve.body=t,e.next=4,fetch(je,ve);case 4:return e.next=6,e.sent.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},we=Oe,ke={page:0,results:[],firstGame:[],firstGameId:0,firstGameName:"",firstGameSummary:"",heroImage:"",total_pages:0,total_results:0};var ye,_e=function(){var e=function(){var e=Object(s.useState)(""),n=Object(te.a)(e,2),t=n[0],a=n[1],r=Object(s.useState)(ke),c=Object(te.a)(r,2),i=c[0],o=c[1],u=Object(s.useState)(!1),d=Object(te.a)(u,2),b=d[0],p=d[1],m=Object(s.useState)(!1),h=Object(te.a)(m,2),j=h[0],f=h[1],l=function(){var e=Object(be.a)(oe.a.mark((function e(n){var t,a,r,c=arguments;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:"",e.prev=1,f(!1),p(!0),e.next=6,we.fetchGames(t);case 6:return a=e.sent,e.next=9,we.fetchFirstGame(a[0].id);case 9:r=e.sent,o((function(e){return Object(de.a)(Object(de.a)({},a),{},{results:n>1?[].concat(Object(ue.a)(e.results),Object(ue.a)(a)):Object(ue.a)(a),firstGame:Object(ue.a)(r)})})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),f(!0);case 16:p(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){o(ke),l(1,t)}),[t]),{state:i,loading:b,error:j,searchTerm:t,setSearchTerm:a}}(),n=e.state,t=e.loading,a=(e.error,e.searchTerm),r=e.setSearchTerm;return console.log(n),Object(O.jsxs)(O.Fragment,{children:[n.firstGame[0]?Object(O.jsx)(K,{isSearch:!!a,image:n.firstGame[0].artworks?fe+n.firstGame[0].artworks[0].image_id+".jpg":n.firstGame[0].screenshots?fe+n.firstGame[0].screenshots[0].image_id+".jpg":me,title:n.firstGame[0].name,text:n.firstGame[0].summary}):null,Object(O.jsx)(ie,{setSearchTerm:r}),Object(O.jsxs)(Y,{header:a?"Search Result":"Highest Rated 2022 Games",children:[n.results.map((function(e){var n;return Object(O.jsx)(ee,{clickable:!0,image:e.cover?fe+e.cover.image_id+".jpg":me,gameId:e.id,gameLink:null===(n=e.websites)||void 0===n?void 0:n.find((function(e){return 1===e.category})),title:e.name},e.id)})),console.log(n.results)]}),t&&Object(O.jsx)(ne,{}),n.page<n.total_pages&&!t&&Object(O.jsx)(xe,{text:"Load More"})]})},Se=function(){var e=function(e){var n=Object(s.useState)({}),t=Object(te.a)(n,2),a=t[0],r=t[1],c=Object(s.useState)(!0),i=Object(te.a)(c,2),o=i[0],u=i[1],d=Object(s.useState)(!1),b=Object(te.a)(d,2),p=b[0],m=b[1];return Object(s.useEffect)((function(){var n=function(){var n=Object(be.a)(oe.a.mark((function n(){var t;return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u(!0),m(!1),n.next=5,we.fetchFirstGame(e);case 5:t=n.sent,r(Object(de.a)({},t)),u(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),m(!0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),{state:a,loading:o,error:p}}(Object(p.h)().gameId),n=e.state;e.loading,e.error;return console.log(n),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:"Game"})})},Ge=function(){return Object(O.jsx)("div",{children:"NotFound"})},Te=Object(f.a)(ye||(ye=Object(j.a)(["\n :root { \n     --maxWidth: 1280px;\n     --white: #fff;\n     --black: #000;\n     --lightGrey: #eee;\n     --medGrey: #353535;\n     --darkGrey: #1c1c1c;\n     --fontVeryBig: 2.5rem;\n     --fontBig: 1.5rem;\n     --fontMed: 1.2rem;\n     --fontSmall: 1rem;\n }\n\n *{\n     box-sizing: border-box;\n     font-family: 'Abel', sans-serif;\n }\n\n body {\n     margin: 0;\n     padding: 0;\n\n     h1 {\n         font-size: 2rem;\n         font-weight: 600;\n         color: var(--white);\n     }\n\n     h3 {\n         font-size: 1.1rem;\n         font-weight: 600;\n     }\n\n     p {\n         font-size: 1rem;\n         color: var(--white);\n     }\n }\n\n"]))),ze=function(){return Object(O.jsxs)(b.a,{children:[Object(O.jsx)(R,{}),Object(O.jsxs)(p.c,{children:[Object(O.jsx)(p.a,{path:"/game-database-react-app",element:Object(O.jsx)(_e,{})}),Object(O.jsx)(p.a,{path:"/game-database-react-app/:gameId",element:Object(O.jsx)(Se,{})}),Object(O.jsx)(p.a,{path:"/game-database-react-app/*",element:Object(O.jsx)(Ge,{})})]}),Object(O.jsx)(Te,{})]})};d.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(ze,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d5200022.chunk.js.map