import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};

export function Container({ children }: TContainer) {
  return <div className="container">{children}</div>;
}
