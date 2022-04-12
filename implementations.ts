import axios from "axios";
import { injectable } from "inversify";
import "reflect-metadata";
import { ITodoClient } from "./interfaces";

const STATIC_URL = "https://jsonplaceholder.typicode.com/todos";
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_NO_CONTENT = 204;

@injectable()
class TodoClient implements ITodoClient {
    public async makeCall(): Promise<any> {
        //make REST call to https://jsonplaceholder.typicode.com/todos
        let response = await axios.get(STATIC_URL);

        if (response == null)
        {
            //do something meaningful
            return;
        }
        else if (response.status == HTTP_STATUS_OK)
        {
            //do something with the result, like bind it to TodoUser
            return;
        }
        else if (response.status == HTTP_STATUS_NO_CONTENT)
        {
            //nothing to do here, but want to make sure we handle the success...successfully
            return;
        }
        else
        {
            //something went wrong
            return;
        }

        
    }
}

export {TodoClient}