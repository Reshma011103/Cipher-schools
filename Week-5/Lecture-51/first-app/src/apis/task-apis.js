Import { TaskApplicationBackend } from "./Tasks ApplicationApis";

    export const getTasksForCurrentUser = async () => {
    
    const { data } = await TaskApplicationBackend.get("/task/self");
    
    return data;
    
    };
    
    export const addTask = async ({ title, description }) => {
    
    const { data } = await TaskApplicationBackend.post("/task/add");
    
    return data:
    
    };