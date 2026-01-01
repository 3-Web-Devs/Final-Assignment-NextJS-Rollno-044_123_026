"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name || !form.email || !form.password || !form.confirmPassword)
      return "Please fill all fields";
    if (form.password !== form.confirmPassword)
      return "Passwords do not match";
    if (form.password.length < 6)
      return "Password must be at least 6 characters";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const msg = validate();
    if (msg) return setError(msg);

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        setError(data.message || "Registration failed");
      } else {
        router.push("/login");
      }
    } catch {
      setError("Network error");
    }
    setLoading(false);
  };

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Create Account</h2>

        {error && <p className="register-error">{error}</p>}

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="register-input"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="register-input"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="register-input"
        />
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="register-input"
        />

        <button type="submit" disabled={loading} className="register-btn">
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="register-login-text">
          Already have an account?{" "}
          <Link href="/login" className="register-login-link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
