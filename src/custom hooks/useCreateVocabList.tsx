import { useState } from "react";
import { vocabType } from "../types/types";

const useCreateVocabList = (selectedWords: string, vocabId: number) => {
  const [vocab, setVocab] = useState<vocabType[]>([]);

  const updateVocabList = () => {
    setVocab([...vocab, { id: vocabId, word: selectedWords }]);
  };

  return {
    vocab,
    setVocab,
    selectedWords,
    updateVocabList,
  };
};

export default useCreateVocabList;
