const customFetch = async (url, {body, ...customfig}) => {
    try {
        const response = await fetch(url, config);
    } catch (error) {
        console.error('error');
    }
};

const getPosts = (page, limit) => {
    return customFetch();
}