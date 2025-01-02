import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function CreateAccount() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[--menu_bar]">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-xl bg-[--bottom_gradient]">
        <h2 className="text-3xl font-extrabold text-center text-[--primary_text]">
          Join Our Community
        </h2>
        <h1 className="text-center">
          Create an account or sign in to get started
        </h1>
        <div className="space-y-4">
          <LoginLink
            postLoginRedirectURL="/"
            className="w-full flex justify-center py-2 px-4 border border-white rounded-md hover:bg-[--top_gradient]"
          >
            <h1>Sign in</h1>
          </LoginLink>
          <RegisterLink
            postLoginRedirectURL="/"
            className="w-full flex justify-center py-2 px-4 border border-primary rounded-md hover:bg-[--top_gradient]"
          >
            <h1>Sign up</h1>
          </RegisterLink>
        </div>
      </div>
    </div>
  );
}
