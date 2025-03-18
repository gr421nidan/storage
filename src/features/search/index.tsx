import React, { InputHTMLAttributes, useState } from "react";
import { Icon } from "@iconify/react";

interface SearchFilterProps extends InputHTMLAttributes<HTMLInputElement> {
    onSearch: (query: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch, className, placeholder = "Поиск", ...props }) => {
    const [query, setQuery] = useState("");
    const [searched, setSearched] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setSearched(false);
    };

    const handleSearchClick = () => {
        if (query.trim() !== "") {
            onSearch(query);
            setSearched(true);
        }
    };

    const handleClearSearch = () => {
        setQuery("");
        onSearch("");
        setSearched(false);
    };

    return (
        <div className="relative w-fit">
            <input
                {...props}
                type="text"
                value={query}
                onChange={handleChange}
                placeholder={placeholder}
                className={`outline-none pr-[90px] pl-6 border-2 border-purple dark:bg-gray rounded-[20px] text-lg dark:text-white dark:placeholder-white ${className}`}
            />
            <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={searched ? handleClearSearch : handleSearchClick}
            >
                <Icon icon={searched ? "ic:round-close" : "bi:search"} className="w-7 h-7 dark:text-white" />
            </button>
        </div>
    );
};

export default SearchFilter;
