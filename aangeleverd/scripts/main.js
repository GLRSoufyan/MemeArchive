import dataService from "./dataService.js";
import uiRenderer from "./uiRenderer.js";

let allMemes = [];

function filterMemes(memes, filters) {
    return memes.filter(meme => {
        const matchCategory =
            filters.category === "all" || meme.category === filters.category;

        const matchYear =
            filters.year === "all" || meme.year === parseInt(filters.year);

        const matchSearch =
            meme.title.toLowerCase().includes(filters.search.toLowerCase());

        return matchCategory && matchYear && matchSearch;
    });
}

const setupFilters = () => {
    const categoryFilter = document.querySelector('#category-filter');
    const yearFilter = document.querySelector('#year-filter');
    const searchInput = document.querySelector('#search-input');
    
    const applyFilters = () => {
        const filtered = filterMemes(allMemes, {
            category: categoryFilter?.value || 'all',
            year: yearFilter?.value || 'all',
            search: searchInput?.value || '',
        });
        
        console.log(filtered);
        uiRenderer(filtered);
    };

    categoryFilter?.addEventListener('change', applyFilters);
    yearFilter?.addEventListener('change', applyFilters);
    searchInput?.addEventListener('input', applyFilters);
};

const initApp = async () => {
    allMemes = await dataService();
    
    uiRenderer(allMemes);
    setupFilters();
};

initApp();