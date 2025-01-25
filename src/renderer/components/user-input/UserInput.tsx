import React, { useState } from "react";
import "./UserInput.css";

export const TextInput: React.FC<{
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onEnterPress?: (value: string) => void;
}> = ({ placeholder = "Type here...", value = "", onChange, onEnterPress }) => {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && onEnterPress && inputValue.length > 0) {
            onEnterPress(inputValue); // Trigger the callback when Enter is pressed
            setInputValue("")
        }
    };


    return (
        <div className="text-input-container">
            <input
                type="text"
                className="text-input"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};