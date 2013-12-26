var a=require("./src/index.js");

var params={token:"00b870a0fb2c9c9da2e18bef51c3fe0824aacb1911c06de4b1b6b10ba1a8790f",
mid:"14029",
murl:"http://www.tigerdirect.ca/applications/searchtools/item-details.asp?EdpNo=8516565"
}

a.GetLink("linksynergy","LinkGenerator", params,function(err,link){
  console.log(err);
  console.log(link);
});


