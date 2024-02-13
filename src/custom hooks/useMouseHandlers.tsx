import { useState } from "react";

const useMouseHandlers = (ref: React.RefObject<HTMLDialogElement>) => {
  const [mouseDownId, setMouseDownId] = useState<number>(0);
  const [mouseUpId, setMouseUpId] = useState<number>(0);
  const [isAddVocabDialog, setIsAddVocabDialog] = useState(false);

  const handleIsAddVocabDialog = () => {
    setIsAddVocabDialog(true);
  };

  const handleMouseDown = (id: number) => {
    setMouseDownId(id);
  };

  const handleMouseUp = (id: number) => {
    setMouseUpId(id);
    ref.current?.showModal();
  };

  return {
    mouseDownId,
    setMouseDownId,
    mouseUpId,
    setMouseUpId,
    isAddVocabDialog,
    setIsAddVocabDialog,
    handleMouseDown,
    handleMouseUp,
    handleIsAddVocabDialog,
  };
};

export default useMouseHandlers;
