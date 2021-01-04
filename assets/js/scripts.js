$(document).ready(function() {
  $("#design").click(function() {
    $(".design-showing").toggle();
    $(".design-hidden").toggle();
  });

  $("#development").click(function() {
    $(".development-showing").toggle();
    $(".development-hidden").toggle();
  });

  $("#pm").click(function() {
    $(".pm-showing").toggle();
    $(".pm-hidden").toggle();
  });

  $(".image").each(function(index){
    var i = index+1;
    var content = "#content"+ i;
    var inter = "#inter"+ i;
    $(content).hover(
      function() {
        $(inter).fadeIn();
      }, function() {
        $(inter).fadeOut();
      }
    );
  });
});

var sendMessage=function(){
  var name =  document.getElementById("mce-NAME").value;
  var email =  document.getElementById("mce-EMAIL").value;
  var message=  document.getElementById("mce-MESSAGE").value;
  if(name!==""||email!==""||message!==""){
    return(alert(name +" we have received your message. Thank you for reaching out to us."));
  } else {
    return(alert("All fields are required"));
  }
}

