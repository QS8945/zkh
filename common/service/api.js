!function(a){function e(e,s,t,r,o,d,n){var m={},c=t.BASE_API_URL,g=t.BASE_HTTP_URL;return a.forEach(s,function(a,s){m[s]=function(s){s=s||{};var m=r.getLocal("sessionId"),i=Date.parse(new Date);if(s.sessionId=JSON.stringify({a:m,b:i,c:n.hex_md5(t.PUBLIC_KEY+m+i)}),"object"!=typeof s)throw new Error("请求参数类型错误");var l={url:g+c+a.url,method:a.method,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};if("get"===a.method.toLowerCase()){var u=$.param(s);u=u?"?"+u:"",l.url+=u}else-1!==["post","put"].indexOf(a.method.toLowerCase())&&(l.data=$.param(s));var f=o.load(2,{shade:[.1,"#fff"]});return e(l).then(function(a){switch(a.data.operCode){case 0:a.message="";break;case 1001:a.message=a.data.data||"连接超时......";break;case 1002:a.message=a.data.data||"配置文件没有找到......";break;case 2e3:a.message=a.data.data||"无数据......";break;case 2001:a.message=a.data.data||"插入操作异常......";break;case 2002:a.message=a.data.data||"删除操作异常......";break;case 2003:a.message=a.data.data||"修改操作异常......";break;case 2004:a.message=a.data.data||"查询操作异常......";break;case 2005:a.message=a.data.data||"重复的唯一索引......";break;case 3e3:a.message=a.data.data||"缺少必要参数......";break;case 3001:a.message=a.data.data||"参数错误......";break;case 4001:a.message="session过期请重新登录",localStorage.removeItem("sessionId"),localStorage.removeItem("userInfo"),localStorage.removeItem("menuDisplayWayDev"),sessionStorage.clear();"login"==d.current.name||d.go("login",{},{reload:!0});break;case 5e3:a.message=a.data.data||"没有权限......";break;case 6e3:a.message=a.data.data||"转换错误......";break;case 7e3:a.message=a.data.data||"支付宝公共错误......";break;default:a.message="系统异常......"}return a.message&&o.msg(a.message),a},function(a){return a.message="系统异常",a.message&&o.msg(a.message),a}).finally(function(){o.close(f)})}}),m}a.module("app.service").factory("API",e),e.$inject=["$http","API_CONFIG","CONSTANT","session","layer","$state","MD5"]}(window.angular);