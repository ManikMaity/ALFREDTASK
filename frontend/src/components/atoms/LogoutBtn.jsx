import useLogout from "@/hooks/auth/useLogout";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

function LogoutBtn() {
  const logoutFn = useLogout();

  return (
    <Button varient={"destructive"} onClick={() => logoutFn()}>
      <LogOut />
      Logout
    </Button>
  );
}

export default LogoutBtn;
