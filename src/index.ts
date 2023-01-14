import config from "./config";
import { Event } from "./models/Event";
import { Response } from "./models/Response";

export const handler = async (event: Event): Promise<Response | Error> => {
  console.log("Event: ", JSON.stringify(event), config.API);


  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Success",
    }),
  };
};
