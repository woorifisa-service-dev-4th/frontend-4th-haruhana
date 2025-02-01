'use client';

import React, { useState, useEffect } from "react";
import ModalComponent from '../../components/modal/modal-component';
import {Bell, Settings} from "lucide-react";

export default function ModalPage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="min-h-screen bg-gray-50 mb-10">
            {/* Header */}
            <header className="bg-[#6DB1B2] text-white py-6">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">학습 설정</h1>
                    </div>
                </div>
            </header>
            <ModalComponent/>
        </div>
    );
}