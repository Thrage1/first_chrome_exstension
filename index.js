document.addEventListener("DOMContentLoaded", function(event) {
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
