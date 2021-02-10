import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import Axios from '../../node_modules/axios/index';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160',
// }

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  const [tempResponse, setTempResponse] = useState(null);

  useEffect(() => {
    
    const fetchDta = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;

        const response = await Axios.get(
          `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ce2c1b4dfa374e84a26408f54d574aa6`,
        );
        setArticles(response.data.articles);

        setTempResponse(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchDta();

  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
      <NewsListBlock>
        {articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
  );
};

export default NewsList;
