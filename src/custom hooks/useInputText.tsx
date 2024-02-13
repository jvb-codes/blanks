import { useState } from "react";
import { arrayTextType } from "../types/types";

const useInputText = () => {
  const [inputText, setInputText] = useState("");
  const [isNoTitle, setIsNoTitle] = useState(false);
  const [isNoText, setIsNoText] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (title: string, text: arrayTextType) => {
    if (title.length === 0) {
      setIsNoTitle(true);
    }

    if (text.length === 0) {
      setIsNoText(true);
    }

    if (text.length > 0 && title.length > 0) setIsSubmitted(true);
  };
  return {
    inputText,
    setInputText,
    handleInput,
    isSubmitted,
    handleSubmit,
    isNoTitle,
    isNoText,
  };
};

export default useInputText;
