import {api} from "@/shared/api";
import {IConnectStorageS3Dto, IConnectStorageS3Port} from "@/shared/interface/storage";

const connectStorageS3Repository = async (data: IConnectStorageS3Port): Promise<IConnectStorageS3Dto> => {
    const response = await api.post<IConnectStorageS3Dto>(`/storage/connect/`, data);
    return response.data;
};
export default connectStorageS3Repository;
