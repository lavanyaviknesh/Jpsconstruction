function sendMail() 
				{
			var templateParams = {
				name: document.getElementById("name").value,
				location: document.getElementById("yourlocation").value,
				email: document.getElementById("email").value,
				mobile: document.getElementById("mobile").value,
				message: document.getElementById("message").value,
			};
			emailjs.init("HVA9yqdwWWcIxL5_k");
			emailjs.send("service_wacsyd4","template_0oyajwd", templateParams).then(
        res=>{
    document.getElementById("name").value ="" ;
    document.getElementById("email").value ="";
    document.getElementById("message").value ="";
    console.log(res);
    alert("Your message sent successfully");
    })
    .catch ((err) => console.log(err));
    alert("Your message sent successfully");
				}

	
        