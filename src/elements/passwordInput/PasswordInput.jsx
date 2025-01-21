import React, { useState } from 'react';
import EyeIcon from "../../assets/genearlIcons/EyeIcon.svg";
import EyeCloseIcon from "../../assets/genearlIcons/EyeCloseIcon.svg";

const PasswordInput = ({
    id,
    name,
    value,
    onChange,
    label,
    placeholder,
    required = false,
    error = '',
    className = '',
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="relative flex-1 min-w-[1px]">
            {label && (
                <label htmlFor={id} className="block font-bold mb-[5px]">
                    {label}
                </label>
            )}
            <input
                type={showPassword ? 'text' : 'password'}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={`w-full border rounded-md px-2 py-1 pr-8 ${className}`} // Add `pr-10` for padding on the right
            />
            <button
                type="button"
                onClick={toggleShowPassword}
                className={`absolute right-2 ${label ?'top-[57%]':'top-[50%]' } transform -translate-y-1/2`} // Center the button vertically
            >
                {showPassword ? (
                    <img src={EyeIcon} alt="Show" width={18} height={18} />
                ) : (
                    <img src={EyeCloseIcon} alt="Hide" width={18} height={18} />
                )}
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>
    );
};
export default PasswordInput;