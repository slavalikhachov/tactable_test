interface ITodoClient
{
    makeCall();
}

interface IApiManager
{
    fetchData();
}

interface TodoUser
{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export {IApiManager, ITodoClient, TodoUser}