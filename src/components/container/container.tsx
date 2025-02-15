import { JSX, ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};

export function Container({ children }: TContainer): JSX.Element {
  return <div className="container">{children}</div>;
}
