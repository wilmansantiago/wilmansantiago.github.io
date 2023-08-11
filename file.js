(function () {
 var url = "https://www.tutorialspoint.com/";
 $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,

        success: function(data){
          return data;
        },

        error: function(data){
          console.log(data.responseText);
        }
    });
})();
