import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export const Auth = () => {
  return (
    <header>
      <SignedOut>
        <SignUpButton mode="modal"/>
        <SignInButton mode="modal"/>
      </SignedOut>
      <SignedIn>
        <Navigate to='/'></Navigate>
      </SignedIn>
    </header>
  );
}
