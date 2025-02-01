'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Title from '../../components/landing/Title';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
        <div>
            <Title />
            <div className="p-5 max-w-md mx-auto text-center">
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 w-full border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-20">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-2 w-full border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#6DB1B2] text-white rounded transition duration-300 hover:bg-white hover:text-black hover:border-[#6DB1B2] border-2 border-transparent"
                        >
                            Log In
                        </button>
                        <Link href="/signup" legacyBehavior>
                            <a className="px-4 py-2 bg-[#6DB1B2] text-white rounded transition duration-300 hover:bg-white hover:text-black hover:border-[#6DB1B2] border-2 border-transparent">
                                Sign Up
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;