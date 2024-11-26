import { useCallback } from "react";
import { useWorkSheetContext } from "./useWorkSheetContext";

const useValidateForm = () => {
  const { preview, textareaValue } = useWorkSheetContext();

  const errorMessages = {
    previewEmpty: "Please type or paste some text first.",
    oddNumOfParentheses:
      "Make sure to enclose the words that you want to omit with parentheses.",
    wordsNotOmitted:
      "No blanks have been created. Please omit words from the text first.",
  };

  const countParentheses = useCallback(() => {
    let count = 0;
    const regex = /[()]/g;
    const parentheses = textareaValue?.match(regex);

    parentheses?.forEach(() => {
      count += 1;
    });
    return count;
  }, [textareaValue]);

  const validateOmission = () => {
    const numOfParentheses = countParentheses();
    return numOfParentheses === 0;
  };

  const validateParentheses = () => {
    const numOfParentheses = countParentheses();
    return numOfParentheses % 2 !== 0;
  };

  const validatePreviewLength = useCallback(() => {
    return preview?.length === 0;
  }, [preview]);

  return {
    validateOmission,
    validateParentheses,
    validatePreviewLength,
    countParentheses,
    errorMessages,
  };
};

export default useValidateForm;
