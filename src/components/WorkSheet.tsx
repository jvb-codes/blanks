import { useForm, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useRef } from "react";
import { useWorkSheetContext } from "../custom hooks/useWorkSheetContext";

//Children

import WorkSheetTitle from "./WorkSheetComps/WorkSheet_Title";
import WorkSheetMainText from "./WorkSheetComps/WorkSheet_MainText";
import WorkSheetDate from "./WorkSheetComps/WorkSheet_Date";
import WorkSheetName from "./WorkSheetComps/WorkSheet_Name";
import WorkSheetVocab from "./WorkSheetComps/WorkSheet_Vocab";
import WorkSheetPreview from "./WorkSheetComps/WorkSheet_Preview";
import Dialog from "./WorkSheetComps/Dialog";

// Custom Hooks

import useDialog from "../custom hooks/useDialog";
import useValidateForm from "../custom hooks/useValidateForm";
import useGenerateDocument from "../custom hooks/useGenerateDocument";

export interface FormData {
  wkSheetTitle: string;
  wkSheetMainText: string;
  wkSheetName: boolean;
  wkSheetPageNo: boolean;
  wkSheetDate: boolean;
  wkSheetVocab: boolean;
  wkSheetPreview: string;
}

export interface UseFormProps {
  register: UseFormRegister<FormData>;
  setValue?: UseFormSetValue<FormData>;
}

const WorkSheet = () => {
  const { generateDocument } = useGenerateDocument();

  const { register, control, handleSubmit, setValue } = useForm<FormData>();

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const { openDialog } = useDialog(dialogRef);

  const { error, setError } = useWorkSheetContext();

  const {
    validatePreviewLength,
    validateParentheses,
    validateOmission,
    errorMessages,
  } = useValidateForm();

  const onSubmit = (data: FormData) => {
    const isPreviewEmpty = validatePreviewLength();
    const isOddNumOfParentheses = validateParentheses();
    const areNotOmitted = validateOmission();

    if (isPreviewEmpty === true) {
      setError(errorMessages.previewEmpty);
      openDialog();
    } else if (areNotOmitted) {
      setError(errorMessages.wordsNotOmitted);
      openDialog();
    } else if (isOddNumOfParentheses === true) {
      setError(errorMessages.oddNumOfParentheses);
      openDialog();
    } else generateDocument(data);
  };

  return (
    <section className="w-3/4 text-white ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center h-full gap-8 "
      >
        <h1 className="text-4xl text-center">Blanks Maker</h1>
        <div className="flex flex-col gap-6">
          <WorkSheetTitle register={register} />
          <WorkSheetMainText register={register} />
          <WorkSheetPreview register={register} setValue={setValue} />
          <WorkSheetVocab register={register} />
          <WorkSheetName register={register} />
          <WorkSheetDate register={register} />
        </div>
        <input
          value="Create Worksheet"
          className="px-10 py-2 bg-indigo-500 rounded-sm cursor-pointer place-self-center"
          type="submit"
        />
      </form>
      <DevTool control={control} />
      <Dialog ref={dialogRef}>
        <p>{error}</p>
      </Dialog>
    </section>
  );
};

export default WorkSheet;
