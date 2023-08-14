function ping(){
   var pingserver = new Image();
   pingserver.src = "http://www.cristalab.com/images/header/logo.png";

   if (pingserver.height>0) {
      alert("Online");
   } else {
      alert("Offline");
   }
}
ping();
