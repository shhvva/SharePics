"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function LogoutOutButton() {
  return (
    <>
      <LogoutLink postLogoutRedirectURL="/">
        <button className="">
          <h1 className="text-[--primary_text] bg-[--bottom_gradient] p-1 rounded-md">
            Log out
          </h1>
        </button>
      </LogoutLink>
    </>
  );
}
