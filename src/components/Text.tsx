import Title from "./Text Comps/Title";
import Words from "./Text Comps/Words";

const Text = () => {
  return (
    <>
      <div className=" bg-indigo-400 p-4  initial-width width-on-print">
        <Title />
        <Words />
      </div>
    </>
  );
};

export default Text;
