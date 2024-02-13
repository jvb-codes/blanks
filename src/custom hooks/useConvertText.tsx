import { useEffect, useState } from "react";
import { arrayTextType } from "../types/types";

const useConvertText = (
  inputText: string,
  mouseUpId?: number,
  mouseDownId?: number
) => {
  const [text, setText] = useState<arrayTextType>([]);
  const regex = /\s+|\b/;

  const convertText = () => {
    if (inputText.length > 0) {
      const initialText = inputText.split(regex).map((item, index) => {
        return { id: index + 1, word: item, onVocabList: false };
      });

      setText(initialText);
    }
  };

  useEffect(() => {
    convertText();
  }, [inputText]);

  const updateText = () => {
    const update = text.map((item) => {
      if (
        mouseDownId &&
        mouseUpId !== undefined &&
        item.id >= mouseDownId &&
        item.id <= mouseUpId
      ) {
        return { ...item, onVocabList: true };
      }
      return item;
    });

    setText(update);
  };

  useEffect(() => {
    convertText();
  }, []);

  return { text, setText, updateText };
};

export default useConvertText;
