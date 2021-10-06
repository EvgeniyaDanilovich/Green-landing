/*let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function (e) {
	let user_menu = document.querySelector('.user-header__menu');
	user_menu.classList.toggle('_active');
});

//-----------

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user-header')) {
		let user_menu = document.querySelector('.user-header__menu');
		user_menu.classList.remove('_active');
	}
});

//=====================================================================

$('.header-menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.header-menu__menu').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});

//=====================================================================

function ibg() {
	if (isIE()) {
		var _ibg = document.querySelectorAll("._ibg");

		for (var i = 0; i < _ibg.length; i++) {
			if (_ibg[i].querySelector('img') && _ibg[i].querySelector('img').getAttribute('src') != null) {
				_ibg[i].style.backgroundImage = 'url(' + _ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}

ibg();

if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}*/

"use strict";


