import React from "react";

const ForbiddenPage: React.FC = () => {
    return (
        <div>
            <h1>403 - Доступ запрещен</h1>
            <p>У вас нет прав для доступа к этому ресурсу.</p>
        </div>
    );
};

export default ForbiddenPage;