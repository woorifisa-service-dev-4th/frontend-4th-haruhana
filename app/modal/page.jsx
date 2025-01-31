'use client';

import React, { useState, useEffect } from "react";
import ModalComponent from '../../components/modal/modal-component';

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