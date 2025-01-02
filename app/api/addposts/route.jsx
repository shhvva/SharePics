// app/api/posts/route.js
import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(request) {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) {
      return NextResponse.json(
        { message: "User not signed in" },
        { status: 401 }
      );
    }

    const { title, image, caption, userId, userName, userPhoto } =
      await request.json();

    // Validate input
    if (!title || !image || !caption || !userId || !userName || !userPhoto) {
      return NextResponse.json(
        { message: "Title, image, and caption are required" },
        { status: 400 }
      );
    }

    // Create post with user association
    const post = await prisma.post.create({
      data: {
        title,
        image,
        caption,
        userId,
        userName,
        userPhoto,
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Failed to create post:", error);
    return NextResponse.json(
      { message: "Failed to create post", error: error.message },
      { status: 500 }
    );
  }
}
