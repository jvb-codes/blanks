import { UseFormProps } from "../../components/WorkSheet";

const WorkSheetTitle = ({ register }: UseFormProps) => {
  return (
    <label htmlFor="wkSheetTitle" className="flex flex-col gap-1">
      Worksheet Title
      <input
        id="wkSheetTitle"
        {...register("wkSheetTitle")}
        type="text"
        className="p-2 overflow-hidden text-black border-4 border-solid rounded-sm outline-none focus:cursor-text focus:border-indigo-500"
      />
    </label>
  );
};

export default WorkSheetTitle;
