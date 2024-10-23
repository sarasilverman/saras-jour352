"use strict";Type.registerNamespace("Panopto"),Panopto.Application=function(){Panopto.Application.initializeBase(this),Panopto.Application.defaultInstance=this,Sys.Application.add_navigate(this._handleNavigate.bind(this))},Panopto.Application.prototype={_state:{},authCookieMessageThreshold:3e4,createMenu:void 0,recorderDownloadAndLaunch:void 0,LICENSING_ALERT_DISMISSED_KEY_BASE:"licensingAlertDismissed",CONTRACT_USAGE_ALERT_DISMISSED_KEY_BASE:"contractUsageAlertDismissed",ADMIN_ALERT_DISMISSED_KEY_BASE:"adminAlertDismissed",USER_ALERT_DISMISSED_KEY_BASE:"userAlertDismissed",init:function(){new Panopto.ModalPopup,Panopto.Core.UI.Handlers.button($("#embeddedHomeButton, #embeddedSessionsButton"),(function(){var e=$(this).is($("#embeddedHomeButton"))?"Home.aspx":"Sessions/List.aspx";let t=PanoptoTS.StringHelpers.format("{0}/Pages/{1}?embedded={2}",Panopto.appRoot,e,Panopto.embeddedModeView);Panopto.teamsApp?.isFromTeams&&(t=`${t}&isFromTeams=true`),location.href=t})),$get("searchQuery")&&($get("searchQuery").blur(),this._searchWatermark=Sys.create.watermark("#searchQuery",Panopto.GlobalResources.Application_js_SearchMessage,"ghosted"),this.ellipsisWatermarkText(),Panopto.Core.UI.Handlers.key($("#searchQuery"),this._handleSearchEntry,[Panopto.Core.Key.Enter],{context:this}),Panopto.Core.UI.Handlers.button($("#cancelSearch"),this._handleSearchCancel,{context:this,allowPropagation:!0})),this.recorderDownloadAndLaunch=new Panopto.RecorderDownloadAndLaunch,this.initCreateMenu(this.recorderDownloadAndLaunch),this.initUserMenu(),$("#helpMenuButton").length&&new PanoptoTS.Core.UI.Components.PopupMenuBehavior({menuButton:$("#helpMenuButton"),menu:$("#supportDropdown"),itemSelector:"a, input"}),$("#helpMenuVersion").focus((e=>$(e.currentTarget).select())).click((e=>e.stopPropagation())),Panopto.Core.UI.Handlers.button($("#loginButton"),(()=>{(new PanoptoTS.Locations).getLoginPageUrl({returnUrl:window.location.href,callback:e=>{window.location.href=e}})})),Panopto.Branding.brandElements(Panopto.branding.accentColor),$("a").each((function(){$(this).attr("aria-label",$(this).attr("title"))})),PanoptoCore.Browser.isMobileSafari&&($("#navBar").css("height","auto"),$("#content").css("border-left","1px solid #989898"),$(".pagination").css("bottom","inherit").css("border-left","1px solid #989898").css("margin-left","-1px")),this.startAuthCookieTimer(),Panopto.hideAlertMessage||this.checkAlertMessages()},checkAlertMessages:function(){const e=this.LICENSING_ALERT_DISMISSED_KEY_BASE+"_"+Panopto.user.userKey,t=this.CONTRACT_USAGE_ALERT_DISMISSED_KEY_BASE+"_"+Panopto.user.userKey,o=this.ADMIN_ALERT_DISMISSED_KEY_BASE+"_"+Panopto.user.userKey,n=this.USER_ALERT_DISMISSED_KEY_BASE+"_"+Panopto.user.userKey,a=new PanoptoCore.TypedStorageService(window.sessionStorage,e,!1),s=new PanoptoCore.TypedStorageService(window.sessionStorage,t,!1);let r;try{r=window.localStorage}catch{r=window.sessionStorage}const i=new PanoptoCore.TypedStorageService(r,o,""),l=new PanoptoCore.TypedStorageService(r,n,"");let c="",u=()=>{};Panopto.licensingAlertMessageHtml&&!a.value?(c=Panopto.licensingAlertMessageHtml,u=()=>{a.value=!0}):Panopto.contractUsageAlertMessageHtml&&!s.value?(c=Panopto.contractUsageAlertMessageHtml,u=()=>{s.value=!0}):Panopto.adminAlertMessageHtml&&i.value!==Panopto.adminAlertMessageId?(c=Panopto.adminAlertMessageHtml,u=()=>{i.value=Panopto.adminAlertMessageId}):Panopto.userAlertMessageHtml&&l.value!==Panopto.userAlertMessageId&&(c=Panopto.userAlertMessageHtml,u=()=>{l.value=Panopto.userAlertMessageId}),c&&(c=Panopto.Core.StringHelpers.displayStringFromResourceString(c,"Resources.GlobalResources",Panopto.lang,Panopto.GlobalResources),this.displayAlertMessage(c,u))},displayAlertMessage:function(e,t){const o=$("#notificationBanner"),n=o.find("#notificationMessageText"),a=o.find("#dismissButton");n.html(e),o.slideDown(),o.addClass("clicked"),o.focus(),Panopto.Core.UI.Handlers.button(a,((e,n)=>{t(),"keydown"===n.type&&$(":tabbable").not("#notificationBanner :tabbable").first().focus(),o.removeAttr("role"),o.slideUp(void 0,(()=>{this.checkAlertMessages()}))}))},startAuthCookieTimer:function(){var e=this;if(Panopto.user.isAuthenticated&&Panopto.authCookieTimeoutMinutes>0&&!Panopto.isIOS){this.wireUpLogoutWarningLink();var t=function(){var o=!0,n=PanoptoCore.CookieHelpers.getCookie("AuthRefreshTime");if(n){var a=new Date,s=new Date(parseInt(n,10));if(s.setMinutes(s.getMinutes()+Panopto.authCookieTimeoutMinutes),s.setSeconds(s.getSeconds()+1),!(o=a>s)){var r=s.getTime()-a.getTime();if(r<=e.authCookieMessageThreshold)$("#logoutWarningMessage").is(":visible")||e.showAuthExpiryWarning(Math.round(r/1e3)),setTimeout(t,1e3);else{e.hideAuthExpiryWarning();let o=r-e.authCookieMessageThreshold;const n=2147483647;o>n&&(o=n),setTimeout(t,o)}}}o&&0!==window.location.href.indexOf(Panopto.loginUrl)&&(Panopto.features.usePanoptoState?Panopto.Application.setPanoptoState(window.location.href).then((e=>{window.location.href=String.format("{0}?AuthExpired=true&panoptoState={1}",Panopto.loginUrl,e?.panoptoStateId)})):window.location.href=String.format("{0}?AuthExpired=true&ReturnUrl={1}",Panopto.loginUrl,encodeURIComponent(window.location.href)))};t()}},showAuthExpiryWarning:function(e){var t=$("#logoutWarningText"),o=function(){t.text(Panopto.GlobalResources.Site_AuthCookieExpiry_Warning.format(e)),e>0&&e--};o(),this.countdownInterval=setInterval(o,1e3),$("#logoutWarningLink").text(Panopto.GlobalResources.Site_AuthCookieExpiry_StayLoggedIn),$("#logoutWarningMessage").show()},hideAuthExpiryWarning:function(){$("#logoutWarningInfo").hide(),$("#logoutWarningLink").show(),this.countdownInterval&&window.clearInterval(this.countdownInterval),$("#logoutWarningMessage").hide()},wireUpLogoutWarningLink:function(){var e=this,t=$("#logoutWarningLink"),o=$("#logoutWarningInfo");Panopto.Core.UI.Handlers.button(t,(function(){t.hide(),o.text(Panopto.GlobalResources.Site_AuthCookieExpiry_Communicating),o.show(),Panopto.Util.callWebMethod({serviceURL:PanoptoTS.StringHelpers.format("{0}/Services/Data.svc",Panopto.appRoot),methodName:"RefreshAuthCookie",onSuccess:function(t){e.hideAuthExpiryWarning()},onFailure:function(e){o.text(Panopto.GlobalResources.Site_AuthCookieExpiry_SomethingWentWrong),t.text(Panopto.GlobalResources.Site_AuthCookieExpiry_TryAgain),t.show()}})}))},getCreateMenuAvailable:function(){const e=Panopto.user.somewherePermissions[PanoptoCore.Permission.SessionCreate]||Panopto.user.somewherePermissions[PanoptoCore.Permission.SessionCreateScheduledRecording]||Panopto.user.somewherePermissions[PanoptoCore.Permission.SessionCreateScheduledRecordingRestrictedBySetting]&&Panopto.features.schedulingAvailableToCreators||Panopto.user.somewherePermissions[PanoptoCore.Permission.FolderCreateSubFolder]||Panopto.user.somewherePermissions[PanoptoCore.Permission.FolderCreateTopLevel]||Panopto.user.somewherePermissions[PanoptoCore.Permission.PlaylistCreate],t=Panopto.teamsApp?.isFromTeams&&(PanoptoCore.Browser.isMobileOrTablet||Panopto.isIOS);return!Panopto.isHostedMaster&&e&&!t},initCreateMenu:function(e){const t=$("#header .create-menu"),o=this.getCreateMenuAvailable()&&Panopto.isEmbedded&&t.length;t.toggle(!!o).toggleClass("tour-create",!!o),o&&(this.createMenu=Panopto.CreateMenu(t[0],{folderId:"",folderName:"",recorderDownloadAndLaunch:e,variant:"rounded",theme:PanoptoReactComponents.Material.panoptoTheme,resources:Panopto.GlobalResources}))},initUserMenu:function(){const e=Panopto.user.isAuthenticated,t=$("#header .user-avatar");t.toggle(e),e&&t.length&&(Panopto.UserMenu(t[0],{userId:Panopto.user.userId,userFullNameOrKey:Panopto.user.fullNameOrKey,theme:PanoptoReactComponents.Material.panoptoTheme,resources:Panopto.GlobalResources}),Panopto.Core.UI.Components.popup($("#userMenu"),t))},updateState:function(e){for(var t in $.extend(this._state,e),this._state)null!==this._state[t]&&(this._state[t]=Sys.Serialization.JavaScriptSerializer.serialize(this._state[t]));Sys.Application.addHistoryPoint(this._state)},currentlySearching:function(){return!!this._state.query},_handleNavigate:function(e,t){for(var o in this._state=t.get_state(),this._state)if(null!==this._state[o])try{this._state[o]=JSON.parse(this._state[o])}catch(e){}this._navigate(e,t)},add_navigate:function(e){this.get_events().addHandler("navigate",e),e(this,new Sys.HistoryEventArgs(this._state))},remove_navigate:function(e){this.get_events().removeHandler("navigate",e)},_navigate:function(e,t){var o=this.get_events().getHandler("navigate");o&&o(this,t)},add_searchSubmit:function(e){this.get_events().addHandler("searchSubmit",e)},remove_searchSubmit:function(e){this.get_events().removeHandler("searchSubmit",e)},_searchSubmit:function(e){var t=this.get_events().getHandler("searchSubmit");t?t(this,new Panopto.Events.SubmitSearchEventArgs(e)):location.href=Panopto.Application.getBookmarkURL(Panopto.appRoot+"/Pages/Sessions/List.aspx",{query:e})},_handleSearchEntry:function(){var e=this.getSearchText();this._searchSubmit(e||null)},_handleSearchCancel:function(){$get("cancelSearch").blur(),this.setSearchText(""),this._handleSearchEntry()},_searchWatermark:null,setSearchWatermarkText:function(e){this._searchWatermark.set_WatermarkText(e),this.ellipsisWatermarkText()},setSearchText:function(e){this._searchWatermark.set_Text(e)},getSearchText:function(){return this._searchWatermark?this._searchWatermark.get_Text():$get("searchQuery").value},ellipsisWatermarkText:function(){var e=Panopto.Core.ElementHelpers.inputEllipsis($("#searchQuery"),this._searchWatermark._watermarkText,Panopto.GlobalResources.ViewerPlus_TitleEllipsis);e.ellipsied?$("#searchQuery").attr("title",this._searchWatermark._watermarkText):$("#searchQuery").attr("title",Panopto.GlobalResources.Site_SearchHover),this._searchWatermark.set_WatermarkText(e.text)}},Panopto.Application.getBookmarkURL=function(e,t){return Panopto.Core.UrlHelpers.getStateURL(e,t)},Panopto.Application.setPanoptoState=function(e){return Panopto.Core.UrlHelpers.setPanoptoState(e).then((e=>e??null))},Panopto.Application.SetClassName=function(e){var t=$("#content"),o=["content-sessions","content-scheduled","content-processing","content-allFolders","content-usage","content-users","content-groups","content-remoteRecorders","content-licenses","content-remote-recorders","content-oauth-client","content-network-access-rule-list","content-transcription-list"];for(var n of o)t.removeClass(n);o.indexOf(e)>=0&&t.addClass(e)},Panopto.Application.registerClass("Panopto.Application",Sys.Component),Panopto.Application.defaultInstance||new Panopto.Application;
//# sourceMappingURL=file://engfs.d.panopto.com/share/jenkinsbuilds/rel_rtc_15.3.1/15.3.1.00010/_PublishedWebsites/WebUI/Scripts/Panopto/Application.js.map
