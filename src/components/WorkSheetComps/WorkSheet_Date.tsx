import { UseFormProps } from "../WorkSheet";

const WorkSheetDate = ({ register }: UseFormProps) => {
  return (
    <label htmlFor="wkSheetDate" className="flex gap-2">
      <p className="basis-[150px]">Add Date Space</p>
      <input
        {...register("wkSheetDate")}
        id="wkSheetDate"
        type="checkbox"
        className="w-6 h-6 basis-auto "
      />
    </label>
  );
};

export default WorkSheetDate;
