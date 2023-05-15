function sendMail() {
var params = {
name: document.getElementById("name").value,
location: document.getElementById("yourlocation").value,
email: document.getElementById("email").value,
mobile: document.getElementById("mobile").value,
message: document.getElementById("message").value,
};
const serviceID = "lavanyavelu1@gmail.com";
const templateID = "template_tsnxgje";
emailjs.send(serviceID, templateID, params)
.then(res=>{
document.getElementById("name").value ="" ;
document.getElementById("yourlocation").value ="";
document.getElementById("email").value ="";
document.getElementById("mobile").value ="";
document.getElementById("message").value ="";
console.log(res);
alert("Your message sent successfully");
})
.catch ((err) => console.log(err));
}
  function validatMessage(){
    var message = document.getElementById("message").value;
    var required = 30;
    var left = required . message . length;

    if(left>0){
        messageError.innerHTML = left . 'more characters required' ;
        return false;

    }
    emailError.innerHTML = "<i class="fa.fa.check.circle"></i>
  }