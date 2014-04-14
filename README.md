Affiliatehelper
=====

Affiliate deep link generate tool.

Support affiliate programs:

* LinkShare (linksynergy)

## Example

    var affiliatehelper=require('affiliatehelper');
    var params={token:"YOUR_TOKEN_HERE",
      mid:"14029",
      murl:"http://www.tigerdirect.ca/applications/searchtools/item-details.asp?EdpNo=8516565"
    }
    
    affiliatehelper.GetLink("linksynergy","LinkGenerator", params,function(err,link){
      console.log(err);
      console.log(link);
    });
