import { StylesConfig } from 'react-select';

export interface IOption {
    value: string;
    label: string;
}

export const customStyles: StylesConfig<IOption, false> = {
    control: (provided) => ({
        ...provided,
        borderColor: 'var(--color-border-search-select-text)',
        borderWidth: '2px',
        borderRadius: '20px',
        padding: '0 10px',
        height: '52px',
        boxShadow: 'none',
        backgroundColor: 'var(--color-search-select)',
        color: 'var(--color-search-select-text)',
        '&:hover': {
            borderColor: 'var(--color-purple-light)',
        },
        '&:focus': {
            borderColor: 'var(--color-purple)',
        },
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: 'var(--color-menu-background)',
        fontSize: '20px',
    }),
    option: (provided, state) => ({
        ...provided,
        padding: '10px 20px',
        backgroundColor: state.isSelected
            ? 'var(--color-purple-light)'
            : state.isFocused
                ? 'rgba(98, 70, 153, 0.1)'
                : 'transparent',
        color: state.isSelected ? 'white' : 'var(--color-search-select-text)',
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'var(--color-search-select-text)',
        fontSize: '20px',
    }),
    clearIndicator: (provided) => ({
        ...provided,
        color: 'var(--color-purple-light)',
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        display: 'none',
    }),
    input: (provided) => ({
        ...provided,
        color: 'var(--color-input-text)',
        fontSize: '20px',
    }),
    singleValue: (provided) => ({
        ...provided,
        fontSize: '20px',
        color: 'var(--color-input-text)',
    }),
};
