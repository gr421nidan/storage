import React, {PropsWithChildren} from "react";

interface IPageHeaderProps {
    className?: string;
}
const PageHeader: React.FC<PropsWithChildren<IPageHeaderProps>> = ({ children, className }) => {
    return (
        <div>
            <div className={className}>
                {children}
            </div>
            <div className="h-1 mb-[40px] bg-purple" />
        </div>
    );
};
export default PageHeader;