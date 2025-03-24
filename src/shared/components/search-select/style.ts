import { StylesConfig } from 'react-select';

export interface IOption {
    value: string;
    label: string;
}

export const customStyles: StylesConfig<IOption, false> = {
    control: (provided) => ({
        ...provided,
        borderColor: 'var(--color-purple-light)',
        borderWidth: '2px',
        borderRadius: '20px',
        padding: '0 10px',
        height: '52px',
        boxShadow: 'none',
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: 'white',
    }),
    option: (provided, state) => ({
        ...provided,
        padding: '10px 20px',
        backgroundColor: state.isSelected
            ? 'var(--color-purple-light)'
            : state.isFocused
                ? 'rgba(98, 70, 153, 0.1)'
                : 'transparent',
        color: state.isSelected ? 'white' : 'black',
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'black',
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
};
