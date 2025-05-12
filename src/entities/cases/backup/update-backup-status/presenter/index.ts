import useUpdateBackupStatusUseCase from "../use-case";
import {IUpdateBackupStatusPort} from "@/shared/interface/backup";

const useUpdateBackupStatusPresenter = () => {
    const {mutateAsync} = useUpdateBackupStatusUseCase();

    const handleUpdateBackupStatus = async (data:IUpdateBackupStatusPort) => {
        await mutateAsync(data);
    };

    return {
        handleUpdateBackupStatus,
    };
};

export default useUpdateBackupStatusPresenter;
