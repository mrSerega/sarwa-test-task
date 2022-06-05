import { ReactNode } from "react";

export type MenuViewProps = {
  onClose: () => void;
}

export type MenuProviderProps = {
  children: ReactNode
}

export type MenuContextProps = {
  open: () => void;
  close: () => void;
}
