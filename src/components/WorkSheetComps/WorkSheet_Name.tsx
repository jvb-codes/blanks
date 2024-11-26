import { UseFormProps } from "../../components/WorkSheet";

const WorkSheetName = ({ register }: UseFormProps) => {
  return (
    <label htmlFor="wkSheetName" className="flex gap-2">
      <p className="basis-[150px]">Add Name Space</p>
      <input
        {...register("wkSheetName")}
        id="wkSheetName"
        type="checkbox"
        className="w-6 h-6 basis-auto"
      />
    </label>
  );
};

export default WorkSheetName;
