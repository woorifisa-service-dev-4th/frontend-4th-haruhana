'use client';

import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import ModalComponent from './ModalComponent';

export default function ModalPage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="flex pt-20">
            <ModalComponent />
        </div>
    );
}