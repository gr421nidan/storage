import React from 'react';
import Input from '@/shared/components/inputs/base-input';
import CustomSelect from '@/shared/components/select';
import Button from '@/shared/components/buttons/button';
import styles from '../style';

export const StorageSettingsForm: React.FC = () => (
    <div className={styles.formWrapper}>
        <div className={styles.inputsRow}>
            <Input
                placeholder="Название хранилища"
                className="w-[300px]"
            />
            <CustomSelect
                options={[
                    { value: 'auto-clean', label: 'Автоматическая очистка' },
                    { value: 'manual', label: 'Ручная очистка' },
                ]}
                className="w-[250px]"
            />
            <Button className="h-[54px] w-[162px]">Сохранить</Button>
            <Button className="h-[52px] w-[281px]">Очистить хранилище</Button>
        </div>
        <textarea
            placeholder="Описание хранилища"
            className={styles.textarea}
        />
    </div>
);

export default StorageSettingsForm;
