'use strict'

window.addEventListener('load', ()=>{

	// console.log("DOM loaded...");

	//data for log in
	var users = [
			{
				user: "lino",
				pass: "123"
			},
			{
				user: "kaneth",
				pass: "321"
			}
	];

	//inputs
	var form = document.querySelector("#form");
	var username = document.querySelector("#username");
	var password = document.querySelector("#password");
	var user_value = "";
	var pass_value = "";

	//label to show if user data is incomplete
	var label_errors = document.querySelector("#errors");
	label_errors.style.display = "none";

	//span to show if user data is correct
	var span = document.createElement('span');


	//focus events
	username.addEventListener('focus', ()=>{
		// console.log("focus on username...");
		user_value = username.value; 
	});
	password.addEventListener('focus', ()=>{
		// console.log("focus on password...");
		pass_value = password.value; 
	});


	//blur events
	username.addEventListener('blur', ()=>{
		// console.log("blur of username...");
		if(username.value.trim() == "" && user_value.trim() == ""){
			console.log("empty username!");
			username.style.background = "#FF7979";
			username.placeholder = "User is required";
		}else{
			username.style.background = "#eee";
		}
	}); 
	password.addEventListener('blur', ()=>{
		// console.log("blur of password...");
		if(password.value.trim() == "" && pass_value.trim() == ""){
			console.log("empty password!");
			password.style.background = "#FF7979";
			password.placeholder = "Password is required";
		}else{
			password.style.background = "#eee";
		}
	});


	//capturing the form		
	form.addEventListener('submit', ()=>{
	console.log("form captured...");
		
		//validating data
		if(username.value.trim().length !== 0 && password.value.trim().length !== 0){

			label_errors.style.display = "none";
			
			if((username.value.trim() == users[0].user && password.value.trim() == users[0].pass) || (username.value.trim() == users[1].user && password.value.trim() == users[1].pass)){
				span.innerHTML = "User data is correct, now you can access...";
				span.style.color = "green";
				span.style.fontSize = "16px";
				label_errors.style.display = "block";
				label_errors.style.marginBottom = "0";
				label_errors.append(span);
				// console.log("has accessed...");

			}else{
				span.innerHTML = "User data is incorrect, you can not access...";
				span.style.color = "red";
				span.style.fontSize = "16px";
				label_errors.style.display = "block";
				label_errors.style.marginBottom = "0";
				label_errors.append(span);
				// console.log("you have not accessed...");
			}


		}else{
			// console.log("user data is incomplete!");
			span.innerHTML = "¡User data is incomplete!";
			span.style.color = "red";
			span.style.fontSize = "16px";
			label_errors.style.display = "block";
			label_errors.style.marginBottom = "0";
			label_errors.append(span);
		}

	});
	

});
