
;(function(window) {

	'use strict';

	var mainContainer = document.querySelector('.main-wrap'),
		openCtrl = document.getElementById('btn-search'),
		closeCtrl = document.getElementById('btn-search-close'),
		searchContainer = document.querySelector('.search'),
		inputSearch = searchContainer.querySelector('.search__input');

	function init() {
		initEvents();	
	}

	function initEvents() {
		openCtrl.addEventListener('click', openSearch);
		closeCtrl.addEventListener('click', closeSearch);
		document.addEventListener('keyup', function(ev) {
			// escape key.
			if( ev.keyCode == 27 ) {
				closeSearch();
			}
		});
	}

	function openSearch() {
		mainContainer.classList.add('main-wrap--hide');
		searchContainer.classList.add('search--open');
		setTimeout(function() {
			inputSearch.focus();
		}, 500);
	}

	function closeSearch() {
		mainContainer.classList.remove('main-wrap--hide');
		searchContainer.classList.remove('search--open');
		inputSearch.blur();
		inputSearch.value = '';
	}

	init();

})(window);