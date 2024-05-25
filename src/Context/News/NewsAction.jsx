export const fetchNews = async (topic) => {
    console.log('text',topic)
    const response  = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2024-04-19&sortBy=publishedAt&apiKey=74c3484590d6494eb49bf33efef9f84e`);
    const data = await response.json();
    console.log(data)
    return data.articles;
    console.log(data)
}