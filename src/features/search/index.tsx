import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface SearchFilterProps {
    onSearch: (query: string) => void;
    placeholder?: string;
    className?: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch, placeholder = "Поиск", className = "" }) => {
    const [query, setQuery] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearchClick = () => {
        if (query.trim() !== "") {
            onSearch(query);
        }
    };

    const handleClear = () => {
        setQuery("");
        onSearch("");
    };

    return (
        <div className="relative w-fit">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder={placeholder}
                className={`pr-[90px] pl-6 border-2 border-purple dark:bg-gray rounded-[20px] text-lg dark:placeholder-white ${className}`}
            />
            {query && (
                <button type="button" className="absolute right-12 top-1/2 -translate-y-1/2" onClick={handleClear}>
                    <Icon icon="ic:round-close" className="w-7 h-7  dark:text-white" />
                </button>
            )}
            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2" onClick={handleSearchClick}>
                <Icon icon="bi:search" className="w-7 h-7 dark:text-white" />
            </button>
        </div>
    );
};

export default SearchFilter;