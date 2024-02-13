import { useState, useRef, useEffect } from "react";

const useAutoHeight = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [scrHeight, setScrHeight] = useState<number>(56);

  const autoHeight = () => {
    if (textAreaRef.current !== null) {
      const currentHeight = textAreaRef.current.scrollHeight;
      setScrHeight(currentHeight);

      if (textAreaRef.current.value.length === 0) {
        setScrHeight(56);
      }
    }
  };

  useEffect(() => {
    autoHeight();
  }, [scrHeight]);

  return { textAreaRef, autoHeight, scrHeight };
};

export default useAutoHeight;
