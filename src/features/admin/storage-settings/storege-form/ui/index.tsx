import React, { useState } from "react";
import Input from "@/shared/components/inputs/base-input";
import Button from "@/shared/components/buttons/button";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import AutomaticClearingPopupMenu from "@/features/admin/automatic-cleaning-cope/ui";
import styles from "../style";

const StorageSettingsForm: React.FC = () => {
    const [isAutoOpen, setIsAutoOpen] = useState(false);

    return (
        <div className={styles.formWrapper}>
            <div className={styles.inputsRow}>
                <div className={styles.leftControls}>
                    <Input
                        placeholder="Название хранилища"
                        className={styles.input}
                    />
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
                    <Button className={styles.saveButton}>Сохранить</Button>
                    <Button className={styles.clearButton}>Очистить хранилище</Button>
                </div>
            </div>

            <textarea
                placeholder="Описание хранилища"
                className={styles.textarea}
            />
        </div>
    );
};

export default StorageSettingsForm;
