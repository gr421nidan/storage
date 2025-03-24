import React from 'react';
import Select from 'react-select';
import { customStyles } from "@/shared/components/search-select/style";

interface IOption {
    value: string;
    label: string;
}

interface ISearchSelectProps {
    options: IOption[];
    onChange: (selectedOption: IOption | null) => void;
    value: IOption | null;
    placeholder?: string;
    isSearchable?: boolean;
    className?: string;
}

const SearchSelect: React.FC<ISearchSelectProps> = ({
                                                        options,
                                                        onChange,
                                                        value,
                                                        placeholder,
                                                        isSearchable = true,
                                                        className}) => {
    return (
        <Select
            options={options}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            isClearable={true}
            isSearchable={isSearchable}
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
