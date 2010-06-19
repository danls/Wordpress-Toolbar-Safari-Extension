(function() {

	console.log("loaded inject.js");

	if(window !== window.top)
		return;
		
	var showToolbar = function() {
		
		// Load jQuery if needed
		if (typeof jQuery == 'undefined') {
			if (!document.getElementById('jQueryElement')) {
				var jQ = document.createElement('script');
				jQ.type = 'text/javascript';
				var jQueryUrl = safari.extension.baseURI + 'jQuery-1.4.2.min.js';
				jQ.src = jQueryUrl;
				jQ.id = 'jQueryElement';
				console.log('loading: ' + jQueryUrl);
				
				document.body.appendChild(jQ);
			}
		}
		
		// Load the CSS if needed
		if (!document.getElementById('wptoolbarcss')) {
			var cssUrl = safari.extension.baseURI + 'wptb_style.css';
			console.log('appending css: ' + cssUrl);		
			var cssElement = document.createElement('link');
			cssElement.rel = 'stylesheet';
			cssElement.type = 'text/css';
			cssElement.href = cssUrl;
			cssElement.id = 'wptoolbarcss';
			document.body.appendChild(cssElement);
		}

		// Load the toolbar if needed, otherwise run function
		var toolbarUrl = safari.extension.baseURI + 'wptoolbar.js';
		console.log('loading: ' + toolbarUrl);
		var toolbarElement = document.createElement('script');
		toolbarElement.src = toolbarUrl;
		// toolbarElement.id = 'wptoolbarjs';
		document.body.appendChild(toolbarElement);
	}
	
	
	var handleMessage = function(msgEvent) {
		var messageName = msgEvent.name;
		var messageData = msgEvent.message;
		
		console.log('inject message: ' + messageName);
		
		if(messageName === 'show toolbar')
		  showToolbar();
	}

	
	safari.self.addEventListener("message", handleMessage, false);

})();