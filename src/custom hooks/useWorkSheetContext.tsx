import { useContext } from "react";
import { WorkSheetContext } from "../contexts/WorkSheetContext";

export const useWorkSheetContext = () => {
  const context = useContext(WorkSheetContext);
  if (!context) {
    throw new Error(
      "useWorkSheetContext must be used within a WorkSheetContextProvider"
    );
  }
  return context;
};
