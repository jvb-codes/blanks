import { Link } from "react-router-dom";
import { useGeneralContext } from "../contexts/GeneralContext";
import Button from "./Button";
import TitleEntry from "./Input Comps/TitleEntry";
import TextareaEntry from "./Input Comps/TextareaEntry";

const Inputs = () => {
  const { handleSubmit, textTitle, text } = useGeneralContext();

  return (
    <>
      <div className="flex flex-col gap-6  w-[50%] items-center ">
        <TitleEntry />
        <TextareaEntry />
        <Link to={"/blanks"}>
          <Button
            onClickFunction={() => handleSubmit(textTitle, text)}
            label="Make Some Blanks"
          />
        </Link>
      </div>
    </>
  );
};

export default Inputs;
