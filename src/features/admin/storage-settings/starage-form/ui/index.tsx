import { ReactNode, useState } from "react";
import Input from "@/shared/components/inputs/base-input";
import Button from "@/shared/components/buttons/button";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import DiskCleanupConfirm from "@/features/storage/confirm_disk_cleanup/ui";
import { styles } from "../style";
import { cn } from "@/shared/utils/cn";
import { inputsStyles } from "@/shared/components/inputs/style.ts";
import { errorTextStyles } from "@/features/auth/style.ts";
import useGetStorageInfoUseCase from "@/entities/cases/user-storage/get-info/use-case";
import useUpdateStoragePresenter from "@/entities/cases/user-storage/update-storage/presenter";
import { IUpdateStoragePort } from "@/shared/interface/storage";
import AutomaticCleanupPopupMenu from "@/features/admin/storage-settings/automatic-cleanup/ui";

const StorageSettingsForm = (): ReactNode => {
    const [isAutoOpen, setIsAutoOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data } = useGetStorageInfoUseCase();

    const {
        register,
        onSubmit,
        errors,
    } = useUpdateStoragePresenter();

    const isError = (field: keyof IUpdateStoragePort) => !!errors[field];

    return (
        <form onSubmit={onSubmit} className={styles.formWrapper}>
            <div className={styles.inputsRow}>
                <div className={styles.leftControls}>
                    <div>
                        <Input
                            type="text"
                            placeholder="Название хранилища"
                            defaultValue={data?.title || ""}
                            className={cn(inputsStyles({ error: isError("title") }), styles.input)}
                            {...register("title")}
                        />
                        {errors.title && <p className={errorTextStyles()}>{errors.title.message}</p>}
                    </div>
                    <div className={styles.relativeWrapper}>
                        <ButtonIcon
                            icon="simple-line-icons:arrow-down"
                            className={styles.dropdownButton}
                            onClick={() => setIsAutoOpen(true)}
                        >
                            Автоматическая очистка
                        </ButtonIcon>
                        <AutomaticCleanupPopupMenu
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
                        onClick={() => setIsModalOpen(true)}
                    >
                        Очистить хранилище
                    </Button>
                </div>

                {isModalOpen && (
                    <DiskCleanupConfirm
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>

            <div>
                <textarea
                    placeholder="Описание хранилища"
                    defaultValue={data?.description || ""}
                    className={cn(styles.textarea, isError("description") && styles.errorTextarea)}
                    {...register("description")}
                />
                {errors.description && (
                    <p className={errorTextStyles()}>{errors.description.message}</p>
                )}
            </div>
        </form>
    );
};

export default StorageSettingsForm;
