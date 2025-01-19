"use client";

import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables!");
}
const supabase = createClient(supabaseUrl, supabaseKey);

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

    // Password validation
    if (password !== passwordConfirmation) {
      setError("Paroolid ei ühti.");
      setLoading(false);
      return;
    }

    // Email validation (simple regex)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError("E-posti aadress ei ole kehtiv.");
      setLoading(false);
      return;
    }

    try {
      console.log("Alustame registreerimist...");
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      console.log("Signup vastus:", { data, error });

      if (error) {
        throw error;
      }

      if (data.user) {
        setSuccess("Registreerimine õnnestus! Kontrollige oma e-posti kinnituse saamiseks.");
        console.log("Kasutaja edukalt registreeritud:", data.user);
      } else {
        setError("Kasutaja registreerimisel tekkis ootamatu probleem.");
        console.error("Andmed puuduvad, ootamatu viga:", data);
      }
    } catch (err: any) {
      setError(err.message || "Midagi läks valesti.");
      console.error("Viga registreerimisel:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black-100">
      <form
        onSubmit={handleSignup}
        className="flex flex-col w-full max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg"
      >
        <h1 className="text-2xl font-semibold text-center text-black">Registreeru</h1>
        <p className="text-sm text-center text-red-500 mt-2">
          Kas teil on juba konto?{" "}
          <Link className="text-blue-500 font-medium underline" href="/sign-in">
            Logi sisse
          </Link>
        </p>

        <div className="flex flex-col gap-4 mt-6">
          {/* First Name Input */}
          <div>
            <Label htmlFor="first-name" className="text-black">
              Eesnimi
            </Label>
            <Input
              id="first-name"
              name="first-name"
              placeholder="John"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Last Name Input */}
          <div>
            <Label htmlFor="last-name" className="text-black">
              Perekonnanimi
            </Label>
            <Input
              id="last-name"
              name="last-name"
              placeholder="Doe"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div>
            <Label htmlFor="email" className="text-black">
              E-post
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="teie@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <Label htmlFor="password" className="text-black">
              Parool
            </Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Teie parool"
              minLength={6}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Password Confirmation Input */}
          <div>
            <Label htmlFor="password-confirmation" className="text-black">
              Kinnita parool
            </Label>
            <Input
              id="password-confirmation"
              type="password"
              name="password-confirmation"
              placeholder="Kinnitage oma parool"
              minLength={6}
              required
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <SubmitButton disabled={loading} pendingText="Registreerimine...">
            Registreeru
          </SubmitButton>

          {/* Success Message */}
          {success && <div className="text-green-500 text-sm mt-4">{success}</div>}

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm mt-4">{error}</div>}
        </div>
      </form>
    </div>
  );
}
