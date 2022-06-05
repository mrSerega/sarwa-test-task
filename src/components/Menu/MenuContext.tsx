import { createContext } from "react";

import { noop } from "lodash";

import { MenuContextProps } from "./types";

export const MenuContext = createContext<MenuContextProps>({
  open: noop, close: noop
})