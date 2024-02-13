import { useGeneralContext } from "../../contexts/GeneralContext";

const Words = () => {
  const { isNoText, text, handleMouseDown, handleMouseUp } =
    useGeneralContext();

  const renderText = text.map((item) => {
    const punctuationRegex = /[,.?]/;

    if (item.onVocabList && !punctuationRegex.test(item.word)) {
      return (
        <span key={item.id} className="blank-space">
          _____
        </span>
      );
    }

    return (
      <span
        onMouseDown={() => handleMouseDown(item.id)}
        onMouseUp={() => handleMouseUp(item.id)}
        className={punctuationRegex.test(item.word) ? "punctuation" : "word"}
        key={item.id}
      >
        {item.word}
      </span>
    );
  });

  return (
    <div className="mt-4">
      {isNoText || text.length === 0 ? <p>No text entered</p> : renderText}
    </div>
  );
};

export default Words;
