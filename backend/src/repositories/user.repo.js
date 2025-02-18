import userModel from "../schemas/user.schema.js";
import crudFunctions from "./crud.js";


const userRepo = {
    ...crudFunctions(userModel),
    getUserByEmail : async function (email) {
        const user = await userModel.findOne({email : email});
        return user
    }
}

export default userRepo;