import { useEffect, useState } from "react";

const useGetUserSelection = (
  mouseDownId: number,
  mouseUpId: number,
  text: { id: number; word: string; onVocabList: boolean }[]
) => {
  const [vocabId, setVocabId] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string>("");

  const getSelectedWords = () => {
    const newId = vocabId + 1;
    setVocabId(newId);
    const punctuationRegex = /[,.? ]/;

    const selection = text
      ?.filter((item) => {
        return (
          item.id >= mouseDownId &&
          item.id <= mouseUpId &&
          !punctuationRegex.test(item.word)
        );
      })
      .map((item) => item.word)
      .join(" ")
      .toLowerCase();

    setSelectedWords(selection);
  };

  useEffect(() => {
    getSelectedWords();
  }, [mouseUpId]);

  return { selectedWords, setSelectedWords, vocabId };
};

export default useGetUserSelection;
