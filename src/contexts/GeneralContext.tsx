import { createContext, useRef, PropsWithChildren, useContext } from "react";
import GeneralContextType from "../types/GeneralContextType";
import useConvertText from "../custom hooks/useConvertText";
import useMouseHandlers from "../custom hooks/useMouseHandlers";
import useCreateVocabList from "../custom hooks/useCreateVocabList";
import useInputText from "../custom hooks/useInputText";
import useDialogHandlers from "../custom hooks/useDialogHandlers";
import useCreateNew from "../custom hooks/useCreateNew";
import useAutoHeight from "../custom hooks/useAutoHeight";
import useGetUserSelection from "../custom hooks/useGetUserSelection";
import useAddVocab from "../custom hooks/useAddVocab";
import initVal from "./initialValues";
import useDeleteVocab from "../custom hooks/useDeleteVocab";
import useTextTitle from "../custom hooks/useTextTitle";
import useSaveData from "../custom hooks/useSaveData";
import usePrintData from "../custom hooks/usePrintData";

const GeneralContext = createContext<GeneralContextType>(initVal);

export const GeneralContextProvider = ({ children }: PropsWithChildren) => {
  const addVocabRef = useRef<HTMLDialogElement>(null);
  const deleteVocabRef = useRef<HTMLDialogElement>(null);
  const openFileDialogRef = useRef<HTMLDialogElement>(null);

  const {
    handleInput,
    inputText,
    isSubmitted,
    handleSubmit,
    isNoText,
    isNoTitle,
  } = useInputText();

  const { textAreaRef, autoHeight, scrHeight } = useAutoHeight();

  const {
    mouseDownId,
    setMouseDownId,
    mouseUpId,
    setMouseUpId,
    isAddVocabDialog,
    setIsAddVocabDialog,
    handleMouseDown,
    handleMouseUp,
    handleIsAddVocabDialog,
  } = useMouseHandlers(addVocabRef);

  const { text, setText, updateText } = useConvertText(
    inputText,
    mouseUpId,
    mouseDownId
  );

  const { selectedWords, setSelectedWords, vocabId } = useGetUserSelection(
    mouseDownId,
    mouseUpId,
    text
  );

  const { vocab, setVocab, updateVocabList } = useCreateVocabList(
    selectedWords,
    vocabId
  );

  const { handleAddVocabConfirmation, handleCancelAddVocab } = useAddVocab(
    updateVocabList,
    updateText,
    setSelectedWords,
    addVocabRef,
    setMouseDownId,
    setMouseUpId
  );

  const { handleCancel, handleOpenDialog } = useDialogHandlers();

  const { createNew, setCreateNew, handleCreateNew } = useCreateNew();

  const {
    handleIsDeleteVocabDialog,
    handleCancelDeleteVocab,
    deletedVocab,
    setDeletedVocab,
    handleDeleteVocabConfirmation,
  } = useDeleteVocab(
    text,
    setText,
    vocab,
    setVocab,
    setMouseUpId,
    setMouseDownId
  );

  const { textTitle, setTextTitle, handleTitleInput } = useTextTitle();

  const { saveData } = useSaveData();

  const { printData } = usePrintData();

  return (
    <GeneralContext.Provider
      value={{
        text,
        setText,
        isAddVocabDialog,
        setIsAddVocabDialog,
        mouseDownId,
        setMouseDownId,
        mouseUpId,
        setMouseUpId,
        handleMouseDown,
        handleMouseUp,
        selectedWords,
        setSelectedWords,
        vocab,
        setVocab,
        vocabId,
        handleAddVocabConfirmation,
        handleCancelAddVocab,
        handleDeleteVocabConfirmation,
        addVocabRef,
        deleteVocabRef,
        updateText,
        handleIsDeleteVocabDialog,
        handleIsAddVocabDialog,
        handleCancelDeleteVocab,
        deletedVocab,
        setDeletedVocab,
        handleInput,
        inputText,
        isSubmitted,
        handleSubmit,
        handleCancel,
        handleOpenDialog,
        openFileDialogRef,
        createNew,
        setCreateNew,
        handleCreateNew,
        textAreaRef,
        autoHeight,
        scrHeight,
        textTitle,
        setTextTitle,
        handleTitleInput,
        saveData,
        printData,
        isNoText,
        isNoTitle,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  return useContext(GeneralContext);
};
