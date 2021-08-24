import {handler} from "./index";


const main = async () => {
    console.log("Starting test");

    const event = {
        headers: "123",
        body: "123"
    };

    const resp = await handler(event);
    console.log(resp);

};

main();


