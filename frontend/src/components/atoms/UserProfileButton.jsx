import useAuthStore from "@/store/authStore";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function UserProfileButton() {

    const {user} = useAuthStore();
    console.log(user);

  return (
    <Avatar className="bg-zinc-500 outline">
      <AvatarImage src={user.avatar || "https://github.com/shadcn.png"} alt={user.email.split("@")[0] || "user"} />
      <AvatarFallback>{user.email.split("@")[0].toUpperCase() || "P"}</AvatarFallback>
    </Avatar>
  );
}

export default UserProfileButton;
