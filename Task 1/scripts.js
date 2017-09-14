function appendChildren() {
	console.log('test');
  var allDivs = document.getElementsByTagName("div"),
  	  divsLength = allDivs.length;

  for (var i = 0; i < divsLength; i++) {
    var newDiv = document.createElement("div");
    decorateDiv(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

// Mock of decorateDiv function for testing purposes
function decorateDiv(div) {}