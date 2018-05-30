document.addEventListener("DOMContentLoaded",function(){
var open = document.getElementById('open');
open.addEventListener("click", function(event) {
  event.preventDefault();
  var links = document.getElementsByTagName('a');
  // debugger
  for(var i = 0; i < links.length; i++){
    var link = links[i];
    chrome.tabs.create({url: link.href, selected: false})
    console.log(link);
    // link.click()
    // links[i].click();
    // console.log(links[i]);
  }
  console.log("DOM fully loaded and parsed");
});
});
// document.addEventListener("DOMContentLoaded", function open(event) {
//   event.preventDefault();
//   var links = document.getElementsByTagName('a');
//   // debugger
//   for(var i = 0; i < links.length; i++){
//     var link = links[i];
//     chrome.tabs.create({url: link.href, selected: false})
//     console.log(link);
//     // link.click()
//     // links[i].click();
//     // console.log(links[i]);
//   }
//   console.log("DOM fully loaded and parsed");
// });
