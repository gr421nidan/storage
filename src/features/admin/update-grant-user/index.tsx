import React from 'react';
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import {EGrantID} from "@/shared/type/admin";
import CustomSelect from "@/shared/components/select";
import useUpdateUsersGrantPresenter from "@/entities/cases/user-storage/update-user/presenter";

interface IUpdateUserGrantsProps {
    isOpen: boolean;
    onClose: () => void;
    userId: string;
}

const UpdateUserGrants: React.FC<IUpdateUserGrantsProps> = ({isOpen, onClose, userId}) => {
    const {watch, onSubmit, setValue, errors} = useUpdateUsersGrantPresenter(userId);
    const grantOptions = [
        {value: EGrantID.VIEW, label: "Просмотр"},
        {value: EGrantID.FULL_ACCESS, label: "Полный доступ"},
    ];
    if (!isOpen) return null;
    return (
        <Modal title="Изменение прав доступа" className="w-[655px]" onClose={onClose}>
            <div>
                <p className='text-xl'>
                    Вы хотите поменять права доступа к хранилищу?
                </p>
                <form className="mt-[40px] flex gap-4 justify-center" onSubmit={onSubmit}>
                    <CustomSelect options={grantOptions}
                                  className="h-[52px] w-[248px]"
                                  isError={!!errors.grant_id}
                                  defaultLabel="Права"
                                  onChange={(val) => setValue("grant_id", val as EGrantID)}
                                  value={watch("grant_id")}/>
                    <Button type="submit" className="w-[190px] h-[52px]">
                        Сохранить
                    </Button>
                </form>
            </div>
        </Modal>
    );
};

export default UpdateUserGrants;
