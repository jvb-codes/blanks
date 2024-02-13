type DialogPropType = {
  content: React.ReactElement;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

const Dialog = ({ content, dialogRef }: DialogPropType) => {
  return (
    <dialog
      className=" p-8 rounded bg-gray-500 overflow-hidden"
      ref={dialogRef}
    >
      <div>{content}</div>
    </dialog>
  );
};

export default Dialog;
