import React from 'react';

export const Button = ({ children, variant, size, className, ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded';
    const variantStyles = {
        ghost: 'bg-transparent hover:bg-gray-100',
        outline: 'border border-gray-300 hover:bg-gray-100',
        solid: 'bg-blue-500 text-white hover:bg-blue-600',
    };
    const sizeStyles = {
        icon: 'p-2',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2',
        lg: 'px-5 py-3 text-lg',
    };

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    variant: 'solid',
    size: 'md',
};