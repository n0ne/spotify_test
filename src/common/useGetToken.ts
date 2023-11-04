import { useEffect, useState } from "react";
import { useLocalStorage } from '@uidotdev/usehooks';

function useGetToken(): string | null {
  const [token, setToken] = useState<string | null>(null);
  const [savedToken, saveToken] = useLocalStorage<string | null>('token');

  useEffect(() => {
    const hash = window.location.hash;

    if (!savedToken && hash) {
      const tokenParam = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"));
      let token = tokenParam ? tokenParam.split("=")[1] : null;

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