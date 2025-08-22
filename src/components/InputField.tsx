import React, { useState } from "react";
import clsx from "clsx";

export interface InputFieldProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    placeholder?: string;
    helperText?: string;
    errorMessage?: string;
    disabled?: boolean;
    invalid?: boolean;
    loading?: boolean;
    type?: "text" | "password" | "email" | "number";
    variant?: "filled" | "outlined" | "ghost";
    size?: "sm" | "md" | "lg";
    clearable?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
    value,
    onChange,
    label,
    placeholder,
    helperText,
    errorMessage,
    disabled,
    invalid,
    loading,
    type = "text",
    variant = "outlined",
    size = "md",
    clearable = false,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const baseStyles =
        "w-full rounded-md focus:outline-none focus:ring-2 transition pr-10"; // space for buttons

    const variantStyles: Record<string, string> = {
        filled: "bg-gray-100 border border-transparent focus:ring-blue-500",
        outlined: "border border-gray-300 focus:ring-blue-500",
        ghost: "bg-transparent border-b border-gray-300 focus:ring-blue-500",
    };

    const sizeStyles: Record<string, string> = {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2 text-base",
        lg: "px-4 py-3 text-lg",
    };

    const inputId = label
        ? `input-${label.replace(/\s+/g, "-").toLowerCase()}`
        : undefined;

    const handleClear = () => {
        if (onChange) {
            onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
        }
    };

    return (
        <div className="flex flex-col gap-1 w-full relative">
            {label && (
                <label htmlFor={inputId} className="text-sm font-medium">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    id={inputId}
                    type={type === "password" && showPassword ? "text" : type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    aria-invalid={invalid}
                    className={clsx(
                        baseStyles,
                        variantStyles[variant],
                        sizeStyles[size],
                        disabled && "bg-gray-200 cursor-not-allowed",
                        invalid && "border-red-500"
                    )}
                />

                {/* Loading spinner */}
                {loading && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 animate-spin text-gray-400">
                        ⏳
                    </span>
                )}

                {/* Clear button */}
                {clearable && value && !loading && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        ✖
                    </button>
                )}

                {/* Password toggle */}
                {type === "password" && !loading && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? "🙈" : "👁"}
                    </button>
                )}
            </div>

            {helperText && !invalid && (
                <span className="text-xs text-gray-500">{helperText}</span>
            )}
            {invalid && errorMessage && (
                <span className="text-xs text-red-500">{errorMessage}</span>
            )}
        </div>
    );
};

export default InputField;
