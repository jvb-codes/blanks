import { useGeneralContext } from "../../contexts/GeneralContext";

const EmptyMsg = () => {
  const { vocab } = useGeneralContext();

  const isVocabListEmptyMsg = vocab.length === 0 ? <p>No words added</p> : null;

  return <div>{isVocabListEmptyMsg}</div>;
};

export default EmptyMsg;
