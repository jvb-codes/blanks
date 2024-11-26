import { useCallback } from "react";
import { useWorkSheetContext } from "./useWorkSheetContext";

const useWordBank = () => {
  const { setWordBank } = useWorkSheetContext();

  const addNumber = useCallback(
    (words: string[]) => {
      const numbered = words.map((item, index) => `${index + 1}.) ${item}`);

      setWordBank(numbered);
    },
    [setWordBank]
  );

  const shuffleWords = useCallback(
    (words: string[] | undefined) => {
      if (words) {
        for (let i = words?.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * i + 1);
          [words[i], words[randomIndex]] = [words[randomIndex], words[i]];
        }

        addNumber(words);
      }
    },
    [addNumber]
  );

  const getOmittedWords = useCallback(
    (omitted: RegExpMatchArray | null) => {
      const regex = /[()]/g;
      const cleaned = omitted?.map((word) => word.replace(regex, ""));

      shuffleWords(cleaned);
    },
    [shuffleWords]
  );

  return { getOmittedWords };
};

export default useWordBank;
