import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import {EGrantID} from "@/shared/emum/admin";
import CustomSelect from "@/shared/components/select";
import useUpdateUsersGrantPresenter from "@/entities/cases/user-storage/update-user/presenter";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import {buttonsContainerStyle} from "../style";

interface IUpdateUserGrantsProps {
    isOpen: boolean;
    onClose: () => void;
    userId: string;
}

const UpdateUserGrants: React.FC<IUpdateUserGrantsProps> = ({
                                                                isOpen,
                                                                onClose,
                                                                userId,
                                                            }) => {
    const {watch, onSubmit, setValue, errors} = useUpdateUsersGrantPresenter(userId, onClose);

    const grantOptions = [
        {value: EGrantID.VIEW, label: "Просмотр"},
        {value: EGrantID.FULL_ACCESS, label: "Полный доступ"},
    ];
    const buttonsSize ="h-[52px]"
    if (!isOpen) return null;

    return (
        <Modal title="Изменение прав доступа" className="w-[655px]" onClose={onClose}>
            <p className="text-xl">
                Вы хотите поменять права доступа к хранилищу?
            </p>
            <form onSubmit={onSubmit} className="flex flex-col items-center mt-6">
                <CustomSelect
                    options={grantOptions}
                    className="h-[52px] w-[248px]"
                    isError={!!errors.grant_id}
                    defaultLabel="Права"
                    onChange={(val) => setValue("grant_id", val as EGrantID)}
                    value={watch("grant_id")}/>
                <div className={buttonsContainerStyle}>
                    <Button className={cn(buttonStyles({ variant: "baseSecondary" }), "w-[206px]", buttonsSize )} onClick={onClose}>Отменить</Button>
                    <Button type="submit" className={`w-[217px] ${buttonsSize}`}>Сохранить</Button>
                </div>
            </form>
        </Modal>
    );
};

export default UpdateUserGrants;
