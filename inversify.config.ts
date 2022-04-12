import { Container } from "inversify";
import { ITodoClient } from "./interfaces";
import { TodoClient } from "./implementations";
import { TYPES } from "./types";

const myContainer = new Container();
myContainer.bind<ITodoClient>(TYPES.ClientClass).to(TodoClient);

export { myContainer };