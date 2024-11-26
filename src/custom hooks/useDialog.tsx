const useDialog = (dialogRef: React.RefObject<HTMLDialogElement>) => {
  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return { openDialog, closeDialog };
};

export default useDialog;
