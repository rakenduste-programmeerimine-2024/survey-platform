"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Import the hook
import { signUpAction } from "@/app/actions";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignupPage() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<{ success?: string; error?: string } | null>(null);
  const [passwordStrength, setPasswordStrength] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams) {
      const success = searchParams.get("success");
      const error = searchParams.get("error");
      setMessage({ success: success || undefined, error: error || undefined });
    }
  }, [searchParams]);

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
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
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
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
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

          {message?.success && (
            <div className="text-green-500 border-l-2 border-green-500 px-4 mt-4">
              {message.success}
            </div>
          )}
          {message?.error && (
            <div className="text-red-500 border-l-2 border-red-500 px-4 mt-4">
              {message.error}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
