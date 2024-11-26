import { createContext, PropsWithChildren, useState } from "react";

interface WorkSheetType {
  textareaValue: string;
  setTextareaValue: (text: string) => void;
  preview: string;
  setPreview: (text: string) => void;
  wordBank: string[] | undefined;
  setWordBank: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  isPreviewed: boolean;
  setIsPreviewed: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export const WorkSheetContext = createContext<WorkSheetType | undefined>(
  undefined
);

export const WorkSheetContextProvider = ({ children }: PropsWithChildren) => {
  const [textareaValue, setTextareaValue] = useState("");
  const [preview, setPreview] = useState("");
  const [wordBank, setWordBank] = useState<string[] | undefined>();
  const [isPreviewed, setIsPreviewed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <WorkSheetContext.Provider
      value={{
        textareaValue,
        setTextareaValue,
        preview,
        setPreview,
        wordBank,
        setWordBank,
        isPreviewed,
        setIsPreviewed,
        error,
        setError,
      }}
    >
      {children}
    </WorkSheetContext.Provider>
  );
};
