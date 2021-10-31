import { IActivity, ActivityType } from "../../domain/activity";

const db = require("../../db/models");

class ActivityRepository implements IActivity{

    store = async (params: ActivityType): Promise<any> => {
        const { 
            useragent, 
            type_name, 
            status_code, 
            message 
        } = params;
        try{
            return await db.activity.create({
                useragent,
                type_name,
                status_code,
                message
            });
        }catch(error: any){
            return {errors:error}
        }
    }
    
}

export default new ActivityRepository();