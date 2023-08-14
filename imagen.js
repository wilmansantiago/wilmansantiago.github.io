function ping(extServer){
	var ImageObject = new Image();
	ImageObject.src = extServer;
	ImageObject.onload = function(){
		    alert("Online");
	 window.location.href = "https://performancemanager8.successfactors.com/xi/ui/peopleprofile/pages/index.xhtml?bplte_company=bancolombiT4&_s.crb=1aRVVxs0pl5afrbjBSV15R3I0dwMf%2f9Kg8r3AFFcrWw%3d#blockView/blockId/block5390";	
	}
	ImageObject.onerror = function(){
	    alert("Tu debes esta conectado a una VPN...");
	}
}
 
ping('https://lbcldwqcie04.bancolombia.corp/sap/public/bc/ur/Login/assets/corbu/sap_logo.png')
