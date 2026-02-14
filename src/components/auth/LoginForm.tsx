import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import GoldButton from "../home/GoldButton";

export default function LoginForm() {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Login to your dashboard"
    >
      <form className="space-y-5">
        <AuthInput type="email" placeholder="Email" required />
        <AuthInput type="password" placeholder="Password" required />

        <GoldButton className="w-full">Login</GoldButton>

        <p className="text-gray-400 text-sm text-center">
          Don’t have an account?{" "}
          <a href="/register" className="text-brand-light hover:underline">
            Register
          </a>
        </p>
      </form>
    </AuthCard>
  );
}
