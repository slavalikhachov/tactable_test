import { expect, jest, it, test } from "@jest/globals";
import { TodoClient } from "../implementations";
import { ITodoClient } from "../interfaces";
import { myContainer } from "../inversify.config";
import {ApiManager} from '../main';
import { TYPES } from "../types";

const mockMakeCall = jest.fn().mockReturnValue([]);

it("fake API call", () => {
    var clientClass = myContainer.get<ITodoClient>(TYPES.ClientClass);
    clientClass.makeCall = mockMakeCall;
    
    var manager = new ApiManager(clientClass);
    manager.fetchData();

    expect(mockMakeCall).toHaveBeenCalled();
});

it("test injection", () => {

    var clientClass = myContainer.get<ITodoClient>(TYPES.ClientClass);

    expect(clientClass.constructor.name).toBe("TodoClient");
});
