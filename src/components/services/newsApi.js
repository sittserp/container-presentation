export const getArticles = () => {
  // eslint-disable-next-line max-len
  return fetch('https://newsapi.org/v2/everything?q=blank&apiKey=cef37d1f34ac404c8df4a9d1441dd1ad')
    .then(res => res.json())
    .then(json => json.articles);
}; 
