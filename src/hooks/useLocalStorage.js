import { setState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = setState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage(key));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
