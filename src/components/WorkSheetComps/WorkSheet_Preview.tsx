import { useEffect, useRef } from "react";
import { UseFormProps } from "../../components/WorkSheet";
import { useWorkSheetContext } from "../../custom hooks/useWorkSheetContext";
import usePreview from "../../custom hooks/usePreview";
import useAutoHeight from "../../custom hooks/useAutoHeight";

const Title = () => {
  const { preview, setPreview, isPreviewed, setIsPreviewed } =
    useWorkSheetContext();

  const { togglePreview } = usePreview({
    preview,
    setPreview,
    isPreviewed,
    setIsPreviewed,
  });

  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <p>Preview Blanks</p>

      {isPreviewed ? (
        <i className="material-symbols-outlined" onClick={togglePreview}>
          arrow_drop_down
        </i>
      ) : (
        <i className="material-symbols-outlined" onClick={togglePreview}>
          arrow_right
        </i>
      )}
    </div>
  );
};

const ErrorMsg = () => {
  const { preview, setPreview, isPreviewed, setIsPreviewed } =
    useWorkSheetContext();

  const { countParentheses } = usePreview({
    preview,
    setPreview,
    isPreviewed,
    setIsPreviewed,
  });

  const numOfParentheses = countParentheses();

  return (
    <>
      {isPreviewed && numOfParentheses % 2 !== 0 ? (
        <p className="text-red-400 ">Words must be between parentheses</p>
      ) : null}
    </>
  );
};

const WorkSheetPreview = ({ register, setValue }: UseFormProps) => {
  const { preview, isPreviewed } = useWorkSheetContext();

  const previewRef = useRef<HTMLTextAreaElement | null>(null);

  useAutoHeight(previewRef, preview, isPreviewed);

  useEffect(() => {
    if (setValue) {
      setValue("wkSheetPreview", preview);
    }
  }, [preview, setValue]);

  return (
    <section className="flex flex-col gap-1">
      <div className="flex items-center justify-between ">
        <Title />
        <ErrorMsg />
      </div>
      {isPreviewed ? (
        <textarea
          value={preview}
          readOnly={true}
          id="preview"
          {...register("wkSheetPreview")}
          ref={(el) => {
            previewRef.current = el;
            register("wkSheetPreview").ref(el);
          }}
          className="w-full p-2 overflow-hidden text-2xl text-black bg-white rounded-sm outline-none resize-none "
        />
      ) : null}
    </section>
  );
};

export default WorkSheetPreview;
