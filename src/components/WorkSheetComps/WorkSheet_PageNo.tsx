import { UseFormProps } from "../../components/WorkSheet";

const WorkSheetPageNo = ({ register }: UseFormProps) => {
  return (
    <label className="flex gap-2" htmlFor="wkSheetPageNo">
      <p className="basis-[150px]">Add Page Number</p>
      <input
        id="wkSheetPageNo"
        type="checkbox"
        {...register("wkSheetPageNo")}
        className="w-6 h-6 basis-auto"
      />
    </label>
  );
};

export default WorkSheetPageNo;
