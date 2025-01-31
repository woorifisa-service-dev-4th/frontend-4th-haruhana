'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Title from '../../components/landing/Title';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        console.log({ name, email, password }); // 콘솔 로그 추가

        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (res.ok) {
            alert("Signup successful!");
        } else {
            const data = await res.json();
            alert(data.message);
        }
    };

    return (
        <div>
            <Title />
            <div className="p-5 max-w-md mx-auto text-center">
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-2 w-full border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 w-full border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-2 w-full border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-20">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="p-2 w-full border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#6DB1B2] text-white rounded transition duration-300 hover:bg-white hover:text-black hover:border-[#6DB1B2] border-2 border-transparent"
                        >
                            Sign Up
                        </button>
                        <Link href="/login" legacyBehavior>
                            <a className="px-4 py-2 bg-[#6DB1B2] text-white rounded transition duration-300 hover:bg-white hover:text-black hover:border-[#6DB1B2] border-2 border-transparent">
                                Log In
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;