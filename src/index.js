var request = require('request')
var querystring= require('querystring')

var affiliatehelper= function() {
  var me={};

  me.linksynergy_LinkGenerator=function(params,callback){
    var url="http://getdeeplink.linksynergy.com/createcustomlink.shtml?"+querystring.stringify(params);
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
  function _getlink(provider,name,params,callback){
    var funcname=provider+"_"+name;
    if(me[funcname]){
      me[funcname](params,callback);
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


