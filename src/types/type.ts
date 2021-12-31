export interface IAtividade {
  atividade: string;
  tempo: string;
}

export interface IButton {
  titulo: string;
  tipo: "button" | "submit" | "reset";
  onClick?:
    | React.FormEvent<HTMLElement>
    | React.MouseEventHandler<HTMLButtonElement>;
}
