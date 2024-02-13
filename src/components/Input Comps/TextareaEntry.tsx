import { useGeneralContext } from "../../contexts/GeneralContext";

const TextareaEntry = () => {
  const { handleInput, inputText, textAreaRef, autoHeight, scrHeight } =
    useGeneralContext();
  return (
    <div className="w-full">
      <textarea
        onChange={handleInput}
        value={inputText}
        ref={textAreaRef}
        onKeyUp={autoHeight}
        style={{ height: `${scrHeight}px` }}
        className="bg-indigo-400 p-4 border-2 border-solid border-transparent rounded-sm outline-none leading relaxed transition-all hover:cursor-pointer hover:bg-indigo-300 focus:cursor-text focus:border-yellow-400 overflow-hidden resize-none  placeholder:font-inter  placeholder:text-black/[.33]  w-full"
        placeholder="Paste some text here..."
      />
    </div>
  );
};

export default TextareaEntry;
