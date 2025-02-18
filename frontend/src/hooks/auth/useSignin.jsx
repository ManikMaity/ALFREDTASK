import useAuthStore from "@/store/authStore";
import { useToast } from "../use-toast";
import { useMutation } from "react-query";
import { signinRequest } from "@/apis/user";
import { getErrorMessage } from "@/lib/utilFunc";
import { useNavigate } from "react-router-dom";

function useSignin() {

    const { toast } = useToast();
    const {signin} = useAuthStore();
    const navigator = useNavigate();
  
  
    const {data, mutateAsync : signinMutateAsync, isError, isLoading, isSuccess, error} = useMutation({
      mutationFn : signinRequest,
      onSuccess : (data) => {
         console.log(data);
          toast({
              title: "Signined in Successfully",
              description: "You will be redirected to home page in a few seconds",
              type: "success",
          });
          localStorage.setItem("flashcard-token", data.token);
          signin(data, data.token);
          setTimeout(() => {
              navigator("/");
          }, 2000);
      },
      onError : (error) => {
          toast({
              title: "Error while signing",
              description: getErrorMessage(error),
              type: "error",
          });
      }
    });
  
  
    return {
      data,
      signinMutateAsync,
      isError, 
      isLoading,
      error,
      isSuccess
    };
  }
  
  export default useSignin;