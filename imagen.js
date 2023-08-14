function ping(){
   var pingserver = new Image();
   pingserver.src = "https://lbcldwqcie04.bancolombia.corp/sap/public/bc/ur/nw5/themes/~cache-20230413060535/UR/baseLib/sap_goldreflection/img/scrollbar/ico12_v_next.gif";

   if (pingserver.height>0) {
      alert("Online");
   } else {
      alert("Offline");
   }
}
ping();
