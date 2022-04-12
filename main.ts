import { IApiManager, ITodoClient } from "./interfaces";

class ApiManager implements IApiManager {
    
    m_todoClient: ITodoClient;

    constructor(todoClient: ITodoClient){
        this.m_todoClient = todoClient;
    }

    public fetchData() {
        this.m_todoClient.makeCall();
    }
}

export { ApiManager }