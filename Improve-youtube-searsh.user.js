// ==UserScript==
// @name     Improve-youtube-search
// @description     Improve-youtube-search
// @version  2.0
// @grant    none
// @match    https://*.youtube.com/*
// ==/UserScript==

window.onload = function() {
    let searchInput = document.querySelector('.ytSearchboxComponentInput');
    if (searchInput) {
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (!searchInput.value.includes('after:2004')) {
                    searchInput.value += ' after:2004';
                }
                // Submit the form after modifying the input
                searchInput.closest('form').submit();
            }
        });
    }
};
