import { useState } from "react";
import { vocabType, arrayTextType } from "../types/types";

const useDeleteVocab = (
  text: { id: number; word: string; onVocabList: boolean }[],
  setText: React.Dispatch<React.SetStateAction<arrayTextType>>,
  vocab: vocabType[],
  setVocab: React.Dispatch<React.SetStateAction<vocabType[]>>,
  setMouseUpId: React.Dispatch<React.SetStateAction<number>>,
  setMouseDownId: React.Dispatch<React.SetStateAction<number>>
) => {
  const [deletedVocab, setDeletedVocab] = useState({ id: 0, word: "" });

  const handleIsDeleteVocabDialog = (
    id: number,
    word: string,
    ref: React.RefObject<HTMLDialogElement>
  ) => {
    setDeletedVocab({ id: id, word: word });
    ref.current?.showModal();
  };

  const handleCancelDeleteVocab = (ref: React.RefObject<HTMLDialogElement>) => {
    ref.current?.close();
    setDeletedVocab({ id: 0, word: "" });
  };

  const handleDeleteVocabConfirmation = (
    ref: React.RefObject<HTMLDialogElement>
  ) => {
    const { id, word } = deletedVocab;

    const deletedVocabArray = word.split(" ");
    const updatedText = text.map((item) => {
      if (deletedVocabArray.includes(item.word.toLowerCase())) {
        return { ...item, onVocabList: false };
      }
      return item;
    });

    setText(updatedText);

    const filteredVocabList = vocab.filter((item) => item.id !== id);
    setVocab(filteredVocabList);
    setDeletedVocab({ id: 0, word: "" });
    ref.current?.close();
    setMouseUpId(0);
    setMouseDownId(0);
  };

  return {
    handleIsDeleteVocabDialog,
    handleCancelDeleteVocab,
    deletedVocab,
    setDeletedVocab,
    handleDeleteVocabConfirmation,
  };
};

export default useDeleteVocab;
