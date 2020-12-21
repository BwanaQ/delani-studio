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
  

  $('#content1').hover(
    function() {
      $('#inter1').fadeIn();
    }, function() {
      $('#inter1').fadeOut();
    }
  );

  $('#content2').hover(
    function() {
      $('#inter2').fadeIn();
    }, function() {
      $('#inter2').fadeOut();
    }
  );

  $('#content3').hover(
    function() {
      $('#inter3').fadeIn();
    }, function() {
      $('#inter3').fadeOut();
    }
  );

  $('#content4').hover(
    function() {
      $('#inter4').fadeIn();
    }, function() {
      $('#inter4').fadeOut();
    }
  );

  $('#content5').hover(
    function() {
      $('#inter5').fadeIn();
    }, function() {
      $('#inter5').fadeOut();
    }
  );

  $('#content6').hover(
    function() {
      $('#inter6').fadeIn();
    }, function() {
      $('#inter6').fadeOut();
    }
  );

  $('#content7').hover(
    function() {
      $('#inter7').fadeIn();
    }, function() {
      $('#inter7').fadeOut();
    }
  );

  $('#content8').hover(
    function() {
      $('#inter8').fadeIn();
    }, function() {
      $('#inter8').fadeOut();
    }
  );

});

var sendMessage=function(){
  var name =  document.getElementById("name").value;
  var email =  document.getElementById("email").value;
  var message=  document.getElementById("message").value;
  if(name!==""||email!==""||message!==""){
    return(alert(name +" we have received your message. Thank you for reaching out to us."));
  } else {
    return(alert("All fields are required"));
  }
}
