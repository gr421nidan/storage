import React, { useState } from "react";
import {iconsSearchStyle, iconStyle, inputFieldStyle, separatorStyle} from "./style";
import { cn } from "@/shared/utils/cn";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface ISearchInputProps {
    placeholder?: string;
    className?: string;
    onSearch: (value: string) => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({placeholder, className, onSearch}) => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const handleSearchClick = () => {
        onSearch(search);
    };

    const handleClearSearch = () => {
        setSearch("");
        onSearch("");
    };

    return (
        <div className="relative w-fit">
            <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder={placeholder}
                className={cn(inputFieldStyle, className)}
            />
            <div className={iconsSearchStyle}>
                {search && (
                    <div className="flex">
                        <ButtonIcon
                            type="button"
                            className={iconStyle}
                            onClick={handleClearSearch}
                            icon="ic:round-close"
                        />
                        <div className={separatorStyle} />
                    </div>
                )}
                <ButtonIcon
                    type="button"
                    className={iconStyle}
                    onClick={handleSearchClick}
                    icon="bi:search"
                />
            </div>
        </div>
    );
};

export default SearchInput;
