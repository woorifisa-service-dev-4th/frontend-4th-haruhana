"use client";
import { useRouter } from "next/navigation";

const LogoutPage = () => {
  const router = useRouter();

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      alert("Logout successful!");
      // 로그아웃 로직 추가
      router.push("/"); // 랜딩 페이지로 이동
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-12 mb-24">
        <div className="flex items-center justify-center mt-8 mb-12">
          <h1
            className="text-white text-5xl font-extrabold tracking-wider drop-shadow-2xl"
            style={{
              textShadow:
                "2px 2px 6px rgba(0, 0, 0, 0.5), -2px -2px 6px rgba(255, 255, 255, 0.4)",
              letterSpacing: "0.1em",
              lineHeight: "1.2",
            }}
          >
            HARU HANA
          </h1>
        </div>
      </div>
      <div className="p-5 max-w-md mx-auto text-center">
        <div className="mb-20">
          <p className="text-lg">Are you sure you want to log out?</p>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 bg-[#6DB1B2] text-white rounded transition duration-300 hover:bg-white hover:text-black hover:border-green-500 border-2 border-transparent"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
