const useDialogHandlers = () => {
  const handleOpenDialog = (ref: React.RefObject<HTMLDialogElement>) => {
    ref.current?.showModal();
  };

  const handleCancel = (ref: React.RefObject<HTMLDialogElement>) => {
    ref.current?.close();
  };

  return { handleCancel, handleOpenDialog };
};

export default useDialogHandlers;
