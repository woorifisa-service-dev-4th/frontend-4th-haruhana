'use client';
import React, { useState } from 'react';
import Title from '../../components/landing/Title';

const dummyUser = { username: "user", password: "password123" };

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === dummyUser.username && password === dummyUser.password) {
            alert("Login successful!");
        } else {
            alert("Invalid credentials.");
        }
    };

    const handleSignup = () => {
        alert("Signup clicked!");
        // 회원가입 로직 추가
    };

    return (
        <div>
            <Title />
            <div className="p-5 max-w-md mx-auto text-center">
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            className="px-4 py-2 bg-[#6DB1B2] text-white rounded transition duration-300 hover:bg-white hover:text-black hover:border-green-500 border-2 border-transparent"
                        >
                            Log In
                        </button>
                        <button
                            type="button"
                            onClick={handleSignup}
                            className="px-4 py-2 bg-[#6DB1B2] text-white rounded transition duration-300 hover:bg-white hover:text-black hover:border-green-500 border-2 border-transparent"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;