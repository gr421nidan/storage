import React from 'react';
import Select from 'react-select';
import { customStyles } from "@/shared/components/search-select/style.ts";

interface Option {
    value: string;
    label: string;
}

interface SearchSelectProps {
    options: Option[];
    onChange: (selectedOption: Option | null) => void;
    value: Option | null;
    placeholder?: string;
    isSearchable?: boolean;
    className: string;
}

const SearchSelect: React.FC<SearchSelectProps> = ({
                                                       options,
                                                       onChange,
                                                       value,
                                                       placeholder,
                                                       className
                                                   }) => {
    const handleChange = (selectedItem: any) => {
        onChange(selectedItem);
    };

    return (
        <Select
            options={options}
            onChange={handleChange}
            value={value}
            getOptionLabel={(e: Option) => e.label}
            getOptionValue={(e: Option) => e.value}
            placeholder={placeholder}
            isClearable={true}
            isSearchable={true}
            filterOption={(candidate, input) => {
                if (!input) {
                    return false;
                }
                return candidate.label.toLowerCase().includes(input.toLowerCase());
            }}
            className={className}
            styles={customStyles}
            noOptionsMessage={() => "Нет совпадений"}
        />
    );
};

export default SearchSelect;
