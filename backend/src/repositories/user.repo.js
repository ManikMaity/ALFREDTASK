import userModel from "../schemas/user.schema.js";
import crudFunctions from "./crud.js";


const userRepo = {
    ...crudFunctions(userModel),
}

export default userRepo;