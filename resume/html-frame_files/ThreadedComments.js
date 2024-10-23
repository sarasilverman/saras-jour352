(()=>{"use strict";var e,o={43549:(e,o,t)=>{t.d(o,{g:()=>c});var r=t(54380),i=t(41594),s=t(62026),n=t(73816),a=t(51751),p=t(92614),l=t(11135);class c extends i.Component{constructor(e){super(e),this.container={resources:e.resources,timeHelpers:Panopto.Core.TimeHelpers,stringHelpers:PanoptoTS.StringHelpers,deliveryService:new s.DeliveryService({uriScheme:Panopto.uriScheme,webServerFQDN:Panopto.webServerFQDN,appRoot:Panopto.appRoot}),settings:{discussionModerationEnabled:Panopto.features.enableDiscussionModeration,displayFullNamesInDiscussion:Panopto.viewer.displayFullNamesInDiscussion},brandColorSafe:this.props.brandColorSafe,onAddPositionListener:e.onAddPositionListener,onRemovePositionListener:e.onRemovePositionListener}}render(){const e=Panopto.user.currentItemPermissions[l.Permission.SessionCommentModerator];return(0,r.Y)(n.t,{value:this.container,children:(0,r.Y)(p.b,{sessionId:this.props.sessionId,deliveryId:this.props.deliveryId,commentPollingInterval:this.props.commentPollingInterval,userKey:this.props.userKey,userFullName:this.props.userFullName,inviteToken:this.props.inviteTokenId,userIsModerator:e,isBroadcast:this.props.isBroadcast,sessionsService:this.props.sessionsService,render:(e,o,t,i,s,n,p,l,c,d,u,m,h,v,b,g,f,y,w,C,P)=>(0,r.Y)(a._,{isInteractiveViewer:!0,id:this.props.paneId,tabId:this.props.tabId,selected:this.props.selected,replyingTo:t,addedComment:i,isAuthenticated:this.props.isAuthenticated,loginUrl:this.props.loginUrl,onInputSubmit:s,onInlineReplySubmit:n,threads:e,isLoading:o,isDiscussionDownloadEnabled:!0,isMobileApp:!1,isLandscape:!1,onContentRowTimeClick:this.props.onContentRowTimeClick,onSetThreadExpanded:p,onReply:l,onDelete:c,inputRef:v,defaultCommentVisibility:u,newCommentVisibility:m,editingComment:d,discussionFilter:h,toggleThreadVisibility:b,changeDefaultCommentVisibility:g,changeNewCommentVisibility:f,changeCommentFilter:y,onEdit:w,onRetry:C,onDownloadDiscussionClicked:P})})})}}},96509:(e,o,t)=>{var r=t(18187),i=t(43549);Panopto.ThreadedComments=(0,r.bootstrapReactComponent)(i.g)},11135:e=>{e.exports=PanoptoCore},18187:e=>{e.exports=PanoptoReactComponents},54782:e=>{e.exports=PanoptoStyles},62026:e=>{e.exports=PanoptoViewer},41594:e=>{e.exports=React},22224:e=>{e.exports=_},38123:e=>{e.exports=moment}},t={};function r(e){var i=t[e];if(void 0!==i)return i.exports;var s=t[e]={id:e,exports:{}};return o[e].call(s.exports,s,s.exports,r),s.exports}r.m=o,e=[],r.O=(o,t,i,s)=>{if(!t){var n=1/0;for(c=0;c<e.length;c++){for(var[t,i,s]=e[c],a=!0,p=0;p<t.length;p++)(!1&s||n>=s)&&Object.keys(r.O).every((e=>r.O[e](t[p])))?t.splice(p--,1):(a=!1,s<n&&(n=s));if(a){e.splice(c--,1);var l=i();void 0!==l&&(o=l)}}return o}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[t,i,s]},r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r.j=6062,(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var o=r.g.document;if(!e&&o&&(o.currentScript&&"SCRIPT"===o.currentScript.tagName.toUpperCase()&&(e=o.currentScript.src),!e)){var t=o.getElementsByTagName("script");if(t.length)for(var i=t.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=t[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=document.baseURI||self.location.href;var e={6062:0};r.O.j=o=>0===e[o];var o=(o,t)=>{var i,s,[n,a,p]=t,l=0;if(n.some((o=>0!==e[o]))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(p)var c=p(r)}for(o&&o(t);l<n.length;l++)s=n[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(c)},t=this.webpackChunk_panopto_webpack=this.webpackChunk_panopto_webpack||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})(),r.nc=void 0;var i=r.O(void 0,[4223],(()=>r(96509)));i=r.O(i)})();
//# sourceMappingURL=file://engfs.d.panopto.com/share/jenkinsbuilds/rel_rtc_15.3.1/15.3.1.00010/_PublishedWebsites/WebUI/Scripts/Panopto/Bundles/ThreadedComments.js.map