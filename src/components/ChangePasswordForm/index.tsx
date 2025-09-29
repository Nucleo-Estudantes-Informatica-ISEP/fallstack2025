"use client";

import React from "react";

import { BASE_URL } from "@/services/api";

const ChangePasswordForm: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const res = await fetch(`${BASE_URL}/auth/password-change`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Password changed successfully");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col">
      <label htmlFor="email" className="mb-2">
        Email
      </label>
      <input
        type="text"
        name="email"
        id="email"
        className="mb-4 border border-gray-300 p-2 text-blue-800"
        required
      />
      <label htmlFor="password" className="mb-2">
        New Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className="mb-4 border border-gray-300 p-2 text-blue-800"
        required
      />
      <label htmlFor="confirmPassword" className="mb-2">
        Confirm Password
      </label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        className="mb-4 border border-gray-300 p-2 text-blue-800"
        required
      />
      <button
        type="submit"
        className="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
      >
        Change Password
      </button>
    </form>
  );
};

export default ChangePasswordForm;
