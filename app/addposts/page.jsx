"use client";
import { useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import axios from "axios";
import LoadingScreen from "../components/Loading";

export default function AddPosts() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    try {
      const { data } = await axios.post("/api/addposts", {
        title,
        image,
        caption,
        userId: user.id,
        userName: user.family_name + " " + user.given_name,
        userPhoto: user.picture,
      });
      setTitle("");
      setImage("");
      setCaption("");
      setError("Successfully added post");
    } catch (error) {
      setError(error?.response?.data?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <LoadingScreen />;
  // return (

  return isAuthenticated ? (
    <div className="pt-8 pb-10 lg:pt-12 lg:pb-14 max-w-5xl mx-auto px-6 my-6 bg-[--bottom_gradient] text-[primary_text] rounded-3xl">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
        Create a Post
      </h1>

      {error && (
        <div className="bg-red-700 p-4 rounded-md mb-6">
          <h1>{error}</h1>
        </div>
      )}

      <div className="mt-6 p-10 bg-[--top_gradient] rounded-lg">
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="bg-[menu_bar]">
            <label htmlFor="title">
              <h1 className="text-3xl text-[primary_text]">Title</h1>
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="mt-1 block w-full rounded-md p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="image">
              <h1 className="text-3xl text-[primary_text]">Image URL</h1>
            </label>
            <input
              id="image"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL"
              className="mt-1 block w-full rounded-md p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="caption">
              <h1 className="text-3xl text-[primary_text]">Caption</h1>
            </label>
            <textarea
              id="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Enter post caption"
              className="mt-1 block w-full rounded-md p-2"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="  py-3 px-5 rounded-md shadow-sm text-lg text-[--primary_text] bg-[--bottom_gradient] hover:bg-[--top_gradient] "
            >
              {isSubmitting ? "Creating..." : "Create Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div>
      You have to <LoginLink>Login</LoginLink> to see this page
    </div>
  );
}
