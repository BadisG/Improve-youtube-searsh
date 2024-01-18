window.onload = function() {
    let searchInput = document.querySelector('input#search');
    if (searchInput) {
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (!searchInput.value.includes('after:2004')) {
                    searchInput.value += ' after:2004';
                }
            }
        });
    }
};