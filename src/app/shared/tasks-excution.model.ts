export class TasksExcution {
    id: string ;
    name: string ;
    statusTask:string;
    task: Tasks ;
    taskStartDate: Date ;
    taskEndDate: number | null;
}

export class Tasks {
    id: string ;
    name: string ;
    tableName: string ;
    actionType: string | null;
}
