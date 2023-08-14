function ping(extServer){
	var ImageObject = new Image();
	ImageObject.src = extServer;
	ImageObject.onload = function(){
		console.log("Servidor en Linea !");
	}
	ImageObject.onerror = function(){
		console.log("Servidor fuera de linea !");
	}
}
 
ping('https://lbcldwqcie04.bancolombia.corp/sap/public/bc/ur/Login/assets/corbu/sap_logo.png')
