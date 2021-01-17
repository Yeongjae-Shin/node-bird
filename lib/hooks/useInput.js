import { useState, useCallback } from "react";

const useInput = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  return [value, handler];
};

export default useInput;
