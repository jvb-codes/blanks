export type vocabType = {
  id: number;
  word: string;
};

export type arrayTextType = {
  id: number;
  word: string;
  onVocabList: boolean;
}[];

export type DataType = {
  id: string;
  title: string;
  vocab: vocabType[];
  text: arrayTextType;
}[];

export type addedDataStatusType = {
  isSending: boolean;
  isError: boolean;
  isSuccess: boolean;
};

export type vocabularyPropsType = {
  vocab: vocabType[];
  setVocab: React.Dispatch<React.SetStateAction<vocabType[]>>;
  setText: React.Dispatch<React.SetStateAction<arrayTextType>>;
  handleDeleteVocabWord: (
    id: number,
    word: string,
    setText: React.Dispatch<React.SetStateAction<arrayTextType>>
  ) => void;
};

export type AddVocabDialogPropsType = {
  isAddVocabDialog: boolean;
  selectedWords: string;
  handleAddVocabConfirmation: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCancelAddVocab: () => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
};
