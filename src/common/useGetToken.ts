import { useEffect, useState } from "react";
import { useLocalStorage } from '@uidotdev/usehooks';

function useGetToken(): string | null {
  const [token, setToken] = useState<string | null>(null);
  const [savedToken, saveToken] = useLocalStorage<string | null>('token');

  useEffect(() => {
    const hash = window.location.hash;

    if (!savedToken && hash) {
      const search = hash.slice(1);
      const searchParams = new URLSearchParams(search);
      const token = searchParams.get('access_token');

      window.location.replace(window.location.pathname);
      if (token) {
        saveToken(token);
        setToken(token);
      }
    }
    setToken(savedToken);
  }, []);

  return token;
}

export default useGetToken;