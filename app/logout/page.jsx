'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Title from '../../components/landing/Title';

const LogoutPage = () => {
    const router = useRouter();

    const handleLogout = () => {
        if (confirm("Are you sure you want to log out?")) {
            alert("Logout successful!");
            // 로그아웃 로직 추가
            router.push('/'); // 랜딩 페이지로 이동
        }
    };

    return (
        <div>
            <Title />
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