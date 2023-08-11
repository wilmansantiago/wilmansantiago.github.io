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
        window.location.href = "https://performancemanager8.successfactors.com/xi/ui/peopleprofile/pages/index.xhtml?bplte_company=bancolombiT4&_s.crb=1aRVVxs0pl5afrbjBSV15R3I0dwMf%2f9Kg8r3AFFcrWw%3d#blockView/blockId/block5390";

   } else {
      alert("Offline");
        window.location.href = "https://performancemanager8.successfactors.com/xi/ui/peopleprofile/pages/index.xhtml?bplte_company=bancolombiT4&_s.crb=1aRVVxs0pl5afrbjBSV15R3I0dwMf%2f9Kg8r3AFFcrWw%3d#blockView/blockId/block5390";   
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
