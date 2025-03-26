import React from "react";

interface IPageHeaderProps {
    title: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({title}) => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <h2 className="dark:text-white">{title}</h2>
                <div className="h-1 mt-4 bg-purple"></div>
            </div>
        </div>
    );
};
export default PageHeader;