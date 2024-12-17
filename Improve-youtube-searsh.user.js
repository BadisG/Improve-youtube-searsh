// ==UserScript==
// @name     Improve-youtube-search
// @description     Improve-youtube-search
// @version  2.1
// @grant    none
// @match    https://*.youtube.com/*
// ==/UserScript==

function addSearchListener() {
    // Using multiple possible selectors for better compatibility
    const searchInput = document.querySelector('input#search, .ytd-searchbox-spt, [name="search_query"]');

    if (searchInput && !searchInput.hasAttribute('search-listener-added')) {
        searchInput.setAttribute('search-listener-added', 'true');
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (!searchInput.value.includes('after:2004')) {
                    searchInput.value += ' after:2004';
                }
                searchInput.closest('form').submit();
            }
        });
    }
}

// Initial execution
addSearchListener();

// Use MutationObserver to handle dynamic content loading
const observer = new MutationObserver(() => {
    addSearchListener();
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
    childList: true,
    subtree: true
});
