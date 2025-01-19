"use client";

import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Import the hook
import { signUpAction } from "@/app/actions";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);


// Main Signup Page Component
export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (password !== passwordConfirmation) {
      setError("Paroolid ei ühti.");
      setLoading(false);
      return;
    }

    try {
      // Registreeri kasutaja Supabase'i
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`, // Kinnitamismeili link
        },
      });

      if (error) {
        throw error;
      }

      setSuccess("Registreerimine õnnestus! Kontrollige oma e-posti kinnituse saamiseks.");
    } catch (err: any) {
      setError(err.message || "Midagi läks valesti.");
    } finally {
      setLoading(false);
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
