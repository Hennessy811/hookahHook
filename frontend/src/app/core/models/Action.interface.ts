export interface IAction {
  id: number;
  label: string;
  message: string;
  endpoint: string;
  isRoute?: boolean;
}
