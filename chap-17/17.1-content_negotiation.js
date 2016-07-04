var types = ["text/plain","text/html","application/json","application/rainbows+unicorns"];

function getResponse(type) {
  var req = new XMLHttpRequest();
  req.open('GET', "http://eloquentjavascript.net/author", true);
  req.setRequestHeader("Accept", type);
  req.addEventListener('load', function() {
  	console.log(type + "\n \n" + req.responseText + "\n\n");
  });
  req.send(null);
}

types.forEach(function(type) {
	try {
  		getResponse(type);
    }
  	catch(err) {
    	console.log("Error: " + err);
    }
});
