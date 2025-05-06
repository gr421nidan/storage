import React, { useState, useEffect } from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import useAddUserAccessPresenter from "@/entities/cases/storage/folders/add-access-for-folder/presenter";
import useGetUsersWithAccessUseCase from "@/entities/cases/storage/folders/get-users-with-access/use-case";
import useDeleteUserPresenter from "@/entities/cases/storage/folders/delete-user-with-access/presenter";
import useGetAllUsersForAccessUseCase from "@/entities/cases/storage/folders/get-all-users/use-case";
import ChooseAccessForFolder from "@/features/folders/choose-access/ui";
import SearchSelect from "@/shared/components/search-select";
import debounce from "lodash/debounce";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import {errorTextStyles} from "@/features/auth/style.ts";
import styles from "../style";
import useCopyLinkFolderPresenter from "@/entities/cases/storage/folders/copy-link/presenter";

interface IAddAccessForFolderProps {
    isOpen: boolean;
    onClose: () => void;
    folderId: string;
}

const AddAccessForFolder: React.FC<IAddAccessForFolderProps> = ({ isOpen, onClose, folderId }) => {
    const { onSubmit, setValue, errors } = useAddUserAccessPresenter(folderId);
    const { users } = useGetUsersWithAccessUseCase(folderId);
    const { handleDeleteUser } = useDeleteUserPresenter();
    const {onCopyLink,} = useCopyLinkFolderPresenter({folderId});
    const [inputValue, setInputValue] = useState<string>("");
    const [debouncedValue, setDebouncedValue] = useState<string>("");

    useEffect(() => {
        const handler = debounce((value: string) => {
            setDebouncedValue(value);
        }, 500);

        handler(inputValue);

        return () => {
            handler.cancel();
        };
    }, [inputValue]);

    const { data: allUsers } = useGetAllUsersForAccessUseCase({ email: debouncedValue });

    const userOptions = (allUsers ?? []).map((user) => ({
        value: user.id,
        label: user.email,
    }));

    const handleUserChange = (selectedUser: { value: string; label: string } | null) => {
        setValue("user_id", selectedUser?.value || "");
    };

    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

    if (!isOpen) return null;

    return (
        <Modal title="Кто имеет доступ" className="w-[631px]" onClose={onClose}>
            <form onSubmit={onSubmit}>
                <div>
                    <SearchSelect
                        placeholder="Введите почту"
                        className="w-full"
                        options={userOptions}
                        onChange={handleUserChange}
                        onInputChange={handleInputChange}
                    />
                    {errors.user_id && (
                        <p className={errorTextStyles()}>{errors.user_id.message}</p>
                    )}
                    <div
                        className={cn(
                            styles.formContainer,
                            users.length > 0 ? styles.formContainerWithUsers : "h-[40px]"
                        )}
                    >
                        {users.map((user) => (
                            <div key={user.id} className={styles.userItem}>
                                <span className="text-base">{user.email}</span>
                                <ButtonIcon
                                    type="button"
                                    className={styles.buttonIcon}
                                    onClick={() => handleDeleteUser(user.id)}
                                    icon="ic:round-close"
                                />
                            </div>
                        ))}
                    </div>

                    <p className="text-xl">Настройка доступа:</p>

                    <div className={styles.accessSettings}>
                        <Button
                            onClick={onCopyLink}
                            className={cn(buttonStyles({variant: "baseSecondary"}), styles.buttonCopyLink)}
                        >
                            Копировать ссылку
                        </Button>
                        <ChooseAccessForFolder folderId={folderId} />
                    </div>

                    <div className={styles.buttonsContainer}>
                        <Button
                            type="button"
                            className={cn(buttonStyles({ variant: "baseSecondary" }), styles.buttonCancel)}
                            onClick={onClose}
                        >
                            Отменить
                        </Button>
                        <Button type="submit" className={styles.buttonSave}>
                            Сохранить
                        </Button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default AddAccessForFolder;
