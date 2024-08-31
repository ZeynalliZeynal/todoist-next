import { useEffect, useState } from "react";

export const useLocalStorage = (
  initialState: string | boolean | number,
  key: string,
) => {
  const [value, setValue] = useState(() => {
    const storageValue = localStorage.getItem(key);
    return storageValue ? JSON.parse(storageValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
