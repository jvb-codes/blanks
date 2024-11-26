import { UseFormProps } from "../WorkSheet";

const WorkSheetVocab = ({ register }: UseFormProps) => {
  return (
    <label className="flex gap-2" htmlFor="wkSheetVocab">
      <p className="basis-[150px]">Add Vocab Bank</p>
      <input
        className="w-6 h-6 basis-auto "
        id="wkSheetVocab"
        defaultChecked={true}
        type="checkbox"
        {...register("wkSheetVocab")}
      />
    </label>
  );
};

export default WorkSheetVocab;
