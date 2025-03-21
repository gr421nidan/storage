export const customStyles = {
    control: (styles: any) => ({
        ...styles,
        borderColor: 'var(--color-purple-light)',  // Используем цвет из глобальной темы
        borderWidth: '2px',
        borderRadius: '20px',
        padding: '0 10px',
        height: '52px', // Устанавливаем нужную высоту
        boxShadow: 'none', // Убираем тень
    // Убираем фоновый цвет
    }),
    menu: (styles: any) => ({
        ...styles,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Можно оставить для меню, чтобы оно не сливалось с фоном
    }),
    option: (styles: any, state: any) => ({
        ...styles,
        padding: '10px 20px',
        backgroundColor: state.isSelected
            ? 'var(--color-purple-light)' // Цвет при выборе
            : state.isFocused
                ? 'rgba(98, 70, 153, 0.1)' // Цвет при фокусе
                : 'transparent', // Обычное состояние
        color: state.isSelected ? 'white' : 'black',
    }),
    placeholder: (styles: any) => ({
        ...styles,
        color: 'black', // Цвет плейсхолдера
    }),
    clearIndicator: (styles: any) => ({
        ...styles,
        color: 'var(--color-purple-light)', // Скрываем кнопку очистки
    }),
    indicatorSeparator: (styles: any) => ({
        ...styles,
        display: 'none', // Скрываем разделитель
    }),
    dropdownIndicator: (styles: any) => ({
        ...styles,
        display: 'none', // Скрываем стрелку вниз
    }),
};
