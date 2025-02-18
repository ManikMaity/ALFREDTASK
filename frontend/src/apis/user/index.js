import axiosInstance from "@/config/axios.config";

export async function signupRequest({email, password}) {
    try {
        console.log(email, password);
        const response = await axiosInstance.post("/user/signup", {email, password});
        return response.data;
    }
    catch(err){
        throw err.response.data;
    }
}


export async function signinRequest({email, password}) {
    try {
        const response = await axiosInstance.post("/user/signin", {email, password});
        return response.data.data;
    }
    catch(err){
        throw err.response.data;
    }
}