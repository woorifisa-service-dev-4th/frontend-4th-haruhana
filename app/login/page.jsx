"use client";
import React, { useState } from "react";
import Link from "next/link";
import Title from "../../components/landing/Title";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      // 사용자 정보를 저장하고 필요한 페이지로 이동
      window.location.href = "/mypage"; // 로그인 성공 시 마이페이지로 이동
    } else {
      const data = await res.json();
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f7f7] to-white flex flex-col items-center justify-center">
      <Title />
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#6DB1B2] mb-8">
          Welcome Back!
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6DB1B2] focus:border-transparent transition duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6DB1B2] focus:border-transparent transition duration-200"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="w-full py-3 bg-[#6DB1B2] text-white rounded-lg font-semibold transition duration-300 hover:bg-[#5a9596] focus:outline-none focus:ring-2 focus:ring-[#6DB1B2] focus:ring-opacity-50"
            >
              Log In
            </button>
            <div className="text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <Link
                href="/signup"
                className="text-[#6DB1B2] hover:underline font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>© 2024 Haruhana. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LoginPage;
