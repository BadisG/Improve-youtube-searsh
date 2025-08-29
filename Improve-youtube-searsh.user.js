// ==UserScript==
// @name         Improve-youtube-search
// @description  Improve YouTube search with customizable query modifier
// @version      2.3
// @grant        none
// @match        https://*.youtube.com/*
// ==/UserScript==

// =======================
// 🔧 CONFIGURATION
// =======================
const SEARCH_MODIFIER = "after:2004";

function addSearchListener() {
    const searchInput = document.querySelector('input#search, .ytd-searchbox-spt, [name="search_query"]');

    if (searchInput && !searchInput.hasAttribute('search-listener-added')) {
        searchInput.setAttribute('search-listener-added', 'true');
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();

                let currentValue = searchInput.value.trim();
                if (SEARCH_MODIFIER) {
                    const modifiers = SEARCH_MODIFIER.split(/\s+/); // split into tokens
                    modifiers.forEach(mod => {
                        if (!currentValue.includes(mod)) {
                            currentValue += " " + mod;
                        }
                    });
                }

                searchInput.value = currentValue.trim();
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

observer.observe(document.body, {
    childList: true,
    subtree: true
});
