!function(){function e(e,o,n,i,t,a,r,s,l){"1"==i.getLocalObject("userInfo").isLogin&&a.go("manager.home");var m=this;this.session=i,this.COMMONJS=s;m.initTools={imgCode:"",loginName:"",loginPwd:"",loginCode:"",getCode:function(){n.getCode().then(function(e){e.data&&e.data.operCode==r.SUCCESS&&(m.initTools.imgCode="data:image/jpeg;base64,"+e.data.data.code.imgBase64,i.setLocal("sessionId",e.data.data.sessionId))})},keyup:function(e){13==(window.event?e.keyCode:e.which)&&m.initTools.login()},login:function(){var n=e.loginForm;if(n.$invalid){var t=n.$error;for(item in t)return $(t[item][0].$$element[0]).focus(),o.msg("请填写正确的信息")}var r={__login:!0,username:m.initTools.loginName.trim(),password:m.initTools.loginPwd};l.getLogin(r).then(function(e){if("true"==e.data.result){var o=e.data.user;m.initTools.rememberAccount?(i.setLocal("username",m.initTools.loginName.trim()),i.setLocal("rememberAccount",m.initTools.rememberAccount)):(localStorage.removeItem("rememberAccount"),localStorage.removeItem("username")),i.setLocal("sessionId",e.data.sessionid),i.setLocalObject("userInfo",{isLogin:"1",userName:o.loginCode,id:o.id}),"manager.home"==a.current.name?a.reload():a.go("manager.home")}})}},i.getLocal("rememberAccount")?(m.initTools.loginName=i.getLocal("username"),m.initTools.rememberAccount=JSON.parse(i.getLocal("rememberAccount"))):m.initTools.rememberAccount=!1}angular.module("app.loginModule").controller("loginController",e),e.$inject=["$scope","layer","API","session","MD5","$state","TEMPLATEDATA","COMMONJS","JEEAPI"]}();