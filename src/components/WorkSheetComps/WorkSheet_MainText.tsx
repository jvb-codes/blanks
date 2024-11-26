import { useRef } from "react";
import { UseFormProps } from "../../components/WorkSheet";
import { useWorkSheetContext } from "../../custom hooks/useWorkSheetContext";
import useAutoHeight from "../../custom hooks/useAutoHeight";

const WorkSheetMainText = ({ register }: UseFormProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { textareaValue, setTextareaValue, setPreview } = useWorkSheetContext();
  useAutoHeight(textareaRef, textareaValue);

  const handleInput = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentValue = ev.target.value;
    setTextareaValue(currentValue);
    setPreview(currentValue);
  };

  return (
    <section className="flex flex-col gap-4">
      <label htmlFor="wkSheetMainText" className="flex flex-col gap-1">
        <p>Main text</p>
        <textarea
          {...register("wkSheetMainText")}
          ref={(el) => {
            textareaRef.current = el;
            register("wkSheetMainText").ref(el);
          }}
          id="wkSheetMainText"
          className="w-full p-2 overflow-hidden text-2xl text-black border-4 border-solid rounded-sm outline-none resize-none focus:cursor-text focus:border-indigo-500"
          placeholder="Paste some text here..."
          onInput={handleInput}
        />
      </label>
    </section>
  );
};

export default WorkSheetMainText;
