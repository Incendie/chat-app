import { useInfiniteQuery } from "@tanstack/react-query";
import { OpenPhoneApi } from "../api/config";

interface IListMessages {
  phoneNumberId: string;
  participants: string[];
}

export const useListMessages = ({ phoneNumberId, participants}: IListMessages ) => {
  return useInfiniteQuery({
    queryKey: ["messagesList", phoneNumberId, participants],
    queryFn: async ({ pageParam }) => {
      if (!phoneNumberId && !participants) return null;

      console.log({phoneNumberId, participants});
      try {

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
    enabled: !!phoneNumberId && !!participants,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => lastPage.nextPageToken,
    getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  });
};
