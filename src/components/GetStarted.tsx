import { useGeneralContext } from "../contexts/GeneralContext";
import Button from "./Button";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const { createNew, isSubmitted, handleCreateNew } = useGeneralContext();

  return (
    <>
      {createNew || isSubmitted ? null : (
        <div className="flex flex-col gap-8 justify-center items-center">
          <h1 className="text-center">Welcome to Blanks!😀</h1>
          <p>
            Blanks provides teachers a quick and easy way to create
            fill-in-the-blank quizzes.
          </p>
          <Link to={"/entry"}>
            <Button onClickFunction={handleCreateNew} label={"Get Started"} />
          </Link>
        </div>
      )}
    </>
  );
};

export default GetStarted;
