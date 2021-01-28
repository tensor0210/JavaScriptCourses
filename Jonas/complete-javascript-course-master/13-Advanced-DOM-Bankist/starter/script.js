'use strict';

///////////////////////////////////////
// Modal window
const header = document.querySelector('header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function() {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = function(e) {
	e.preventDefault();
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
	'We use Coookies for improves functionality and analytics <button class="btn btn--close-cookie">Got it</button>';

header.append(message);

//Delete message
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
	message.remove();
});

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');
const logo = document.querySelector('.nav__logo');
