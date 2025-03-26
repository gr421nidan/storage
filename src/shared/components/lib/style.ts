export const menuButtonClass =
    "flex items-center justify-center w-10 h-10 rounded-full " +
    "hover:bg-purple-light/20 transition text-purple";

export const iconClass = "w-5 h-5 text-purple-light";

// Общий класс для всех меню
export const menuClass = `
  border border-purple-light
  bg-white dark:bg-gray
  text-black dark:text-white
  rounded-xl shadow-lg
  min-w-[180px]
  overflow-hidden
  shadow-[0_0_10px_rgba(130,70,153,0.3)]
`;

// Пункты меню (иконки + текст)
export const menuItemClass = `
  flex items-center gap-2 px-4 py-2
  hover:bg-purple-light/10
  transition-colors
`;

// Пункты меню с более сплошным фоном при hover
export const menuItemSolidHover = `
  hover:bg-purple-light
`;

// Разделитель (горизонтальная линия)
export const menuDividerClass = `
  w-full h-[1px] bg-purple-light my-[2px]
`;
