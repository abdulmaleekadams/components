import React from "react";

const page = ({ params }: { params: { pathname: string } }) => {
  const { pathname } = params;
  return (
    <div>
      <h1 className="text-3xl">Welcome to {pathname.replaceAll("-", " ")}</h1>
    </div>
  );
};

export default page;
