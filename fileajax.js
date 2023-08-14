 function pingURL() {
         // Getting the URL from the User
         var URL = "https://lbcldwdase04.apps.bancolombia.corp:1443/sap/bc/webdynpro/sap/hrmss_team_detail?sap-language=ES&sap-wd-configId=ZHRMSS_TEAM_DETAIL_NEW#";
         var settings = {
            // Defining the request configuration
            cache: false,
            dataType: "jsonp",
            crossDomain: true,
            url: URL,
            method: "GET",
            timeout: 5000,
            headers: {accept: "application/json", "Access-Control-Allow-Origin": "*",},

            // Defines the response to be made
            // for certain status codes
            statusCode: {
               200: function (response) {
                  document.getElementById("outputDiv").innerHTML="<h3 style='color:green'>Status 200: Page is up!";
               },
               400: function (response) {
                  document.getElementById("outputDiv").innerHTML="<h3 style='color:red'>Status 400: Page is down.</h3>";
               },
               0: function (response) {
                  document.getElementById("outputDiv").innerHTML="<h3 style='color:red'>Status 0: Page is down.</h3>";
               },
            },
         };
         // Sends the request and observes the response
         $.ajax(settings).done(function (response) {
            console.log(response);
         })
         .fail(function (response) {
            console.log("Error" + response);
         });
      };
 pingURL();
