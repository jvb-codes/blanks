import { useGeneralContext } from "../../contexts/GeneralContext";

const TitleEntry = () => {
  const { textTitle, handleTitleInput } = useGeneralContext();
  return (
    <div className="w-full">
      <input
        type="text"
        value={textTitle}
        placeholder="What's the title?"
        className="bg-indigo-400 p-4 border-2 border-solid border-transparent rounded-sm outline-none leading relaxed transition-all hover:cursor-pointer hover:bg-indigo-300 focus:cursor-text focus:border-yellow-400 overflow-hidden resize-none  placeholder:font-inter  placeholder:text-black/[.33]  w-full"
        onChange={handleTitleInput}
      />
    </div>
  );
};

export default TitleEntry;
