import React, { useState } from "react";
import Input from "@/shared/components/inputs/base-input";
import Button from "@/shared/components/buttons/button";
import styles from "../style";
import ButtonIcon from "@/shared/components/buttons/button-icon";

const cleanOptions = [
    { value: "auto-clean", label: "Автоматическая очистка" },
    { value: "manual", label: "Ручная очистка" },
] as const;

const noMagicOptionsNumber = 0;

export const StorageSettingsForm: React.FC = () => {
    const [storageName, setStorageName] = useState("");
    const [cleanMode, setCleanMode] = useState<typeof cleanOptions[number]["value"]>(
        cleanOptions[noMagicOptionsNumber].value
    );
    const [description, setDescription] = useState("");

    const handleSave = () => {
        console.log({ storageName, cleanMode, description });
    };

    const handleClear = () => {
        setStorageName("");
        setCleanMode(cleanOptions[noMagicOptionsNumber].value);
        setDescription("");
    };

    return (
        <div className={styles.formWrapper}>
            <div className={styles.inputsRow}>
                <Input
                    placeholder="Название хранилища"
                    className="h-[52px] w-[289px]"
                    value={storageName}
                    onChange={(e) => setStorageName(e.target.value)}
                />

                <ButtonIcon className="h-[52px] w-[358px]" icon="solar:alt-arrow-down-outline">Автоматическая очистка</ButtonIcon>

                <Button className="h-[52px] w-[162px]" onClick={handleSave}>Сохранить</Button>
                <Button className="h-[52px] w-[281px]" onClick={handleClear}>Очистить хранилище</Button>
            </div>

            <textarea
                placeholder="Описание хранилища"
                className={styles.textarea}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
    );
};

export default StorageSettingsForm;
