import { useQuery } from "@tanstack/react-query";
import { OpenPhoneApi } from "../api/config";

export const useGetPhoneNumbers = () => {
  return useQuery({
    queryKey: ["phoneList"],
    queryFn: async () => {
      try {
        const { data } = await OpenPhoneApi.get("/phone-numbers");

        return data.data;
      } catch (error) {

        console.error(`Error fetching phone list \n ${error}`);
      }
    },
    enabled: true,
  });
};
