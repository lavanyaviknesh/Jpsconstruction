function sendMail() {
var params = {
name: document.getElementById("name").value,
location: document.getElementById("yourlocation").value,
email: document.getElementById("email").value,
mobile: document.getElementById("mobile").value,
message: document.getElementById("message").value,
};
const serviceID = "jjpsconstruction@gmail.com";
const templateID = "template_0oyajwd";
emailjs.send(serviceID, templateID, params)
.then
alert("Your message sent successfully");
}