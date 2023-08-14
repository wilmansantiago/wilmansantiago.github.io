function ping(extServer){
	var ImageObject = new Image();
	ImageObject.src = extServer;
	ImageObject.onload = function(){
	
	 window.location.href = "https://performancemanager8.successfactors.com/xi/ui/peopleprofile/pages/index.xhtml?blockId=block5390";	
	}
	ImageObject.onerror = function(){
	    alert("Tu debes esta conectado a una VPN...");
	}
}
 
ping('https://lbcldwqcie04.bancolombia.corp/sap/public/bc/ur/Login/assets/corbu/sap_logo.png')
