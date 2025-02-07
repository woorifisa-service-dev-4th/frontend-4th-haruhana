import React from 'react';

export const Avatar = ({ children, className }) => {
    return (
        <div className={`relative inline-block rounded-full overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

export const AvatarImage = ({ src, alt, className }) => {
    return (
        <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />
    );
};

export const AvatarFallback = ({ children, className }) => {
    return (
        <div className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}>
            {children}
        </div>
    );
};