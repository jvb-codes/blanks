import { arrayTextType, vocabType } from "../types/types";
import { saveAs } from "file-saver";

const useSaveData = () => {
  const saveData = (title: string, text: arrayTextType, vocab: vocabType[]) => {
    const textData = text
      .map((item) => {
        if (item.onVocabList) {
          return "_____";
        }
        return item.word;
      })
      .join(" ")
      .replace(/\s+([^\w\s])/g, "$1");

    const vocabData = vocab.map((item) => `${item.word}\n`).join("");

    const data = new Blob(
      [
        title,
        "\n",
        "\n",
        textData,
        "\n",
        "\n",
        "Vocabulary",
        "\n",
        "\n",
        vocabData,
      ],
      {
        type: "text/plain;charset=utf-8",
      }
    );

    saveAs(data, title);
  };

  return {
    saveData,
  };
};

export default useSaveData;
