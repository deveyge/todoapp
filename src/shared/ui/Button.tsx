import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="hover:bg-accent rounded-md bg-[var(--primary)] px-5 py-2 text-center text-base font-medium text-white">
      {children}
    </button>
  );
};

export default Button;
