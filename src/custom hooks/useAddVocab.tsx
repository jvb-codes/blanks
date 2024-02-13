const useAddVocab = (
  updateVocabList: () => void,
  updateText: () => void,
  setSelectedWords: React.Dispatch<React.SetStateAction<string>>,
  addVocabRef: React.RefObject<HTMLDialogElement>,
  setMouseDownId: React.Dispatch<React.SetStateAction<number>>,
  setMouseUpId: React.Dispatch<React.SetStateAction<number>>
) => {
  const handleAddVocabConfirmation = () => {
    updateVocabList();
    updateText();
    setSelectedWords("");
    addVocabRef.current?.close();
  };

  const handleCancelAddVocab = () => {
    setSelectedWords("");
    setMouseUpId(0);
    setMouseDownId(0);
    addVocabRef.current?.close();
  };

  return { handleAddVocabConfirmation, handleCancelAddVocab };
};

export default useAddVocab;
