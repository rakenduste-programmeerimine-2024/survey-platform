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

 