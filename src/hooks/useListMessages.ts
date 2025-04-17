import { useInfiniteQuery } from "@tanstack/react-query";
import { OpenPhoneApi } from "../api/config";

interface IListMessages {
  phoneNumberId: string;
  participants: string[];
}

export const useListMessages = ({ phoneNumberId, participants}: IListMessages ) => {
  return useInfiniteQuery({
    queryKey: ["messagesList"],
    queryFn: async ({ pageParam }) => {
      try {
        console.log(pageParam);
        const { data } = await OpenPhoneApi.get("/messages", {params: {
          pageToken: pageParam,
          phoneNumberId,
          participants
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
