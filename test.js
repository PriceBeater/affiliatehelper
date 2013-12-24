var a=require("./src/index.js");

var params={token:"your token",
mid:"560",
murl:"http://www.merchant.com/productpage?prodid=1224231&buylink=yes"
}

a.GetLink("linksynergy","LinkGenerator", params,function(err,link){
  console.log(err.message);
  console.log(link);
});


