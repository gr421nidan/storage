import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import {EGrantID} from "@/shared/emum/admin";
import CustomSelect from "@/shared/components/select";
import useUpdateUsersGrantPresenter from "@/entities/cases/user-storage/update-user/presenter";

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
    const {watch, onSubmit, setValue, errors} = useUpdateUsersGrantPresenter(userId);

    const grantOptions = [
        {value: EGrantID.VIEW, label: "Просмотр"},
        {value: EGrantID.FULL_ACCESS, label: "Полный доступ"},
    ];

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
                <div className="flex justify-center gap-[155px] mt-6 w-full">
                    <Button type="submit" className="w-[217px] h-[52px]">Сохранить</Button>
                    <Button className="w-[206px] h-[52px]" onClick={onClose}>Отмена</Button>
                </div>
            </form>
        </Modal>
    );
};

export default UpdateUserGrants;
