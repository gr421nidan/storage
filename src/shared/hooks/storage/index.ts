import {createContext, useContext} from "react";

type ICurrentStorageContextProps = string | undefined;

const CurrentStorageContext = createContext<ICurrentStorageContextProps | null>(null);

const useCurrentStorage = () => {
    const context = useContext(CurrentStorageContext);
    if (!context) throw new Error("CurrentStorageContext is not implemented or undefined");
    return context;
};

export {CurrentStorageContext, useCurrentStorage};