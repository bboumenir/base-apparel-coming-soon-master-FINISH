

function myFunction(width) {

	var x = document.getElementById("image-big");
	var y = document.getElementById("image-small");
	var z = document.getElementById("logo");
	var a = document.getElementById("logo1");

	if (width.matches) {
		x.style.display = "none";
		y.style.display = "initial";
		z.style.display = "none";
		a.style.display = "initial";
		
	} else {
       x.style.display = "block";
       y.style.display = "none";
       z.style.display = "initial";
	   a.style.display = "none";
	}
};

var width = window.matchMedia("(max-width : 800px)")
myFunction(width);
width.addListener(myFunction)




document.querySelector('#myForm').addEventListener('submit' , function (event) {
    
	var email = document.querySelector('#mail')
	var y = document.getElementById("error");
    var z = document.getElementById("logo-error")
    var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

	if (!email.value.match(regEx)) {
		y.style.display = "initial";
        z.style.display = "initial";
        email.style.border = "solid red";
		event.preventDefault()
	}
})


