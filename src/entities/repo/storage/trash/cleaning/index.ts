import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {ICleaningTrashDto} from "@/shared/interface/trash";

const cleaningTrashRepository = async (storageId: string): Promise<AxiosResponse<ICleaningTrashDto>> => {
    return api.delete<ICleaningTrashDto>(`/file/clear-trash/${storageId}`);

};
export default cleaningTrashRepository;
