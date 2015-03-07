/*Form Validation scripts, checks, and reset below*/

function validateRequired(el){
if (isRequired(el)) {
	var valid=!isEmpty(el);
	if (!valid) {
		setErrorMessage(el,  'Field is required');
	}
	return valid;
}

return true;
}

function isRequired(el) {
	return ( (( typeof el.required ==='boolean') && el.required) || typeof el.required === 'string');
}

function isEmpty(el){
	return !el.value || el.value === el.placeholder;
}

function validateType(el){
	if (!el.value) return true;
	var type =$el.data('type') || el.getAttribute('type');
	if (typeof validateType[type]==='function') {
		return validateType[type](el);
	} 

	else{
		return true;
	}
}


/*Form Validation scripts/checks end*/



/*The below script enables the addEvent function? See p. 570-1 in Javascript and JQuery by Jon Duckett for reference*/

//Helper function to add an event listener

function addEvent(el, event, callback){
	if ('addEventListener' in el) { 			//If addEventListener works
		el.addEventListener(event, callback, false); //Use it
	} else {									//Otherwise
		el['e'+ event + callback]= callback; 	//Make callback a method el
		el[event+callback]=function(){			//Add second method
			el['e'+event+callback](window.event); //Use it to call prev func
		};
		el.attachEvent('on'+ event, el[event+callback]); //Use attachEvent()

	}			//to call the second function, which then calls the first one
}

//Helper function to remove an event listener

function removeEvent(el, event, callback) {
	if ('removeEventListener' in el) {
		el.removeEventListener(event, callback, false);
	}
	else {
		el.detachEvent('on'+event, el[event+callback]);
		el[event+callback]=null;
		el['e' +event+callback]=null;
	}

}

/*This is the end of the Utilities File/addEvent function script*/ 


/*The below script accepts or rejects the values entered for first and last names. If the first and last name exceeed a value of two characters it returns a value of "true". If they do not meet this minimum it returns a value of "false".
*/

var first_name= document.getElementById("first_name");  	
var last_name= document.getElementById("last_name");

if (first_name.length <=2) { 					//If the length of variable with the Id "first_name" is less than or equal to 2, it is rejected. 
	target.className="fail";					
	document.write("Your first name must be at least two characters.") //If it is rejected; it will print this statement.
};

else {target.className="pass"};					//If the length of the variable "first_name" is greater than 2, it is accepted.

if (last_name.length <=2){						//If the length of the variable "last_name" is less than or equal to 2, it is rejected. 
	target.className="fail";
	document.write("Your last name must be at least two characters.") //If it is rejected, it will print this statement.
};
	
else {target.className="pass"};					//If the length of the variable "last_name" is greater than 2, it is accepted.


/*End of script accepting or rejecting first and last name form value fields.*/

/*The below script checks the value/length of the username. If it is greater than 7 characters, it accepts the user's entry. Otherwise, it rejects it.*/

function checkUsername(){
var username=document.getElementById("username")

if (username.value.length <=6){
	document.write("Your username must be at least 7 characters.");
}

else {target.className="pass"};
}

elUserName.onsubmit=checkUsername; //Calls  the function to run when the form is submitted? Is this necessary or will the scripts run through for the form and be sufficient?





/*The below script enables password storage and verification. (??)
	+ Password and Password confirmation fields must match.
	+Password must be greater than 8 characters and inlude at least 1 number*/
function checkPassword(){

	var password= document.getElementById('password');
	var passwordConfirm= document.getElementById('conf-password');
	function setErrorHighlighter(e){
		var target= e.target || e.srcElement;
			if (target.value.length<8) && target.value.search(/(0-9)+/)){
			target.className='fail';
			}
	
			else {
			target.className='pass';
			}
		}


	
	 function removeErrorHighlighter(e) {
	 	var target=e.target || e.srcElement;
	 	if (target.className ==='fail'){
	 		target.className='';
	 	}

	 } 

	 function passwordsMatch(e) {
	 	var target= e.target || e.srcElement;
	 	if ((password.value===target.value) && (target.value.length >=8) && (target.value.search(/(0-9)+/)){
	 		target.className='pass';
	 	}
	 	else{
	 		target.className='fail';
	 	}

	 }

	addEvent (password,'focus', removeErrorHighlighter);
	addEvent (password, 'blur', setErrorHighlighter);
	addEvent (passwordConfirm,'focus', removeErrorHighlighter);
	addEvent (passwordConfirm, 'blur', passwordsMatch);
}());

elPassword.onsubmit=checkPassword;  //Calls the checkPassword function to run when the user presses submit? Is this redundant?



/*End of the password storage and verification script*/	



/*The below function(s) create the radio button options for the "What Is Your Favorite Color? Question on the "Create An Account" Page*/
function() {
	
	var form, options, other, otherText, hide;

	form =document.getElementById('favorite_color');
	options=form.elements.pick_color;
	other = document.getElementById('other');
	otherText = document.getElementById('other_text');
	otherText.className='hide';


	for (var color_picked=[0]; color_picked<options.length; color_picked++) {

		addEvent(options[i],'click', radioChanged);

	}

	fuctionradioChanged()
	{
		hide=other.checked ?'': 'hide';
		otherText.className=hide;
		if(hide){
			otherText.value='';

		}

	}
}());

/*End of the functions for the radio buttons on the "What is Your Favorite Color?" Question on the "Create an Account" Page*/

/*The script below changes background color of the site's page. This needs to be integrated with the radio button color choices so that whichever color the user chooses is the color the background is changed to. Example: selecting "chartreuse" will change the background to a chartreuse color.*/



var color_picked = document.getElementById($("form input[type='radio']:checked").val()); //Gets the value of a checked radio button

if (color_picked="chartreuse"){
	document.body.style.backgroundColor="#88D12E";
}
	else (color_picked="red"){
		document.body.style.backgroundColor="#D4171A"
	};

	else (color_picked="blue"){
		document.body.style.backgroundColor="#2705ED"

	};

	else (color_picked="purple"){
		document.body.style.backgroundColor="5DC291"
	};

/*
            function chartreuseBackground(){
            	document.body.style.backgroundColor="#88D12E";
			 	}

			 	chartreuseBackground()

            function redBackground(){
                document.body.style.backgroundColor="#D4171A";
                }

                 redBackground()
            	
            function blueBackground(){
                document.body.style.backgroundColor="#2705ED";
            	}
            	blueBackground()

            function purpleBackground(){
            	document.body.style.backgroundColor="#5DC291";
           		}	
            	purpleBackground()




        document.write("<a href="#" onclick=redBackground()>Make Me Red</a>");


        document.write("<a href="#" onclick=chartreuseBackground()>Make Me Chartreuse</a>");

        */
addEvent(form, 'submit',function(e)) {
	document.write("Thank you for creating an account! Your Account information is listed below:");

	var first_name = getElementById("first_name");
	var last_name = getElementById("last_name");
	var email = getElementById("email");
	var username = getElementById("username");
	var password = getElementById("password");

	document.write(first_name+"<br></br>"+last_name+"<br></br>"+email+"<br></br>"+username+"<br></br>"+password+"<br></br>")

return false ;

}


// var form= getElementById('create_account')

// form.addEventListener(submit, )

//PASSWORD VERIFICATION TIPS FROM CLASS FEB 28:
//attach single submit event to the form 

/*Example:

var ourForm = document.getElement();

ourForm.addEventListener('submit', 'validate');

function validate (){}
//loop through all the elements
// manually iterating over each elements

//validate first name
//function checkLength(string, length_to_check) {
	
	//functions can have return values

	if (string.length >= length_to_check)

	{return true;}

	else {return false;}

	var message

	//message += 'Your last name is blank';
	// alertArea.innerHTML = message;

	there is a way to write code that allows you to check the length of multiple elements so you can reuse chunks of code rather than writing a separate function for each separate task
	ß
}

//checkLength();

