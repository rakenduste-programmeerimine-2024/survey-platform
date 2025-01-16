"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Import the hook
import { signUpAction } from "@/app/actions";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

// Main Signup Page Component
export default function SignupPage() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<{ success?: string; error?: string } | null>(null);
  const [passwordStrength, setPasswordStrength] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false); // State for password visibility
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState<boolean>(false); // State for confirmation visibility

  // UseEffect for handling searchParams and setting messages
  useEffect(() => {
    if (searchParams) {
      const success = searchParams.get("success");
      const error = searchParams.get("error");
      setMessage({ success: success || undefined, error: error || undefined });
    }
  }, [searchParams]);

  // Handle Password Strength Indicator
  const handlePasswordChange = (password: string) => {
    setPassword(password);
    if (password.length < 6) {
      setPasswordStrength("Weak");
    } else if (password.length < 10) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Strong");
    }

    // Check if password matches the confirmation
    if (passwordConfirmation && password !== passwordConfirmation) {
      setIsPasswordMatch(false);
    } else {
      setIsPasswordMatch(true);
    }
  };

  // Handle Password Confirmation Change
  const handlePasswordConfirmationChange = (confirmation: string) => {
    setPasswordConfirmation(confirmation);

    // Check if password matches the confirmation
    if (password && password !== confirmation) {
      setIsPasswordMatch(false);
    } else {
      setIsPasswordMatch(true);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black-100">
      <form className="flex flex-col w-full max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-center text-black">Sign up</h1>
        <p className="text-sm text-center text-red-500 mt-2">
          Already have an account?{" "}
          <Link className="text-blue-500 font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>

        <div className="flex flex-col gap-4 mt-6">
          {/* First Name Input */}
          <div>
            <Label htmlFor="first-name" className="text-black">
              First Name
            </Label>
            <Input id="first-name" name="first-name" placeholder="John" required />
          </div>

          {/* Last Name Input */}
          <div>
            <Label htmlFor="last-name" className="text-black">
              Last Name
            </Label>
            <Input id="last-name" name="last-name" placeholder="Doe" required />
          </div>

          {/* Email Input */}
          <div>
            <Label htmlFor="email" className="text-black">
              Email
            </Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>

          {/* Password Input */}
          <div>
            <Label htmlFor="password" className="text-black">
              Password
            </Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"} // Toggle visibility
              name="password"
              placeholder="Your password"
              minLength={6}
              required
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-sm text-blue-500 mt-1"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
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

          {/* Password Confirmation Input */}
          <div>
            <Label htmlFor="password-confirmation" className="text-black">
              Confirm Password
            </Label>
            <Input
              id="password-confirmation"
              type={showPasswordConfirmation ? "text" : "password"} // Toggle visibility
              name="password-confirmation"
              placeholder="Confirm your password"
              minLength={6}
              required
              onChange={(e) => handlePasswordConfirmationChange(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPasswordConfirmation((prev) => !prev)}
              className="text-sm text-blue-500 mt-1"
            >
              {showPasswordConfirmation ? "Hide" : "Show"}
            </button>
            {isPasswordMatch !== null && !isPasswordMatch && (
              <p className="text-red-500 text-sm mt-1">Passwords do not match!</p>
            )}
          </div>

          {/* Submit Button */}
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>

          {/* Message Display */}
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
