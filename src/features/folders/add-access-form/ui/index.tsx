import React, {useState, useEffect} from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
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
import copyLink from "@/shared/utils/copy-link";
import {Controller} from "react-hook-form";

interface IAddAccessForFolderProps {
    isOpen: boolean;
    onClose: () => void;
    folderId: string;
}

const AddAccessForFolder: React.FC<IAddAccessForFolderProps> = ({isOpen, onClose, folderId}) => {
    const timeDebounce = 700;
    const {onSubmit, setValue, errors, control, watch} = useAddUserAccessPresenter(folderId);
    const {users} = useGetUsersWithAccessUseCase(folderId);
    const {handleDeleteUser} = useDeleteUserPresenter();
    const [inputValue, setInputValue] = useState<string>("");
    const [debouncedValue, setDebouncedValue] = useState<string>("");
    const userId = watch("user_id");
    useEffect(() => {
        const handler = debounce((value: string) => {
            setDebouncedValue(value);
        }, timeDebounce);

        handler(inputValue);

        return () => {
            handler.cancel();
        };
    }, [inputValue]);

    const {data: allUsers} = useGetAllUsersForAccessUseCase({email: debouncedValue});

    const userOptions = (allUsers ?? []).map((user) => ({
        value: user.id,
        label: user.email,
    }));

    const handleUserChange = (selectedUser: { value: string } | null) => {
        setValue("user_id", selectedUser?.value || "");
    };
    const handleInputChange = (value: string) => {
        setInputValue(value);
    };
    const deleteUserHandler = (userId: string) => {
        handleDeleteUser(userId, folderId);
    };
    if (!isOpen) return null;

    return (
        <Modal title="Кто имеет доступ" className="w-[631px]" onClose={onClose}>
            <form onSubmit={onSubmit}>
                <div>
                    <Controller
                        name="user_id"
                        control={control}
                        render={({field}) => (
                            <SearchSelect
                                {...field}
                                placeholder="Введите почту"
                                className="w-full"
                                options={userOptions}
                                onInputChange={handleInputChange}
                                onChange={handleUserChange}
                            />
                        )}
                    />
                    {errors.user_id && (
                        <p className={errorTextStyles()}>{errors.user_id.message}</p>
                    )}
                    <div
                        className={cn(
                            styles.formContainer,
                            users.length > 0 ? styles.formContainerWithUsers : "h-0"
                        )}
                    >
                        {users.map((user) => (
                            <div key={user.id} className={styles.userItem}>
                                <span className="text-base">{user.email}</span>
                                <ButtonIcon
                                    type="button"
                                    className={styles.buttonIcon}
                                    onClick={() => deleteUserHandler(user.id)}
                                    icon="ic:round-close"
                                />
                            </div>
                        ))}
                    </div>

                    <p className="text-xl">Настройка доступа:</p>

                    <div className={styles.accessSettings}>
                        <Button
                            onClick={() => copyLink(folderId, "folder")}
                            className={cn(buttonStyles({variant: "baseSecondary"}), styles.buttonCopyLink)}
                        >
                            Копировать ссылку
                        </Button>
                        <ChooseAccessForFolder folderId={folderId}/>
                    </div>

                    <div className={styles.buttonsContainer}>
                        <Button
                            type="button"
                            className={cn(buttonStyles({variant: "baseSecondary"}), styles.buttonCancel)}
                            onClick={onClose}
                        >
                            Отменить
                        </Button>
                        <Button type="submit" className={styles.buttonSave} disabled={!userId}>
                            Сохранить
                        </Button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default AddAccessForFolder;
