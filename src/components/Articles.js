import React, { useEffect } from 'react';

import { API_URL } from '../constants/API';
import useArticles from '../hooks/useArticles';

const Articles = ({ page }) => {
  const { article, setArticle, loading, setLoading, error, setError } = useArticles();

  useEffect(() => {
    const fetchArticle = () => {
      fetch(`${API_URL}${page}`)
        .then((res) => {
          if (!res.ok) {
            setError(true);
          }
          else {
            res.json()
              .then((data) => {
                setArticle(data);
              })
              .finally(() => {
                setLoading(false);
              });
          }
        });

    };
    fetchArticle();
  }, []);

  return (
    <React.Fragment>
      <div className="pagination">
        <button data-testid="page-button" key="page-button-1">1</button>
        <button data-testid="page-button" key="page-button-2">2</button>
      </div>
      <ul className="results">
        {Object.entries(article).map((item, idx) => {
          console.log(item, idx);
          return (
            <li key={idx}>{item.title}</li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Articles;
