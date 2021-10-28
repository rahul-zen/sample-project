/* eslint-disable react/prop-types */
import { AppBody } from "./AppBody";
import { AppFooter } from "./AppFooter";

export const AppLayout = ({ children }) => {
  return <div>{children}</div>;
};

AppLayout.Body = AppBody;
AppLayout.Footer = AppFooter;
