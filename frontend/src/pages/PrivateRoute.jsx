import { toast } from "@/hooks/use-toast";
import useAuthStore from "@/store/authStore"
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {

    const {user, token} = useAuthStore();

    if (user && token) return <Outlet/>
    else{
        toast({
            description : "Please signin first to see your flashcards"
        })
        return <Navigate to={"/signin"}/>
    }

}

export default PrivateRoute
