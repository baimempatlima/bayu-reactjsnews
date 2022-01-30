import { NEWS_API_KEY } from "./config";

// export const getBitcoinArticles = async () => {
//   const response = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`);
//   const json = await response.json();
//   return json;
// };
//newsapi.org/v2/everything?q= ${topic}&sortBy=publishedAt&apiKey=

export const getBerita = async (topic) => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${NEWS_API_KEY}&q=${topic}`);
  const json = await response.json();
  return json;
};
