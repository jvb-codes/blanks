import { useGeneralContext } from "../../contexts/GeneralContext";

const Title = () => {
  const { isNoTitle, text, textTitle } = useGeneralContext();

  return (
    <>
      {isNoTitle || text.length === 0 ? (
        <h1>No title entered</h1>
      ) : (
        <h1>{textTitle}</h1>
      )}
    </>
  );
};

export default Title;
