import { useGeneralContext } from "../contexts/GeneralContext";
import DeleteVocabDialog from "./Dialogs/DeleteVocabDialog";
import Dialog from "./Dialog";
import AddVocab from "./Dialogs/AddVocab";
import WordList from "./Vocab Comps/WordList";
import ShuffleBtn from "./Vocab Comps/ShuffleBtn";
import EmptyMsg from "./Vocab Comps/EmptyMsg";

const Vocabulary = () => {
  const { addVocabRef, deleteVocabRef } = useGeneralContext();

  return (
    <>
      <div className="bg-indigo-400 p-4 flex flex-col gap-4 initial-width width-on-print">
        <div className="flex items-center gap-6">
          <h1>Vocabulary</h1>
          <ShuffleBtn />
        </div>
        <WordList />
        <EmptyMsg />
      </div>
      <Dialog dialogRef={addVocabRef} content={<AddVocab />} />
      <Dialog dialogRef={deleteVocabRef} content={<DeleteVocabDialog />} />
    </>
  );
};

export default Vocabulary;
