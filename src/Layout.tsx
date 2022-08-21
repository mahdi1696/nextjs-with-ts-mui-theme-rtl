import React, { ReactElement } from "react";
import ButtonAppBar from "./AppBar";

type Props = {
  children: ReactElement | ReactElement[];
};

export default function Layout({ children }: Props) {
  return (
    <>
      <ButtonAppBar />
      <main>{children}</main>
    </>
  );
}
