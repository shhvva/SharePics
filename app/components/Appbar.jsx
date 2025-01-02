"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

export default function Appbar() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/fetchfeed");
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div
      className="max-w-2xl mx-auto mt-8 mb-8 
    flex flex-col items-center 
    justify-start space-y-8 "
    >
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-[--bottom_gradient] shadow-inner
          shadow-[--top_gradient] hover:shadow-md 
          hover:shadow-[--secondary_text] rounded-lg w-full
          hover:-translate-y-2 transition delay-100 ease-in"
        >
          <div className="flex items-center p-4">
            <Image
              src={post.userPhoto}
              alt={post.userName}
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <span className="font-semibold">
              <h1>{post.userName}</h1>
            </span>
          </div>
          <Image
            src={post.image}
            alt="Post content"
            width={400}
            height={400}
            layout="responsive"
          />
          <div className="p-4">
            <div className="flex flex-col mb-2">
              <div>
                <h1 className="mb-2">{post.caption}</h1>
              </div>
              <div>
                <div className="flex items-center">
                  <button onClick={() => handleLike(post.id)} className="mr-3">
                    {post.liked ? (
                      <HeartIconSolid
                        stroke="red"
                        className="h-6 w-6 text-primary border-orange-400"
                      />
                    ) : (
                      <HeartIcon
                        stroke="white"
                        className="h-6 w-6 text-muted-foreground hover:text-primary border-orange-400"
                      />
                    )}
                  </button>
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
