import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

export default function LoginPage() {
  return (
    <div>
      <div className="bg-white border p-4 max-w-s mx-auto">
        <h1 className="text-4xl bold text-center p-4">Sign In</h1>
        <LoginWithGoogle />
      </div>
    </div>
  );
}
