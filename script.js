$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    var formData = {
      't': $('input[name=t]').val()
    };
    $.ajax({
      // type: "movie"
      url: "http://www.omdbapi.com/?",
      data: formData,
      dataType: "json", 
      success: function(response) {
        $("#movie-title").html(response.Title);
        $("#poster").attr("src" , response.Poster);
        console.log(response); 
        }     
    });
  });
});