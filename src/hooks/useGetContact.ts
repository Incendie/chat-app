import { useQuery } from "@tanstack/react-query";
import { OpenPhoneApi } from "../api/config";


export const useGetContact = (id?: string) => {
  return useQuery({
    queryKey: ["contact", id],
    queryFn: async () => {
      if (!id) return null;

      try {
        const { data } = await OpenPhoneApi.get("/contacts", {
          params: {
            id
          }
        });

        return data.data;
      } catch (error) {

        console.error(`Error fetching phone list \n ${error}`);
      }
    },
    enabled: true,
  });
};
