(function () {
    // create dialog elements
    const dialog = document.createElement("ui5-dialog");
    const content = document.createElement("div");
    const footer = document.createElement("footer");
    const footerBtn = document.createElement("ui5-button");

     var pingserver = new Image();
   pingserver.src = "https://lbcldwqase04.bancolombia.corp/sap/bc/webdynpro/sap/zwd_homepage_mashup_sf#";

   if (pingserver.height>0) {
      alert("Online");
        window.location.href = "https://performancemanager8.successfactors.com/xi/ui/payroll/pages/PayStatement.xhtml?bplte_company=bancolombiT4&_s.crb=Plq1mCfJTZQJCHgjc8Sq%252b3iDu2qPpaTvMGEBIh4SJwU%253d&mashup=true&encodedJSONEvent=UHJ1ZWJhIGRlIGNvbmV4aW9u&userId=MDAwMTc1Mjk%3D&legalEntityId=00000001&eou=true";
   } else {
      alert("Offline");
       // set attributes
    dialog.setAttribute("header-text", "You should are connected to VPN");
    footer.setAttribute("slot", "footer");
    // content
    content.innerHTML = "Dear User, You should are connected to VPN";
    content.style.padding = "1rem";
    // footer btn
    footerBtn.onclick = () => dialog.close();
    footerBtn.innerHTML = "Close";
    // append elements
    dialog.appendChild(content);
    dialog.appendChild(footer);
    footer.appendChild(footerBtn);
    document.body.appendChild(dialog);
    // open dialog
    dialog.show(); 
   }
   
})();
