'use strict';

const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error Message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = 'message';
}
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
//Event Listener
form.addEventListener('submit', function(e) {
	e.preventDefault();

	if (username.value === '') {
		showError(username, 'Username is required');
	} else {
		showSuccess(username);
	}
});
