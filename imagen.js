function ping(extServer){
	var ImageObject = new Image();
	ImageObject.src = extServer;
	ImageObject.onload = function(){
		    alert("Online");
	}
	ImageObject.onerror = function(){
	    alert("Online");
	}
}
 
ping('https://lbcldwqcie04.bancolombia.corp/sap/public/bc/ur/Login/assets/corbu/sap_logo.png')
