import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {ICleaningTrashDto} from "@/shared/interface/trash";

const cleaningTrashRepository = async (): Promise<AxiosResponse<ICleaningTrashDto>> => {
    return api.delete<ICleaningTrashDto>(`/storage/`);

};
export default cleaningTrashRepository;
