import { useState } from "react";

const useTextTitle = () => {
  const [textTitle, setTextTitle] = useState("");

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextTitle(e.target.value);
  };

  return { textTitle, setTextTitle, handleTitleInput };
};

export default useTextTitle;
