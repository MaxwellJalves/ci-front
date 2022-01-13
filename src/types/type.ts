export interface IAtividade extends PropsItem {
  atividade: string;
  tempo: string;
  selecionado?: boolean;
  finalizado?: boolean;
  id: string;
}

export interface IListaDeAtividades extends PropsItem {
  lista: IAtividade[];
}
export interface PropsItem {
  obterAtividadeSelecionada?: (atividadeSelecionada: IAtividade) => void;
}
export interface IButton {
  titulo: string;
  tipo: "button" | "submit" | "reset";
  onClick?:
    | React.FormEvent<HTMLElement>
    | React.MouseEventHandler<HTMLButtonElement>;
}
