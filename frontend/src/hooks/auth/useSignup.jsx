import { signupRequest } from "@/apis/user";
import { useToast } from "../use-toast";
import { getErrorMessage } from "@/lib/utilFunc";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

function useSignup() {

    const { toast } = useToast();
    const navigator = useNavigate();

    
    const { mutateAsync : signupMutateAsync, isLoading, error, data, isSuccess } = useMutation({
        mutationFn: signupRequest,
        onSuccess: () => {
            toast({
                title: "Successfully signed up",
                description: "You will be redirected to signin page.",
                type: "success",
            });
            navigator("/signin");
        },
        onError: (error) => {
            toast({
                title: "Error signing up",
                description: getErrorMessage(error),
                type: "error",
            });
        },
    });


    return {
        signupMutateAsync,
        isLoading,
        error,
        data,
        isSuccess
    };
}

export default useSignup;