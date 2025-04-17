import { useInfiniteQuery } from "@tanstack/react-query";
import { OpenPhoneApi } from "../api/config";

export const useGetConversations = () => {
  return useInfiniteQuery({
    queryKey: ["conversastionsList"],
    queryFn: async ({ pageParam }) => {
      try {
        const { data } = await OpenPhoneApi.get("/conversations", {params: {
          pageToken: pageParam
        }
        });

        return data;
      } catch (error) {

        console.error(`Error fetching phone list \n ${error}`);
      }
    },
    initialPageParam: null,
    enabled: true,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => lastPage.nextPageToken,
    getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  });
};
