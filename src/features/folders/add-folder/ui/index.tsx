import React, {useState} from "react";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import CreateFolderModal from "@/features/folders/add-folder-form/ui";

const CreateFolder: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="px-[30px] py-5 w-[295px] bg-purple-opacity  rounded-[15px] flex  gap-2 cursor-pointer dark:bg-purple-light-opacity flex-col">
            <div className="flex justify-between">
                <span className=" text-xl font-semibold mt-2">Создать папку</span>
                <div className="flex items-center justify-center bg-purple rounded-[10px] dark:bg-purple-light w-[54px] h-[54px]"
                     onClick={() => setIsOpen(true)}>
                    <ButtonIcon icon="uiw:plus" className=" w-[30px] h-[30px] dark:text-black text-white"/>
                </div>
            </div>
            <p>Создавайте папки и делитесь с друзьями</p>
            <CreateFolderModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
};

export default CreateFolder;