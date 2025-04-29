// import {api} from "@/shared/api";
// import {IGetUsersWithAccessDto} from "@/shared/interface/folders";
//
// const getUsersWithAccessRepository = async (folderId: string): Promise<IGetUsersWithAccessDto> => {
//     const response = await api.get<IGetUsersWithAccessDto>(`/file/folder/${folderId}`);
//     return response.data;
// };
//
// export default getUsersWithAccessRepository;
import { IGetUsersWithAccessDto } from "@/shared/interface/folders";

const getUsersWithAccessRepository = async (folderId: string): Promise<IGetUsersWithAccessDto> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const mockData: IGetUsersWithAccessDto = {
        users: [
            { id: "1", email: "ivanov@example.com" },
            { id: "2", email: "petrova@example.com" },
            { id: "3", email: "sidorov@example.com" },
            { id: "4", email: "sidorov4@example.com" },
            { id: "5", email: "sidorov1@example.com" },
        ],
    };

    return mockData;
};

export default getUsersWithAccessRepository;
