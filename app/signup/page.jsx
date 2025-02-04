"use client";
import React, { useState } from "react";
import Link from "next/link";
import Title from "../../components/landing/Title";
import Modal from "../../components/modal/modal"; // 모달 컴포넌트 추가
import ModalComponent from "../../components/modal/modal-component"; // 모달 내용

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  const handleSignup = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log({ name, email, password }); // 콘솔 로그 추가

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      setIsModalOpen(true); // 회원가입 성공 시 모달 열기
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
          Create Account
        </h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6DB1B2] focus:border-transparent transition duration-200"
            />
          </div>
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6DB1B2] focus:border-transparent transition duration-200"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="w-full py-3 bg-[#6DB1B2] text-white rounded-lg font-semibold transition duration-300 hover:bg-[#5a9596] focus:outline-none focus:ring-2 focus:ring-[#6DB1B2] focus:ring-opacity-50"
            >
              Sign Up
            </button>
            <div className="text-center">
              <span className="text-gray-600">Already have an account? </span>
              <Link
                href="/login"
                className="text-[#6DB1B2] hover:underline font-medium"
              >
                Log In
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>© 2024 Haruhana. All rights reserved.</p>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalComponent />
      </Modal>
    </div>
  );
};

export default SignupPage;
