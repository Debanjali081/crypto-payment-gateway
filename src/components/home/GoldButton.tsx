import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GoldButton({ children, className = "" }: Props) {
  return (
    <button
      className={`
        bg-brand-gradient
        text-brand-dark
        px-6 py-2.5
        rounded-full
        text-sm font-semibold
        hover:opacity-90
        transition
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
}
