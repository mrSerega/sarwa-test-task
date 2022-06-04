import { ReactNode } from "react";

export type LayoutViewProps = {
  onMenuClick: () => void;
  children: ReactNode
}

export type LayoutWrapperProps = Pick<LayoutViewProps, 'children'>