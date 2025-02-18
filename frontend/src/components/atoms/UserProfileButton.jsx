import useAuthStore from "@/store/authStore";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";

function UserProfileButton() {

    const {user} = useAuthStore();
    console.log(user);

  return (
    <Link to={"/profile"}>
    <Avatar className="bg-zinc-500 outline">
      <AvatarImage src={user.avatar || "https://github.com/shadcn.png"} alt={user.email.split("@")[0] || "user"} />
      <AvatarFallback>{user.email.split("@")[0].toUpperCase() || "P"}</AvatarFallback>
    </Avatar>
    </Link>
  );
}

export default UserProfileButton;
