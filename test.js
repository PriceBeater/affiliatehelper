var a=require("./src/index.js");

var params={token:"YOUR_TOKEN_HERE",
mid:"14029",
murl:"http://www.tigerdirect.ca/applications/searchtools/item-details.asp?EdpNo=8516565"
}

a.GetLink("linksynergy","LinkGenerator", params,function(err,link){
  console.log(err);
  console.log(link);
});


