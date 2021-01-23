'use strict';
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
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
function checkInputLength(input, min, max) {
	if (input.value.length < min) {
		showError(input, `${getFieldName(input)} must be  atleast ${min} characters`);
	} else if (input.value.length > max) {
		showError(input, `${getFieldName(input)} must be ${max} characters`);
	} else {
		showSuccess(input);
	}
}

function checkEmail(input) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(input.value)) {
		showSuccess(input);
	} else {
		showError(input, `Email is not valid`);
	}
}
function checkPassword(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords do not match');
		showError(input1, 'Passwords do not match');
	}
}
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//Show input Error message;
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}
form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkRequired([
		username,
		email,
		password,
		password2
	]);
	checkInputLength(username, 5, 15);
	checkInputLength(password, 8, 20);
	checkEmail(email);
	checkPassword(password, password2);
});
