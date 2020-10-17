import { useState, useEffect } from 'react';
import { API_URL } from '../constants/API';

export const useArticles = () => {
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return { article, setArticle, error, setError, loading, setLoading };

};

export default useArticles;