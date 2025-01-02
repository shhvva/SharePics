"use client";

import LogoutOutButton from "../components/LogoutOutButton";
import Image from "next/image";
import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import CreateAccount from "../createaccount/page";
import LoadingScreen from "../components/Loading";
import { useState, useEffect } from "react";

export default function Profile() {
  const { user, isLoading } = useKindeBrowserClient();
  const [posts, setPosts] = useState([]);

  async function handleDelete(id) {
    try {
      const response = await fetch("/api/deleteposts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/fetchuserposts");
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  if (isLoading) return <LoadingScreen />;
  if (!user)
    return (
      <div>
        <CreateAccount />{" "}
      </div>
    );

  return (
    <>
      <nav className="sticky top-0 flex justify-between items-center p-4 bg-[--menu_bar] shadow-md z-50 h-24">
        <Link href="/">
          <div className="flex-1 text-left">
            <h1 className="text-xl font-bold">SharePics</h1>
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex-1 text-right">
            <Image
              src={user.picture}
              alt="Profile"
              width={50}
              height={50}
              className="mx-auto rounded-full"
            />
            <h1>{user.family_name + " " + user.given_name}</h1>
          </div>
        </Link>
      </nav>
      <div className="bg-[--background] min-h-svh">
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-[--top_gradient] rounded-lg p-4">
              <div className="text-center mb-8">
                {user?.picture && (
                  <Image
                    src={user.picture}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="w-24 h-24 mx-auto rounded-full"
                  />
                )}
                <h2 className="mt-4 text-xl font-semibold">
                  {user?.family_name + " " + user.given_name ?? "User"}
                </h2>
                <h1 className="text-[--secondary_text]">{user?.email}</h1>
                <LogoutOutButton />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {posts.map((post) => (
                  <div key={post.id} className="relative group">
                    <Image
                      src={post.image}
                      alt="Post"
                      width={300}
                      height={300}
                      className="w-full h-auto"
                    />
                    <h1>{post.title}</h1>
                    <h1>
                      {post.caption} -{" "}
                      {new Date(post.createdAt).toLocaleString()}
                    </h1>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="mx-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                <div className="relative mt-1 w-[360px] h-[410px] flex items-center justify-center border-4 border-dashed border-[--top_gradient] rounded-lg p-4 cursor-pointer">
                  <Link href="/addposts">
                    <div className="flex items-center justify-center w-full h-full">
                      <span className="text-6xl text-[--secondary_text]">
                        +
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
