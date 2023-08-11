(function () {
    setServerStatus("unknown");
    var img = document.body.appendChild(document.createElement("img"));
    img.onload = function()
    {
        setServerStatus("online");
    };
    img.onerror = function()
    {
        setServerStatus("offline");
    };
    img.src = "http://myserver.com/ping.gif";
})();
