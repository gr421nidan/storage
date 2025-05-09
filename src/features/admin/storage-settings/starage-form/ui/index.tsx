import { ReactNode, useState } from "react";
import Input from "@/shared/components/inputs/base-input";
import Button from "@/shared/components/buttons/button";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import AutomaticClearingPopupMenu from "@/features/admin/automatic-cleaning-cope/ui";
import {styles} from "../style";
import DiskCleanupConfirm from "@/features/storage/confirm_disk_cleanup";
import useUpdateStoragePresenter from "@/entities/cases/storage/settings/update/presenter";
import { errorTextStyles } from "@/features/auth/style.ts";
import {cn} from "@/shared/utils/cn";
import {inputsStyles} from "@/shared/components/inputs/style.ts";
import {IUpdateStoragePort} from "@/shared/interface/storage";

const StorageSettingsForm = (): ReactNode => {
    const [isAutoOpen, setIsAutoOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        register,
        onSubmit,
        errors,
    } = useUpdateStoragePresenter();

    const handleCleanupDiskClick = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const isError = (field: keyof IUpdateStoragePort): boolean => !!errors[field];
    return (
        <form onSubmit={onSubmit} className={styles.formWrapper}>
            <div className={styles.inputsRow}>
                <div className={styles.leftControls}>
                    <div>
                        <Input
                            placeholder="Название хранилища"
                            className={cn(inputsStyles({error: isError("title")}), styles.input)}
                            {...register("title")}
                        />
                        {errors.title && (
                            <p className={errorTextStyles()}>
                                {errors.title.message}
                            </p>
                        )}
                    </div>
                    <div className={styles.relativeWrapper}>
                        <ButtonIcon
                            icon="simple-line-icons:arrow-down"
                            className={styles.dropdownButton}
                            onClick={() => setIsAutoOpen(true)}
                        >
                            Автоматическая очистка
                        </ButtonIcon>
                        <AutomaticClearingPopupMenu
                            isOpen={isAutoOpen}
                            onClose={() => setIsAutoOpen(false)}
                        />
                    </div>
                </div>

                <div className={styles.rightControls}>
                    <Button type="submit" className={styles.saveButton}>
                        Сохранить
                    </Button>
                    <Button
                        type="button"
                        className={styles.clearButton}
                        onClick={handleCleanupDiskClick}
                    >
                        Очистить хранилище
                    </Button>
                </div>

                {isModalOpen && (
                    <DiskCleanupConfirm
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
            <div>
                <textarea
                    placeholder="Описание хранилища"
                    className={cn(styles.textarea, isError("description") ? styles.errorTextarea : "")}
                    {...register("description")}
                />
                {errors.description && (
                    <p className={errorTextStyles()}>
                        {errors.description.message}
                    </p>
                )}
            </div>
        </form>
    );
};

export default StorageSettingsForm;
