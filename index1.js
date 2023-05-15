function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "lavanyavelu1@gmail.com";
    const templateID = "template_tsnxgje";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  

  

$('.palceholder').click(function() {
  $(this).siblings('input').focus();
});
$('.form-control').focus(function() {
  $(this).siblings('.palceholder').hide();
});
$('.form-control').blur(function() {
  var $this = $(this);
  if ($this.val().length == 0)
    $(this).siblings('.palceholder').show();
});
$('.form-control').blur();