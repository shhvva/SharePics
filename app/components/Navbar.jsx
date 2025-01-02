import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const username = !user ? "Log In" : user.family_name + " " + user.given_name;
  const urlink = !user
    ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    : user.picture;
  return (
    <nav className="sticky top-0 flex flex-row justify-between items-center p-4 bg-[--menu_bar] shadow-md z-50 h-24 pl-10 pr-10 text-[white]">
      <div className="flex flex-row items-center space-x-4">
        <Image
          src="https://i.pinimg.com/736x/2c/b0/2e/2cb02e6f5a1afef01ed0786e9f2b6bb3.jpg"
          height={80}
          width={80}
          className="rounded-full"
          alt="Logo"
        />
        <h1 className="text-2xl font-bold">SharePics</h1>
      </div>
      <Link href="/profile">
        <div className="flex flex-row items-center space-x-4 text-lg">
          <Image
            src={urlink}
            height={40}
            width={40}
            className="rounded-full"
            alt="Profile Picture"
          />
          <h1>{username}</h1>
        </div>
      </Link>
    </nav>
  );
}
