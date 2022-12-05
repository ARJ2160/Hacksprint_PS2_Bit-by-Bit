import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [errorMsg, setError] = useState<string>('');

  useEffect(() => {
    const abortContr = new AbortController();
    fetch(url, { signal: abortContr.signal, cache: 'force-cache' })
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError('');
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
    return () => abortContr.abort();
  }, [url]);

  return { data, isPending, errorMsg };
};

export default useFetch;
