import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, variant = 'primary', className, ...props }) => {
    const baseStyles = "px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center";

    const variants = {
        primary: "bg-neon-green text-black hover:shadow-neon-green hover:bg-white",
        secondary: "border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black hover:shadow-neon",
        outline: "border border-white/20 text-white hover:bg-white/10",
        glow: "bg-neon-cyan text-black hover:shadow-neon hover:bg-white",
        gradient: "bg-gradient-to-r from-neon-green to-neon-cyan text-black hover:shadow-neon",
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
