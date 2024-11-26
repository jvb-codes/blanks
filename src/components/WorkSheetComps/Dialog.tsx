import { forwardRef } from "react";
import useDialog from "../../custom hooks/useDialog";

interface DialogProps {
  children: React.ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children }, ref) => {
    const { closeDialog } = useDialog(
      ref as React.RefObject<HTMLDialogElement>
    );

    return (
      <dialog ref={ref}>
        <div className="flex flex-col justify-center gap-6 p-8">
          <div className="flex justify-between">
            <p className="text-2xl font-semibold ">Error</p>
            <p onClick={closeDialog} className="text-2xl cursor-pointer">
              X
            </p>
          </div>
          {children}
        </div>
      </dialog>
    );
  }
);

export default Dialog;
