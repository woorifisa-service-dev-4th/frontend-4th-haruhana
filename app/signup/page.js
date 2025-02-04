"use client";
import { useState } from "react";
import Link from "next/link";
import Modal from "../../components/modal/modal"; // 모달 컴포넌트 추가
import ModalComponent from "../../components/modal/modal-component"; // 모달 내용
import Image from "next/image"; // Image import 추가

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
    <div className="min-h-screen bg-gradient-to-b from-[#e6f7f7] to-white flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-medium text-[#6DB1B2] text-center mb-8">
          회원가입
        </h2>
        <form onSubmit={handleSignup} className="space-y-7">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이름
            </label>
            <input
              type="text"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6DB1B2] focus:border-transparent transition duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이메일
            </label>
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6DB1B2] focus:border-transparent transition duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              비밀번호
            </label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6DB1B2] focus:border-transparent transition duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              비밀번호 확인
            </label>
            <input
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6DB1B2] focus:border-transparent transition duration-200"
            />
          </div>
          <div className="flex flex-col space-y-7">
            <button
              type="submit"
              className="w-full py-3 bg-[#6DB1B2] text-white rounded-lg font-medium transition duration-300 hover:bg-[#5a9596] focus:outline-none focus:ring-2 focus:ring-[#6DB1B2] focus:ring-opacity-50"
            >
              가입하기
            </button>

            <div className="text-center">
              <span className="text-gray-600">이미 계정이 있으신가요? </span>
              <Link
                href="/login"
                className="text-[#6DB1B2] hover:underline font-medium ml-2"
              >
                로그인
              </Link>
            </div>

            <div className="relative flex items-center justify-center">
              <hr className="w-full border-gray-300" />
              <span className="absolute bg-white px-6 text-sm text-gray-500">
                간편 회원가입
              </span>
            </div>

            <div className="flex justify-center items-center space-x-12">
              <div
                onClick={() => (window.location.href = "/api/auth/kakao")}
                className="cursor-pointer hover:opacity-80 transition-opacity transform hover:scale-105"
              >
                <Image
                  src="/social/kakao.png"
                  alt="Kakao"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>

              <div
                onClick={() => (window.location.href = "/api/auth/naver")}
                className="cursor-pointer hover:opacity-80 transition-opacity transform hover:scale-105"
              >
                <Image
                  src="/social/naver.png"
                  alt="Naver"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </div>

              <div
                onClick={() => (window.location.href = "/api/auth/google")}
                className="cursor-pointer hover:opacity-80 transition-opacity transform hover:scale-105"
              >
                <Image
                  src="/social/google.png"
                  alt="Google"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-10 text-center text-sm text-gray-600">
        <p>© 2025 하루하나. All rights reserved.</p>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalComponent />
      </Modal>
    </div>
  );
};

export default SignupPage;
