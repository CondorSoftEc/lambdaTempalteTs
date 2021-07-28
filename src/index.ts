import config from "./config";

export const handler = async (event: any): Promise<any | Error> => {
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
