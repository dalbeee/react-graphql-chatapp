import { useEffect, useState } from "react";

const prefix = "loading-";

interface Props {
  (key: string, initialValue?: object): any;
}

const useLocalStorage: Props = (key, initialValue) => {
  const combinedKey = prefix + key;

  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return;

    const getItems = localStorage.getItem(combinedKey);
    if (getItems) return JSON.parse(getItems);
    if (typeof initialValue === "function") return initialValue();
    else return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(combinedKey, JSON.stringify(value));
  }, [combinedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
