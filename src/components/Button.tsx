type ButtonPropType = {
  onClickFunction: () => void;
  label: string;
};

const Button = ({ onClickFunction, label }: ButtonPropType) => {
  return (
    <button className="hidden-on-print" onClick={onClickFunction}>
      {label}
    </button>
  );
};

export default Button;
