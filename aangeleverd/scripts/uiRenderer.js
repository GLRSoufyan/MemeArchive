const uiRenderer = (memes, containerSelector = '#meme-container') => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = memes.map(meme => `
        <div class="meme-card" data-id="${meme.id}">
            <img class="MemeImg" src="./img/${meme.image}" alt="${meme.title}">
            <div class="meme-content">
                <h3 class="AddMargin">${meme.title}</h3>
                <span class="year-badge">${meme.year}</span>
                <p class="AddMargin">${meme.description}</p>
                <span class="category-tag">${meme.category}</span>
            </div>
        </div>
    `).join('');
};

const filterMemes = (memes, { category = 'all', year = 'all', search = '' }) => {
    return memes.filter(meme => {
        const matchesCategory = category === 'all' || meme.category === category;
        const matchesYear = year === 'all' || meme.year === parseInt(year);
        const matchesSearch = search === '' || 
            meme.title.toLowerCase().includes(search.toLowerCase()) ||
            meme.description.toLowerCase().includes(search.toLowerCase());
        
        return matchesCategory && matchesYear && matchesSearch;
    });
};

export default uiRenderer;
export { filterMemes };