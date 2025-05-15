import {QueryKey, useQueryClient} from "@tanstack/react-query";

const useInvalidateManyQueries = () => {
    const queryClient = useQueryClient();

    return async (keys: QueryKey[]) => {
        await Promise.all(
            keys.map((key) =>
                queryClient.invalidateQueries({queryKey: key})
            )
        );
    };
};

export default useInvalidateManyQueries;