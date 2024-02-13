import { useGeneralContext } from "../../contexts/GeneralContext";
import Button from "../Button";

const DeleteVocabDialog = () => {
  const {
    handleDeleteVocabConfirmation,
    handleCancelDeleteVocab,
    deletedVocab,
    deleteVocabRef,
  } = useGeneralContext();

  return (
    <section className="flex flex-col justify-center items-center gap-6">
      <p>
        {"Delete"}
        <span style={{ color: "blue" }}> {deletedVocab.word} </span>
        {"from your vocabulary list?"}
      </p>
      <div className="flex gap-6">
        <Button
          onClickFunction={() => handleDeleteVocabConfirmation(deleteVocabRef)}
          label="Delete"
        />
        <Button
          onClickFunction={() => handleCancelDeleteVocab(deleteVocabRef)}
          label="Cancel"
        />
      </div>
    </section>
  );
};

export default DeleteVocabDialog;
