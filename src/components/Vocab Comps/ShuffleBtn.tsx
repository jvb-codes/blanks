import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { useGeneralContext } from "../../contexts/GeneralContext";
import handleShuffleVocab from "../../utils/shuffleVocab";

const ShuffleBtn = () => {
  const { vocab, setVocab } = useGeneralContext();

  const shuffleButton =
    vocab.length < 2 ? null : (
      <FontAwesomeIcon
        className="hidden-on-print cursor-pointer"
        onClick={() => handleShuffleVocab(vocab, setVocab)}
        icon={faShuffle}
      />
    );

  return <>{shuffleButton}</>;
};

export default ShuffleBtn;
