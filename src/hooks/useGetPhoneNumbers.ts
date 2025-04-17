import { useQuery } from "@tanstack/react-query";
import { apiKey } from "../constants/api";
import axios from "axios";

export const useGetPhoneNumbers = () => {
  return useQuery({
    queryKey: ["phoneList"],
    queryFn: async () => {
      try {
        const { data } = await axios.get("/v1/phone-numbers", {
          headers: {
            Authorization: apiKey,
          },
        });

        return data.data;
      } catch (error) {

        console.error(`Error fetching phone list \n ${error}`);
      }
    },
    enabled: true,
  });
};
