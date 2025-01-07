"use client";

import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import { useState } from "react";

export default function SignupClient({ searchParams }: { searchParams: Message }) {
  const [passwordStrength, setPasswordStrength] = useState<string | null>(null);

  const handlePasswordChange = (password: string) => {
    if (password.length < 6) {
      setPasswordStrength("Weak");
    } else if (password.length < 10) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Strong");
    }
  };

  return (
    <form className="flex flex-col w-full max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-center">Sign up</h1>
      <p className="text-sm text-center text-gray-500 mt-2">
        Already have an account?{" "}
        <Link className="text-blue-500 font-medium underline" href="/sign-in">
          Sign in
        </Link>
      </p>
      <div className="flex flex-col gap-4 mt-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="you@example.com" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          {passwordStrength && (
            <p
              className={`text-sm mt-1 ${
                passwordStrength === "Strong"
                  ? "text-green-500"
                  : passwordStrength === "Medium"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              Password Strength: {passwordStrength}
            </p>
          )}
        </div>
        <SubmitButton formAction={signUpAction} pendingText="Signing up...">
          Sign up
        </SubmitButton>
        <FormMessage message={searchParams} aria-live="polite" />
      </div>
      <SmtpMessage />
    </form>
  );
}
