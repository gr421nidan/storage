import React from "react";
import Input from "@/shared/components/inputs/base-input";
import Button from "@/shared/components/buttons/button";
import styles from "../style";
import ButtonIcon from "@/shared/components/buttons/button-icon";

export const StorageSettingsForm: React.FC = () => {
    return (
        <div className={styles.formWrapper}>
            <div className={styles.inputsRow}>
                <div className="flex gap-[8px]">
                    <Input
                        placeholder="Название хранилища"
                        className="h-[52px] w-[289px]"
                    />

                    <ButtonIcon className="h-[52px] w-[358px]" icon="simple-line-icons:arrow-down">Автоматическая очистка</ButtonIcon>
                </div>
                <div className="flex gap-[8px]">
                    <Button className="h-[52px] w-[162px]">Сохранить</Button>
                    <Button className="h-[52px] w-[281px]">Очистить хранилище</Button>
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
