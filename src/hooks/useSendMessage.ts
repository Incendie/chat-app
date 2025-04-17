import { useMutation } from "@tanstack/react-query";
import { OpenPhoneApi } from "../api/config";

interface ISendMessage {
  content: string;
  from: string;
  to: string;
  userId: string;
}

export const useSendMessage = ( ) => {
  return useMutation({
    mutationFn: async ({ content, from, to, userId }: ISendMessage) => {
      if (!content || !from || !to) return null;

      try {

        const { data } = await OpenPhoneApi.post("/messages", {
          content, from, to, userId
        });

        return data;
      } catch (error) {

        console.error(`Error fetching phone list \n ${error}`);
      }
    },
  });
};
