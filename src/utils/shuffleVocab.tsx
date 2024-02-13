import { vocabType } from "../types/types";

const handleShuffleVocab = (
  vocab: vocabType[],
  setVocab: React.Dispatch<React.SetStateAction<vocabType[]>>
) => {
  const shuffledList = [...vocab];
  let i = shuffledList.length;

  while (i > 0) {
    const randomIndex = Math.floor(Math.random() * i);
    i--;

    const currentItemLoop = shuffledList[i];
    shuffledList[i] = shuffledList[randomIndex];
    shuffledList[randomIndex] = currentItemLoop;
  }
  setVocab(shuffledList);
};
export default handleShuffleVocab;
