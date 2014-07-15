var a=require("./src/index.js");

var params={token:"YOUR_TOKEN_HERE",
mid:"14029",
murl:"http://www.tigerdirect.ca/applications/searchtools/item-details.asp?EdpNo=8516565"
}

a.GetLink("linksynergy","LinkGenerator", params,function(err,link){
  console.log(err);
  console.log(link);
});


var params={pid:"YOUR_PID_HERE",
aid:"10592396",
murl:"http://www.newegg.ca/Product/Product.aspx?Item=9SIA41F1HH9399"
}

a.GetLink("cj","LinkGenerator", params,function(err,link){
  console.log(err);
  console.log(link);
});


var result=a.GetLink("cj","LinkGenerator", params);
console.log(result);

