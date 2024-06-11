import React from "react";
import Header from "../components/Header";

const OtherPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default OtherPageLayout;
