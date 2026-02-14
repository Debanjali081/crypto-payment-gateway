type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function AuthInput(props: Props) {
  return (
    <input
      {...props}
      className="
        w-full
        bg-bg
        border border-border
        rounded-lg
        px-4 py-3
        text-sm
        focus:outline-none
        focus:border-brand-light
        transition
      "
    />
  );
}
