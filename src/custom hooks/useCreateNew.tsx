import { useState } from "react";

const useCreateNew = () => {
  const [createNew, setCreateNew] = useState(false);

  const handleCreateNew = () => {
    setCreateNew(true);
  };

  return { createNew, setCreateNew, handleCreateNew };
};

export default useCreateNew;
