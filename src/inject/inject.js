(function() {
	var loc = document.location;
	var uri = {
	  spec: loc.href,
	  host: loc.host,
	  prePath: loc.protocol + "//" + loc.host,
	  scheme: loc.protocol.substr(0, loc.protocol.indexOf(":")),
	  pathBase: loc.protocol + "//" + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf("/") + 1)
	};
	var documentClone = document.cloneNode(true); 
	var article = new Readability(uri, documentClone).parse();
	debugger;

	function getAllText() {

	}

	function getContext() {

	}

	function getPageSummary() {

	}

	document.addEventListener('copy', function(e) {
	  var textToPutOnClipboard = (article.content).textContent;
	  debugger;
	  console.log(textToPutOnClipboard, article.content.replace(/(<([^>]+)>)/ig,""));
	  e.clipboardData.setData('text/plain', textToPutOnClipboard);
	  e.preventDefault();
	});
})();
