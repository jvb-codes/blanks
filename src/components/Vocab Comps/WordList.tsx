import { useGeneralContext } from "../../contexts/GeneralContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const WordList = () => {
  const { vocab, handleIsDeleteVocabDialog, deleteVocabRef } =
    useGeneralContext();

  const list = vocab
    .filter((item) => item.word !== "")
    .map((item) => (
      <div
        key={item.id}
        className="flex items-center justify-between max-w-screen-sm pl-0 pr-0 pt-2 pb-2 "
      >
        <p key={item.id}>{item.word}</p>
        <div
          className="hover: cursor-pointer hidden-on-print"
          onClick={() =>
            handleIsDeleteVocabDialog(item.id, item.word, deleteVocabRef)
          }
        >
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    ));

  return <div>{list}</div>;
};

export default WordList;
