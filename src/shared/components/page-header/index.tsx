import React, {PropsWithChildren} from "react";

const PageHeader: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <div>{children}</div>
            <div className="h-1 mt-4 bg-purple"></div>
        </div>
    );
};
export default PageHeader;