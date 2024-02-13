import Text from "../components/Text";
import Vocabulary from "../components/Vocabulary";
import Button from "../components/Button";
import { useGeneralContext } from "../contexts/GeneralContext";

const Blanks = () => {
  const { saveData, textTitle, text, vocab, printData } = useGeneralContext();
  return (
    <>
      <Text />
      <Vocabulary />
      <div className="flex gap-6">
        <Button
          onClickFunction={() => {
            saveData(textTitle, text, vocab);
          }}
          label="Save Work"
        />
        <Button onClickFunction={printData} label="Print" />
      </div>
    </>
  );
};

export default Blanks;
