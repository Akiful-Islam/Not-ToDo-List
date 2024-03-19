import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Start = ({ children }: Props) => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
};

export default Start;
