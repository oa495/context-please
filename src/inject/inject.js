window.onload = function() {
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

		console.log(SummaryTool.summarizeFromUrl('https://www.newyorker.com/news/daily-comment/four-truths-about-the-florida-school-shooting'));

		function getAllText() {
			return (article.content).replace(/(<([^>]+)>)/ig,"");
		}

		document.addEventListener('copy', function(e) {
			e.clipboardData.setData('text/plain', getAllText());
			e.preventDefault();
		});
	})();
};