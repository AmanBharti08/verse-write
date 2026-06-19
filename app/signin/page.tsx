"use client";

import { useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" },
  );

  const [error, setError] = useState<string | undefined>("");
  const [message, setMessage] = useState<string | undefined>("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.error) {
      setMessage("");
      setError(data.error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    if (data.message) {
      setError("");
      setMessage(data.message);
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
    console.log(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="w-full h-full bg-zinc-950 flex justify-center items-center">
      <section className="flex flex-col items-center gap-10 p-10 rounded-2xl bg-black shadow-white shadow w-120">
        <h1 className="text-white text-2xl font-bold">SIGN IN</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            className="bg-zinc-800 text-gray-400 px-5 py-2 rounded-4xl"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="bg-zinc-800 text-gray-400 px-5 py-2 rounded-4xl"
          />
          <button
            type="submit"
            className="bg-zinc-950 text-white shadow shadow-white w-30 flex justify-center items-center rounded-2xl px-3 py-2"
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
