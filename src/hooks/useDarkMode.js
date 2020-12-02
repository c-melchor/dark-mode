import useLocalStorage from "./useLocalStorage";

const useDarkMode = toggle => {
  const [values, setValues] = useLocalStorage("toggle", toggle);
  return [values, setValues];
};

export default useDarkMode;
