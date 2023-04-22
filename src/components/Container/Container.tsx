import React, { ReactNode } from "react";
import "./container.scss";
interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};

export default Container;
