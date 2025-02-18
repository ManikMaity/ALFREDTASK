import useAuthStore from "@/store/authStore"

function useLogout() {

  const { logout } = useAuthStore();
  
  function logoutFn () {
    logout();
    localStorage.removeItem("flashcard-token");
  }

  return logoutFn;

}

export default useLogout
