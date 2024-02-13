import { vocabType, arrayTextType } from "./types";

type GeneralContextType = {
  text: arrayTextType;
  setText: React.Dispatch<React.SetStateAction<arrayTextType>>;
  isAddVocabDialog: boolean;
  setIsAddVocabDialog: React.Dispatch<React.SetStateAction<boolean>>;
  mouseDownId: number;
  setMouseDownId: React.Dispatch<React.SetStateAction<number>>;
  mouseUpId: number;
  setMouseUpId: React.Dispatch<React.SetStateAction<number>>;
  selectedWords: string;
  setSelectedWords: React.Dispatch<React.SetStateAction<string>>;
  vocab: vocabType[];
  setVocab: React.Dispatch<React.SetStateAction<vocabType[]>>;
  vocabId: number;
  deletedVocab: { id: number; word: string };
  setDeletedVocab: React.Dispatch<
    React.SetStateAction<{ id: number; word: string }>
  >;
  handleIsAddVocabDialog: () => void;
  handleAddVocabConfirmation: () => void;
  handleCancelAddVocab: () => void;
  updateText: () => void;
  addVocabRef: React.RefObject<HTMLDialogElement>;
  deleteVocabRef: React.RefObject<HTMLDialogElement>;
  handleMouseDown: (id: number) => void;
  handleMouseUp: (id: number) => void;
  handleIsDeleteVocabDialog: (
    id: number,
    word: string,
    ref: React.RefObject<HTMLDialogElement>
  ) => void;
  handleDeleteVocabConfirmation: (
    ref: React.RefObject<HTMLDialogElement>
  ) => void;
  handleCancelDeleteVocab: (ref: React.RefObject<HTMLDialogElement>) => void;
  handleInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputText: string;
  openFileDialogRef: React.RefObject<HTMLDialogElement>;
  isSubmitted: boolean;
  handleSubmit: (title: string, text: arrayTextType) => void;
  handleCancel: (ref: React.RefObject<HTMLDialogElement>) => void;
  handleOpenDialog: (ref: React.RefObject<HTMLDialogElement>) => void;
  createNew: boolean;
  setCreateNew: React.Dispatch<React.SetStateAction<boolean>>;
  handleCreateNew: () => void;
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  autoHeight: () => void;
  scrHeight: number;
  textTitle: string;
  setTextTitle: React.Dispatch<React.SetStateAction<string>>;
  handleTitleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveData: (
    textTitle: string,
    text: arrayTextType,
    vocab: vocabType[]
  ) => void;
  printData: () => void;
  isNoText: boolean;
  isNoTitle: boolean;
};

export default GeneralContextType;
