(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{332:function(e,t,n){e.exports=n.p+"static/media/sidebar.fc9cb053.jpg"},392:function(e,t,n){"use strict";n.r(t);var a=n(45),r=n(70),i=n(73),o=n(71),l=n(74),c=n(0),s=n.n(c),u=n(39),p=n(18),h=n(46),d=n.n(h),m=n(23),b=n(40),f=n(227),g=n(368),w=n.n(g),E=n(369),v=n.n(E),O=n(370),j=n.n(O),y=n(35),k=n.n(y),C=n(332),x=n.n(C);var S=Object(p.withStyles)(function(e){return{drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerWrapper:{backgroundImage:"url(".concat(x.a,")"),top:0,left:0,width:"100%",height:"100%",zIndex:1,display:"block",position:"absolute",backgroundSize:"cover",backgroundPosition:"center center","&:after":{width:"100%",height:"100%",zIndex:3,content:"",display:"block",opacity:.8,position:"absolute",background:"#000"}},drawerPaperClose:Object(b.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},e.breakpoints.up("sm"),{width:9*e.spacing.unit}),toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar)}},{withTheme:!0})(function(e){var t=e.classes,n=e.open,a=(e.theme,e.handleDrawerClose);return s.a.createElement(f.c,{variant:"permanent",classes:{paper:k()(t.drawerPaper,!n&&t.drawerPaperClose)},open:n},s.a.createElement("div",{className:t.drawerWrapper},s.a.createElement("div",{className:t.toolbarIcon},s.a.createElement(f.d,{onClick:a},s.a.createElement(w.a,null))),s.a.createElement(f.b,null),s.a.createElement(f.e,null,["Inbox","Starred","Send email","Drafts"].map(function(e,t){return s.a.createElement(f.f,{button:!0,key:e},s.a.createElement(f.g,null,t%2===0?s.a.createElement(v.a,null):s.a.createElement(j.a,null)),s.a.createElement(f.h,{primary:e}))})),s.a.createElement(f.b,null),s.a.createElement(f.e,null,["All mail","Trash","Spam"].map(function(e,t){return s.a.createElement(f.f,{button:!0,key:e},s.a.createElement(f.g,null,t%2===0?s.a.createElement(v.a,null):s.a.createElement(j.a,null)),s.a.createElement(f.h,{primary:e}))}))))}),D=n(247),I=n.n(D),B=n(15),N=n.n(B),L=n(236),U=n.n(L),P=n(379),z=n.n(P),T=n(246),A=n.n(T),H=n(223),R=n.n(H),W=n(241),G=n.n(W),J=n(245),M=n.n(J),X=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={anchorEl:null},n.handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.anchorEl,t=this.props,n=t.username,a=t.onLogout;return s.a.createElement("div",null,s.a.createElement(R.a,{"aria-owns":e?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},n),s.a.createElement(G.a,{id:"simple-menu",anchorEl:e,open:Boolean(e),onClose:this.handleClose},s.a.createElement(M.a,{onClick:this.handleClose},"Profile"),s.a.createElement(M.a,{onClick:this.handleClose},"My account"),s.a.createElement(M.a,{onClick:a},"Logout")))}}]),t}(s.a.Component),q=Object(c.memo)(function(e){var t=e.open,n=e.classes,a=e.handleDrawerOpen,r=e.onLogout,i=e.username;return s.a.createElement(A.a,{color:"default",position:"absolute",className:k()(n.appBar,t&&n.appBarShift)},s.a.createElement(I.a,{disableGutters:!t,className:n.toolbar},s.a.createElement(U.a,{color:"inherit","aria-label":"Open drawer",onClick:a,className:k()(n.menuButton,t&&n.menuButtonHidden)},s.a.createElement(z.a,null)),s.a.createElement(N.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:n.title},"Dashboard"),s.a.createElement(X,{username:i,onLogout:r})))}),F=Object(u.a)(Object(p.withStyles)(function(e){return{appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},hide:{display:"none"},toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),menuButton:{marginLeft:12,marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1}}},{withTheme:!0}))(q),K=n(31),Q=n(44),V=n(391),Y=n(394),Z=n(390),$=n(55),_=n(28),ee=n(101),te=n(395),ne=n(33),ae=function(e){return function(t){var n=function(n){function c(){return Object(a.a)(this,c),Object(i.a)(this,Object(o.a)(c).apply(this,arguments))}return Object(l.a)(c,n),Object(r.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.listener=ne.a.onAuthUserListener(function(n){e(n)||t.props.history.push($.c)},function(){return t.props.history.push($.c)})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return e(this.props.authUser)?s.a.createElement(t,this.props):null}}]),c}(s.a.Component);return Object(u.a)(te.a,Object(K.b)(function(e){return{authUser:e.authReducer.authUser}}))(n)}},re=Object(_.a)("../views/HomePage"),ie=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={open:!0},n.handleDrawerOpen=function(){n.setState({open:!0})},n.handleDrawerClose=function(){n.setState({open:!1})},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.logoutUser,a=e.authUser,r=this.state.open;return s.a.createElement("div",{className:t.root},s.a.createElement(d.a,null),s.a.createElement(F,{open:r,handleDrawerOpen:this.handleDrawerOpen,onLogout:n,username:a.username}),s.a.createElement(S,{open:r,handleDrawerClose:this.handleDrawerClose}),s.a.createElement("main",{className:t.content},s.a.createElement("div",{className:t.drawerHeader}),s.a.createElement(V.a,null,s.a.createElement(Y.a,null,s.a.createElement(Z.a,{path:$.a,exact:!0,component:re})))))}}]),t}(s.a.Component),oe={logoutUser:Q.b};t.default=Object(u.a)(ae(ee.b),Object(p.withStyles)(function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:3*e.spacing.unit,height:"100vh",overflow:"auto"}}},{withTheme:!0}),Object(K.b)(null,oe))(ie)}}]);
//# sourceMappingURL=3.b9fd0571.chunk.js.map