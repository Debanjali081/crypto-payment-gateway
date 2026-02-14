import type{ ReactNode } from "react";

type Props = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthCard({ title, subtitle, children }: Props) {
  return (
    <div className="min-h-screen bg-bg text-white flex items-center justify-center px-6">

      {/* background glow */}
      <div className="absolute w-[500px] h-[300px] bg-brand-gradient opacity-10 blur-3xl rounded-full" />

      <div className="
        relative z-10
        w-full max-w-md
        bg-surface
        border border-border
        rounded-2xl
        p-10
        shadow-xl
      ">
        <h2 className="text-3xl font-semibold mb-2 text-center">{title}</h2>
        <p className="text-gray-400 text-sm text-center mb-8">{subtitle}</p>

        {children}
      </div>
    </div>
  );
}
