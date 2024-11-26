import { useCallback, useEffect } from "react";
import useWordBank from "./useWordBank";
import useValidateForm from "./useValidateForm";

interface UsePreviewProps {
  isPreviewed?: boolean;
  setIsPreviewed?: React.Dispatch<React.SetStateAction<boolean>>;
  preview?: string;
  setPreview?: (text: string) => void;
}

const usePreview = ({
  setIsPreviewed,
  preview,
  setPreview,
}: UsePreviewProps) => {
  const togglePreview = () => {
    setIsPreviewed && setIsPreviewed((isPreviewed) => !isPreviewed);
  };

  const { getOmittedWords } = useWordBank();
  const { countParentheses } = useValidateForm();

  const createBlank = useCallback(() => {
    const count = countParentheses();
    if (count > 0 && count % 2 === 0) {
      const regex = /\(([^)]+)\)/g;

      preview && getOmittedWords(preview.match(regex));
      preview && setPreview && setPreview(preview.replace(regex, "________"));
    }
  }, [countParentheses, preview, setPreview, getOmittedWords]);

  useEffect(() => {
    createBlank();
  }, [preview, createBlank]);

  return { togglePreview, countParentheses };
};

export default usePreview;
