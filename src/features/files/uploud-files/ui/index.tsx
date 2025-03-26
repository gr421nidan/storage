import React from "react";

const FilesUpload: React.FC = () => {
    return (
        <div className="flex px-[33px] py-[26px] bg-purple-opacity dark:bg-purple-light-opacity rounded-[15px] gap-4">
            <div className="w-[234px] flex flex-col gap-[21px]">
                <p className="text-xl font-semibold">Загрузить файлы</p>
                <p>Нажмите или перетащите файлы для загрузки в Облако</p>
            </div>
            <div className="bg-purple-opacity dark:bg-purple-light-opacity rounded-[15px] border-2 border-dashed border-purple dark:border-black cursor-pointer flex items-center px-[35px]">
                <p className="text-center">
                    <span className="text-purple dark:text-black">Нажмите</span> или перенесите<br></br> файлы для загрузки
                </p>
            </div>
        </div>
    );
};

export default FilesUpload;