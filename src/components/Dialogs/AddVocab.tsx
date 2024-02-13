import { useGeneralContext } from "../../contexts/GeneralContext";
import Button from "../Button";

const AddVocab = () => {
  const { selectedWords, handleAddVocabConfirmation, handleCancelAddVocab } =
    useGeneralContext();

  return (
    <div className=" h-[300px] flex justify-center flex-col items-center gap-6">
      <p>
        {"Add"}
        <span style={{ color: "blue" }}> {selectedWords} </span>
        {"to your vocabulary list?"}
      </p>
      <div className="flex justify-center gap-6">
        <Button onClickFunction={handleAddVocabConfirmation} label="Add" />
        <Button onClickFunction={handleCancelAddVocab} label="Cancel" />
      </div>
    </div>
  );
};

export default AddVocab;
