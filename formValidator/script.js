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
	small.innerText = message;
}
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function checkEmail(input) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, `Email is not valid`);
	}
}
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.substr(1);
}

function checkPasswords(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, `Passwords do not match`);
	}
}

function checkRequired(inputArr) {
	inputArr.forEach(function(input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
	} else if (input.value.length > max) {
		showError(input, `${getFieldName(input)} must be less than ${max}} characters`);
	}
}
//Event Listener
form.addEventListener('submit', function(e) {
	e.preventDefault();
	checkRequired([
		username,
		email,
		password,
		password2
	]);
	checkLength(username, 5, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswords(password, password2);
});
