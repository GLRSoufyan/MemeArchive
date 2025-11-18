const dataService = async () => {
    try {
        const response = await fetch('../aangeleverd/data/data.json');
        
        if (!response.ok) {
            throw new Error(`error! reason: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting memes: ', error);
        return [];
    }
};

export default dataService;