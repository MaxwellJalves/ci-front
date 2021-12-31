import { IButton } from "../../types/type";
import "./style.scss";

const Button = ({ tipo, titulo, onClick }: IButton) => {
  return (
    <button type={tipo} onClick={() => onClick}>
      {titulo}
    </button>
  );
};

export default Button;
