type ActivityType = { 
    useragent: object, 
    type_name: string,
    status_code: number,
    message: string
};

enum ActivityName {
    GET_SEARCH = 'GET_SEARCH',
    GET_DETAIL = 'GET_DETAIL'
} 

interface IActivity {
    store(params: ActivityType): any;
}

interface IActivityFactory {
    create(params: any): IActivity | Promise<IActivity>;
}
    
export {
    IActivityFactory,
    IActivity,
    ActivityType,
    ActivityName
}
