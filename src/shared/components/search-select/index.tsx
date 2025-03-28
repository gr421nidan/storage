import {FC} from "react";
import Select from "react-select";
import {customStyles} from "@/shared/components/search-select/style.ts";

interface IUserSelectProps {
    options: { value: string; label: string }[];
    onChange: (selectedUser: { value: string; label: string } | null) => void;
    onInputChange: (value: string) => void;
    placeholder: string;
    className?:string;
}

const SearchSelect: FC<IUserSelectProps> = ({
                                              options,
                                              onChange,
                                              onInputChange,
                                              placeholder,
                                                className,
                                          }) => {
    return (
        <Select
            onInputChange={onInputChange}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            noOptionsMessage={() => "Совпадений не найдено"}
            className={className}
            isClearable
            styles={customStyles}
        />
    );
};

export default SearchSelect;
