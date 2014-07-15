var request = require('request')
var querystring= require('querystring')

var affiliatehelper= function() {
  var me={};

  var cj_domains=["www.dpbolvw.net","www.jdoqocy.com","www.anrdoezrs.net","www.kqzyfj.com"];

  me.linksynergy_LinkGenerator=function(params,callback){
    var murl=params["murl"];
    delete params["murl"];

    var url="http://getdeeplink.linksynergy.com/createcustomlink.shtml?"+querystring.stringify(params)+"&murl="+murl;
    request(
    {
          url:url,
          method:"GET",
          timeout:2000,
    }
    , function (error, response, body) {
        if(error){
          callback(error,"");
        }
        if(body.indexOf("click.linksynergy.com")>=0){
          callback(null,body.trim());
        }else{
          callback(new Error(body.trim()),"");
        }
    });
  }


  me.cj_LinkGenerator=function(params,callback){
    var murl=params["murl"];
    var domain_idx=Math.floor(Math.random()*cj_domains.length)
    var afflink="http://"+cj_domains[domain_idx]+"/click-"+params["pid"]+"-"+params["aid"]+"?url="+encodeURIComponent(murl);
    if(callback)
      callback(null,afflink);
    else
      return afflink;
  };


  function _getlink(provider,name,params,callback){
    var funcname=provider+"_"+name;
    if(me[funcname]){
      if(callback){
        me[funcname](params,callback);
      }else{
        return me[funcname](params);
      }
    }else{
      callback(null,"");
    }
  }

	return {
    GetLink: _getlink,
	};
}();

module.exports = affiliatehelper;


String.prototype.trim = function() {
    var str = this.replace(/^\s+/, '');                                                                                                                      
    for (var i = str.length - 1; i >= 0; i--) {
      if (/\S/.test(str.charAt(i))) {
        str = str.substring(0, i + 1);
        break;
      }
    }
    return str;
};


