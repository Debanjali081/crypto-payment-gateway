import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import GoldButton from "../home/GoldButton";

export default function RegisterForm() {
  return (
    <AuthCard
      title="Create account"
      subtitle="Start accepting crypto payments"
    >
      <form className="space-y-5">
        <AuthInput type="email" placeholder="Email" required />
        <AuthInput type="password" placeholder="Password" required />

        <GoldButton className="w-full">Create Account</GoldButton>

        <p className="text-gray-400 text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-brand-light hover:underline">
            Login
          </a>
        </p>
      </form>
    </AuthCard>
  );
}
